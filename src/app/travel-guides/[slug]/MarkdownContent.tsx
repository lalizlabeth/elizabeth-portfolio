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
            const blockId = imageUrlBlockMap?.[url];

            if (blockId) {
                return `/api/notion-file?blockId=${blockId}`;
            }
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


