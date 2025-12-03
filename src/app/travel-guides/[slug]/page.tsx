import Link from "next/link";
import Image from "next/image";
import { getGuideBySlug, getGuideSlugs, getAllGuides } from "@/lib/travel-guides";
import { notFound } from "next/navigation";
import styles from "../travel-guides.module.css";
import MarkdownContent from "./MarkdownContent";
import GuideCard from "../GuideCard";
import StickyGuideHeader from "./StickyGuideHeader";
import GoogleMapEmbed from "./GoogleMapEmbed";

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

    // Get all guides and find next two
    const allGuides = await getAllGuides();
    const currentIndex = allGuides.findIndex((g) => g.slug === params.slug);
    const nextGuides = [];

    if (currentIndex !== -1 && allGuides.length > 1) {
        const nextIndex1 = (currentIndex + 1) % allGuides.length;
        const nextIndex2 = (currentIndex + 2) % allGuides.length;
        nextGuides.push(allGuides[nextIndex1], allGuides[nextIndex2]);
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
            "Cherry Bomb One": "var(--font-cherry-bomb)",
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

                <StickyGuideHeader
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    titleSize={titleSize}
                    titleFont={titleFont}
                    subtitleFont={subtitleFont}
                    line1={line1}
                    line2={line2}
                    country={guide.country || ""}
                />
                {guide.mapEmbedUrl && <GoogleMapEmbed mapEmbedUrl={guide.mapEmbedUrl} />}
                <div className={styles.guideContent}>
                    <MarkdownContent content={guide.content} imageUrlBlockMap={guide.imageUrlBlockMap} />
                </div>
                <footer className={styles.footer}>
                    {nextGuides.length > 0 && (
                        <div className={styles.footerGrid}>
                            {nextGuides.map((nextGuide) => (
                                <GuideCard
                                    key={nextGuide.slug}
                                    slug={nextGuide.slug}
                                    title={nextGuide.title}
                                    country={nextGuide.country}
                                    featuredImage={nextGuide.featuredImage}
                                    pageId={nextGuide.pageId}
                                    featuredImagePropertyId={nextGuide.featuredImagePropertyId}
                                    cardBackgroundColor={nextGuide.cardBackgroundColor}
                                    cardTextColor={nextGuide.cardTextColor}
                                    cardTitleSize={nextGuide.cardTitleSize}
                                    cardTitleFont={nextGuide.cardTitleFont}
                                    cardSubtitleFont={nextGuide.cardSubtitleFont}
                                />
                            ))}
                        </div>
                    )}
                </footer>
            </main>
        </div>
    );
}

