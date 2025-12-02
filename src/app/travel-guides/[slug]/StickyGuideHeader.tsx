"use client";

import Link from "next/link";
import styles from "../travel-guides.module.css";

interface StickyGuideHeaderProps {
    backgroundColor: string;
    textColor: string;
    titleSize: string;
    titleFont: string;
    subtitleFont: string;
    line1: string;
    line2: string;
    country: string;
}

export default function StickyGuideHeader({
    backgroundColor,
    textColor,
    titleSize,
    titleFont,
    subtitleFont,
    line1,
    line2,
    country,
}: StickyGuideHeaderProps) {
    return (
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
                <span className={styles.titleLine1}>{line1}</span>
                {line2 && (
                    <>
                        <br className={styles.titleBreak} />
                        <span className={styles.titleLine2}>{line2}</span>
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
                {country?.toUpperCase()}
            </p>
        </div>
    );
}

