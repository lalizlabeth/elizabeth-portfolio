"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../travel-guides.module.css";

export default function MarkdownContent({ content }: { content: string }) {
    return (
        <div className={styles.markdownContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
}

