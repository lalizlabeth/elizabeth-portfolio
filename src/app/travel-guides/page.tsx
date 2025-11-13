import { getAllGuides } from "@/lib/travel-guides";
import styles from "./travel-guides.module.css";
import GuideCard from "./GuideCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Travel guides by @lalizlabeth",
    description: "Personal travel guides with recommendations for Mexico City, Oaxaca, and more destinations.",
    openGraph: {
        title: "Travel guides by @lalizlabeth",
        description: "Personal travel guides with recommendations for Mexico City, Oaxaca, and more destinations.",
        url: "https://lalizlabeth.com/travel-guides",
        siteName: "Elizabeth Lin: Product Designer & Educator",
        images: [
            {
                url: "https://lalizlabeth.com/travel-guides/og-image@2x.png",
                width: 2400,
                height: 1260,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Travel guides by @lalizlabeth",
        description: "Personal travel guides with recommendations for Mexico City, Oaxaca, and more destinations.",
        images: [
            {
                url: "https://lalizlabeth.com/travel-guides/og-image@2x.png",
                width: 2400,
                height: 1260,
            },
        ],
    },
};

export default async function TravelGuidesPage() {
    const guides = await getAllGuides();

    return (
        <div className={styles.wrapper}>
            <main className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Travel<br />Guides</h1>
                    <p className={styles.subtitle}>By @lalizlabeth</p>
                </header>
                <ul className={styles.guideList}>
                    {guides.map((guide) => (
                        <li key={guide.slug}>
                            <GuideCard
                                slug={guide.slug}
                                title={guide.title}
                                country={guide.country}
                                featuredImage={guide.featuredImage}
                                pageId={guide.pageId}
                                featuredImagePropertyId={guide.featuredImagePropertyId}
                                cardBackgroundColor={guide.cardBackgroundColor}
                                cardTextColor={guide.cardTextColor}
                                cardTitleSize={guide.cardTitleSize}
                                cardTitleFont={guide.cardTitleFont}
                                cardSubtitleFont={guide.cardSubtitleFont}
                            />
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

