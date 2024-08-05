import Image from "next/image";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";

type PageLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function PageLayout(props: PageLayoutProps) {
  return (
    <main className={styles.main}>
      <nav>
        <Link href="/" className={styles.homeLink}>
          🏠 Elizabeth Lin
        </Link>
      </nav>
      <header className={styles.header}>
        <h1>{props.title}</h1>
        <h4 className={styles.headerSubtitle}>{props.subtitle}</h4>
      </header>
      {props.children}
    </main>
  );
}
