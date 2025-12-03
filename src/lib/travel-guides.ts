import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// The database ID from your Notion database
const databaseId = process.env.NOTION_TRAVEL_GUIDES_ID || "";
// The data source ID - this is the collection ID from your database
const dataSourceId = "2a98e553-a9bb-8010-a474-000b36723711";

export type Guide = {
    slug: string;
    title: string;
    country: string;
    featuredImage: string;
    content: string;
    pageId: string;
    featuredImagePropertyId?: string;
    imageUrlBlockMap: Record<string, string>;
    order?: number;
    // Card styling (optional - defaults provided)
    cardBackgroundColor?: string;
    cardTextColor?: string;
    cardTitleFont?: string;
    cardSubtitleFont?: string;
    cardTitleSize?: string;
    mapEmbedUrl?: string;
};

// Helper to extract plain text from Notion rich text
function extractPlainText(property: any): string {
    if (!property) return "";
    if (property.type === "rich_text" && Array.isArray(property.rich_text)) {
        return property.rich_text.map((text: any) => text.plain_text).join("");
    }
    if (property.type === "title" && Array.isArray(property.title)) {
        return property.title.map((text: any) => text.plain_text).join("");
    }
    return "";
}

// Helper to extract number from Notion number property
function extractNumber(property: any): number | undefined {
    if (!property) return undefined;
    if (property.type === "number" && typeof property.number === "number") {
        return property.number;
    }
    return undefined;
}

// Helper to extract file URL from Notion files
function extractFileUrl(property: any): string {
    if (!property) return "";

    // Handle case where property.type is "files"
    if (property.type === "files" && Array.isArray(property.files)) {
        const files = property.files;
        if (files.length === 0) return "";

        const file = files[0];
        if (file.type === "external") {
            return file.external.url;
        } else if (file.type === "file") {
            return file.file.url;
        }
    }

    return "";
}

async function collectImageUrlBlockMap(pageId: string): Promise<Record<string, string>> {
    const map: Record<string, string> = {};

    async function traverse(blockId: string) {
        let cursor: string | undefined;

        do {
            const response = await notion.blocks.children.list({
                block_id: blockId,
                page_size: 100,
                start_cursor: cursor,
            });

            for (const block of response.results) {
                if (!("type" in block)) {
                    continue;
                }

                if (block.type === "image") {
                    const image = block.image;
                    let url = "";

                    if (image.type === "external") {
                        url = image.external.url;
                    } else if (image.type === "file") {
                        url = image.file.url;
                    }

                    if (url) {
                        map[url] = block.id;
                    }
                }

                if ("has_children" in block && block.has_children) {
                    let childBlockId = block.id;

                    if (
                        block.type === "synced_block" &&
                        block.synced_block &&
                        block.synced_block.synced_from &&
                        block.synced_block.synced_from.block_id
                    ) {
                        childBlockId = block.synced_block.synced_from.block_id;
                    }

                    await traverse(childBlockId);
                }
            }

            cursor = response.has_more ? response.next_cursor ?? undefined : undefined;
        } while (cursor);
    }

    await traverse(pageId);

    return map;
}

// Convert Notion page to Guide
async function notionPageToGuide(page: any): Promise<Guide> {
    const properties = page.properties;

    // Extract properties
    const title = extractPlainText(properties.title);
    const country = extractPlainText(properties.country);
    const featuredImage = extractFileUrl(properties.featuredImage);
    const cardBackgroundColor = extractPlainText(properties.cardBackgroundColor);
    const cardTextColor = extractPlainText(properties.cardTextColor);
    const cardTitleFont = extractPlainText(properties.cardTitleFont);
    const cardSubtitleFont = extractPlainText(properties.cardSubtitleFont);
    const order = extractNumber(properties.order);
    const mapEmbedUrl = extractPlainText(properties.mapEmbedUrl);

    const featuredImagePropertyId = properties.featuredImage?.id;

    // Create slug from title
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    const imageUrlBlockMap = await collectImageUrlBlockMap(page.id);

    // Fetch page content
    const n2m = new NotionToMarkdown({ notionClient: notion });
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const content = n2m.toMarkdownString(mdblocks).parent;

    return {
        slug,
        title,
        country,
        featuredImage,
        content,
        pageId: page.id,
        featuredImagePropertyId,
        imageUrlBlockMap,
        order,
        cardBackgroundColor,
        cardTextColor,
        cardTitleFont,
        cardSubtitleFont,
        mapEmbedUrl,
    };
}

export async function getAllGuides(): Promise<Guide[]> {
    try {
        console.log("Fetching guides from Notion...");
        console.log("Data Source ID:", dataSourceId);
        console.log("API Key exists:", !!process.env.NOTION_API_KEY);

        // Use the NEW API: query the data source instead of the database
        const response: any = await notion.dataSources.query({
            data_source_id: dataSourceId,
        });

        console.log("Response received:", response.results?.length, "pages");

        const guides = await Promise.all(
            response.results
                .filter((page: any) => page.object === "page")
                .map((page: any) => notionPageToGuide(page))
        );

        // Sort by order property if it exists, otherwise keep original order
        guides.sort((a, b) => {
            if (a.order !== undefined && b.order !== undefined) {
                return a.order - b.order;
            }
            // If one has order and the other doesn't, prioritize the one with order
            if (a.order !== undefined) return -1;
            if (b.order !== undefined) return 1;
            // If neither has order, maintain original order
            return 0;
        });

        return guides;
    } catch (error) {
        console.error("Error fetching guides from Notion:", error);
        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        return [];
    }
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
    try {
        const guides = await getAllGuides();
        const guide = guides.find((g) => g.slug === slug);
        return guide || null;
    } catch (error) {
        console.error("Error fetching guide by slug:", error);
        return null;
    }
}

export async function getGuideSlugs(): Promise<string[]> {
    try {
        const guides = await getAllGuides();
        return guides.map((guide) => guide.slug);
    } catch (error) {
        console.error("Error fetching guide slugs:", error);
        return [];
    }
}
