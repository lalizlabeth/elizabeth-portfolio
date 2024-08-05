import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Primer() {
  return (
    <PageLayout
      title="A learning community for kids"
      subtitle="Primer, 2022"
      imageSrc="/primer/header.png"
      imageAlt="Designs from Primer's room experience"
    >
      <section className={styles.section}>
        <h2 className={styles.heading1}>Overview</h2>
        <section className={styles.subsection}>
          <p>I joined Primer as the</p>
          <ol>
            <li>
              Led the experiential learning design team of 2 design managers.
            </li>
          </ol>
        </section>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Highlights</h2>
        <h3 className={styles.heading2}>Student stories</h3>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Related links</h2>
        <ul className={styles.links}>
          <li>
            ↗ {""}
            <Link href="https://www.artofvisualdesign.com/">
              {"The Art of Visual Design (Elizabeth's Version)"}
            </Link>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
