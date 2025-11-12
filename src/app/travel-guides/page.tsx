import { getAllGuides } from "@/lib/travel-guides";
import styles from "./travel-guides.module.css";
import GuideCard from "./GuideCard";

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

