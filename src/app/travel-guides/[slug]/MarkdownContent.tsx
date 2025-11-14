"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Element } from "hast";
import styles from "../travel-guides.module.css";

type MarkdownContentProps = {
    content: string;
    imageUrlBlockMap: Record<string, string>;
};

export default function MarkdownContent({ content, imageUrlBlockMap }: MarkdownContentProps) {
    const urlTransform = (url: string, _key: string, node: Element) => {
        if (!url) {
            return url;
        }

        if (node?.tagName === "img") {
            // Try exact match first
            let blockId = imageUrlBlockMap?.[url];

            // If no exact match, try to find by comparing base URLs (without query params)
            if (!blockId) {
                const urlBase = url.split('?')[0];
                for (const [mapUrl, mapBlockId] of Object.entries(imageUrlBlockMap || {})) {
                    const mapUrlBase = mapUrl.split('?')[0];
                    if (urlBase === mapUrlBase) {
                        blockId = mapBlockId;
                        break;
                    }
                }
            }

            if (blockId) {
                return `/api/notion-file?blockId=${blockId}`;
            }

            console.warn('No blockId found for image URL:', url);
            console.warn('Available URLs in map:', Object.keys(imageUrlBlockMap || {}));
        }

        return url;
    };

    return (
        <div className={styles.markdownContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
                {content}
            </ReactMarkdown>
        </div>
    );
}


