import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LambdaSchool() {
  return (
    <PageLayout
      title="GUIs through Art History"
      subtitle="Lambda School, 2021"
      imageSrc="/lambda-school/header.png"
      imageAlt="Collaborative Figma exercise on iteration"
    >
      <section className={styles.section}>
        <h2 className={styles.heading1}>Overview</h2>
      </section>
    </PageLayout>
  );
}
