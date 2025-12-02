"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./travel-guides.module.css";

interface GuideCardProps {
    slug: string;
    title: string;
    country?: string;
    featuredImage: string;
    pageId: string;
    featuredImagePropertyId?: string;
    cardBackgroundColor?: string;
    cardTextColor?: string;
    cardTitleSize?: string;
    cardTitleFont?: string;
    cardSubtitleFont?: string;
}

export default function GuideCard({
    slug,
    title,
    country,
    featuredImage,
    pageId,
    featuredImagePropertyId,
    cardBackgroundColor,
    cardTextColor,
    cardTitleSize,
    cardTitleFont,
    cardSubtitleFont,
}: GuideCardProps) {
    const resolvedFeaturedImage =
        featuredImagePropertyId && pageId
            ? `/api/notion-file?pageId=${pageId}&propertyId=${featuredImagePropertyId}`
            : featuredImage;

    const backgroundColor = cardBackgroundColor || "#f0f0f0";
    const textColor = cardTextColor || "#2c2c2c";
    const titleSize = cardTitleSize || "60px";

    // Generate random sparkle positions and properties (6-8 sparkles) only on client
    const [sparkles, setSparkles] = useState<Array<{
        id: number;
        position: { top: string; left: string };
        size: number;
        duration: number;
    }>>([]);

    useEffect(() => {
        const sparkleCount = Math.floor(Math.random() * 3) + 6; // 6-8 sparkles
        const generatedSparkles = Array.from({ length: sparkleCount }, (_, i) => {
            // Random position within the card boundaries
            const topPercent = Math.random() * 100; // 0% to 100%
            const leftPercent = Math.random() * 100; // 0% to 100%

            return {
                id: i,
                position: {
                    top: `${topPercent}%`,
                    left: `${leftPercent}%`,
                },
                size: Math.floor(Math.random() * 15) + 20, // 20-35px
                duration: (Math.random() * 0.4) + 0.5, // 0.5s - 0.9s
            };
        });
        setSparkles(generatedSparkles);
    }, []);

    // Map font names to CSS variables
    const getFontFamily = (fontName?: string, defaultVar: string = "--font-monospace") => {
        if (!fontName) return `var(${defaultVar})`;
        if (fontName.startsWith("var(")) return fontName;

        // Map common font names to CSS variables
        const fontMap: Record<string, string> = {
            "Bricolage Grotesque": "var(--font-bricolage)",
            "Space Mono": "var(--font-space-mono)",
            "Pinyon Script": "var(--font-pinyon-script)",
            "Cherry Bomb One": "var(--font-cherry-bomb)",
        };

        return fontMap[fontName] || `"${fontName}", sans-serif`;
    };

    const titleFont = getFontFamily(cardTitleFont);
    const subtitleFont = getFontFamily(cardSubtitleFont);

    // Split title into two lines for display
    const titleWords = title?.split(" ") || [];
    const midPoint = Math.ceil(titleWords.length / 2);
    const line1 = titleWords.slice(0, midPoint).join(" ");
    const line2 = titleWords.slice(midPoint).join(" ");

    return (
        <Link
            href={`/travel-guides/${slug}`}
            className={styles.guideCard}
            style={{
                backgroundColor,
            }}
        >
            {sparkles.map((sparkle) => (
                <span
                    key={sparkle.id}
                    className={styles.sparkle}
                    aria-hidden="true"
                    style={{
                        ...sparkle.position,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        animationDuration: `${sparkle.duration}s`,
                        backgroundColor: textColor,
                        maskImage: 'url("/travel-guides/sparkle.svg")',
                        WebkitMaskImage: 'url("/travel-guides/sparkle.svg")',
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                    }}
                />
            ))}
            <h3
                className={styles.cardTitle}
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
            </h3>
            <div className={styles.cardImageWrapper}>
                <Image
                    src={resolvedFeaturedImage}
                    alt={title}
                    width={264}
                    height={264}
                    className={styles.guideImage}
                    unoptimized
                />
            </div>
            <p
                className={styles.cardSubtitle}
                style={{
                    fontFamily: subtitleFont,
                    color: textColor,
                }}
            >
                {country?.toUpperCase()}
            </p>
        </Link>
    );
}

