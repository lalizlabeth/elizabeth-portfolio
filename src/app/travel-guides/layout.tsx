import { ReactNode } from "react";
import styles from "./styles";

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

