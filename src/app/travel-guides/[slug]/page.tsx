import Link from "next/link";
import Image from "next/image";
import { getGuideBySlug, getGuideSlugs } from "@/lib/travel-guides";
import { notFound } from "next/navigation";
import styles from "../travel-guides.module.css";
import MarkdownContent from "./MarkdownContent";

export async function generateStaticParams() {
    const slugs = await getGuideSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export default async function TravelGuidePage({
    params,
}: {
    params: { slug: string };
}) {
    const guide = await getGuideBySlug(params.slug);

    if (!guide) {
        notFound();
    }

    const backgroundColor = guide.cardBackgroundColor || "#f0f0f0";
    const textColor = guide.cardTextColor || "#2c2c2c";
    const titleSize = guide.cardTitleSize || "120px";

    // Map font names to CSS variables
    const getFontFamily = (fontName?: string, defaultVar: string = "--font-monospace") => {
        if (!fontName) return `var(${defaultVar})`;
        if (fontName.startsWith("var(")) return fontName;

        const fontMap: Record<string, string> = {
            "Bricolage Grotesque": "var(--font-bricolage)",
            "Space Mono": "var(--font-space-mono)",
            "Pinyon Script": "var(--font-pinyon-script)",
        };

        return fontMap[fontName] || `"${fontName}", sans-serif`;
    };

    const titleFont = getFontFamily(guide.cardTitleFont);
    const subtitleFont = getFontFamily(guide.cardSubtitleFont);

    // Split title into two lines for display
    const titleWords = guide.title?.split(" ") || [];
    const midPoint = Math.ceil(titleWords.length / 2);
    const line1 = titleWords.slice(0, midPoint).join(" ");
    const line2 = titleWords.slice(midPoint).join(" ");

    return (
        <div className={styles.wrapper}>


            <main className={styles.guideWrapper}>

                <div
                    className={styles.guideCoverWrapper}
                    style={{
                        backgroundColor,
                    }}
                >
                    <nav>
                        <Link
                            href="/travel-guides"
                            className={styles.navLink}
                            style={{
                                backgroundColor: textColor,
                                color: backgroundColor,
                            }}
                        >
                            All guides
                        </Link>
                    </nav>
                    <h1
                        className={styles.guideCoverTitle}
                        style={{
                            fontFamily: titleFont,
                            color: textColor,
                            fontSize: titleSize,
                        }}
                    >
                        {line1}
                        {line2 && (
                            <>
                                <br />
                                {line2}
                            </>
                        )}
                    </h1>
                    <p
                        className={styles.guideCoverSubtitle}
                        style={{
                            fontFamily: subtitleFont,
                            color: textColor,
                        }}
                    >
                        {guide.country?.toUpperCase()}
                    </p>
                </div>
                <div className={styles.guideContent}>
                    <MarkdownContent content={guide.content} />
                </div>
                <hr className={styles.divider} />
                <footer className={styles.footer}>
                    <Link
                        href="/travel-guides"
                        className={styles.navLink}
                        style={{
                            backgroundColor: textColor,
                            color: backgroundColor,
                        }}
                    >
                        ← Travel guides
                    </Link>
                </footer>
            </main>
        </div>
    );
}

