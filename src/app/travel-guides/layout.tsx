import { ReactNode } from "react";
import styles from "./travel-guides.module.css";

export default function TravelGuidesLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className={styles.layoutReset}>
            {children}
        </div>
    );
}

