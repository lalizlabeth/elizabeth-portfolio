import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

function ensureNotionAuth() {
    if (!process.env.NOTION_API_KEY) {
        throw new Error("NOTION_API_KEY is not defined.");
    }
}

type NotionFileInfo = {
    url: string;
    type: "file" | "external";
};

async function getFileInfoFromBlock(blockId: string): Promise<NotionFileInfo | null> {
    const block = await notion.blocks.retrieve({ block_id: blockId });

    if (!("type" in block)) {
        return null;
    }

    if (block.type === "image") {
        const image = block.image;
        if (image.type === "external") {
            return { type: "external", url: image.external.url };
        }
        if (image.type === "file") {
            return { type: "file", url: image.file.url };
        }
    }

    if (block.type === "file") {
        const file = block.file;
        if (file.type === "external") {
            return { type: "external", url: file.external.url };
        }
        if (file.type === "file") {
            return { type: "file", url: file.file.url };
        }
    }

    if (block.type === "pdf") {
        const pdf = block.pdf;
        if (pdf.type === "external") {
            return { type: "external", url: pdf.external.url };
        }
        if (pdf.type === "file") {
            return { type: "file", url: pdf.file.url };
        }
    }

    if (block.type === "video") {
        const video = block.video;
        if (video.type === "external") {
            return { type: "external", url: video.external.url };
        }
        if (video.type === "file") {
            return { type: "file", url: video.file.url };
        }
    }

    return null;
}

async function getFileInfoFromProperty(pageId: string, propertyId: string): Promise<NotionFileInfo | null> {
    const property = await notion.pages.properties.retrieve({
        page_id: pageId,
        property_id: propertyId,
    });

    if (!("type" in property)) {
        return null;
    }

    if (property.type === "files") {
        const files = property.files || [];
        const firstFile = files.find((file) => {
            if (file.type === "file") return true;
            if (file.type === "external") return true;
            return false;
        });

        if (firstFile) {
            if (firstFile.type === "external") {
                return { type: "external", url: firstFile.external.url };
            }
            if (firstFile.type === "file") {
                return { type: "file", url: firstFile.file.url };
            }
        }
    }

    return null;
}

async function streamFile(url: string) {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok || !response.body) {
        throw new Error(`Unable to fetch Notion file: ${response.status} ${response.statusText}`);
    }

    const headers = new Headers();
    const contentType = response.headers.get("content-type");
    const contentLength = response.headers.get("content-length");

    if (contentType) {
        headers.set("Content-Type", contentType);
    }
    if (contentLength) {
        headers.set("Content-Length", contentLength);
    }

    headers.set("Cache-Control", "public, max-age=60, stale-while-revalidate=300");

    return new NextResponse(response.body, {
        status: 200,
        headers,
    });
}

export async function GET(request: NextRequest) {
    try {
        ensureNotionAuth();

        const { searchParams } = new URL(request.url);
        const blockId = searchParams.get("blockId");
        const pageId = searchParams.get("pageId");
        const propertyId = searchParams.get("propertyId");

        if (!blockId && !(pageId && propertyId)) {
            return NextResponse.json(
                { error: "Provide either blockId or both pageId and propertyId." },
                { status: 400 }
            );
        }

        let fileInfo: NotionFileInfo | null = null;

        if (blockId) {
            fileInfo = await getFileInfoFromBlock(blockId);
        } else if (pageId && propertyId) {
            fileInfo = await getFileInfoFromProperty(pageId, propertyId);
        }

        if (!fileInfo) {
            return NextResponse.json({ error: "File not found." }, { status: 404 });
        }

        if (fileInfo.type === "external") {
            return NextResponse.redirect(fileInfo.url, 302);
        }

        return await streamFile(fileInfo.url);
    } catch (error) {
        console.error("Error proxying Notion file:", error);
        return NextResponse.json({ error: "Failed to load file." }, { status: 500 });
    }
}

