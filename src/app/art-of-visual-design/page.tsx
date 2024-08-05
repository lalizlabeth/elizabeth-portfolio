import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";

export default function ArtofVisualDesign() {
  return (
    <PageLayout
      title="Founding The Art of Visual Design"
      subtitle="Design is a Party, 2023"
      imageSrc="/art-of-visual-design/header.png"
      imageAlt="Learning platform for The Art of Visual Design"
    >
      <section className={styles.section}>
        <h2 className={styles.heading1}>Overview</h2>
        <p>In 2023, I left my full-time job to see if I could do two things:</p>
        <ol>
          <li>Start a successful business on my own.</li>
          <li>Build the best online visual design course.</li>
        </ol>
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
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/lalizlabeth-graphix/">
              {"It all started with lalizlabeth graphix"}
            </Link>
          </li>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/how-to-teach/">
              {"How to teach everything without being everywhere all at once"}
            </Link>
          </li>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/saturns-return/">
              {"Saturn has returned: A new design school"}
            </Link>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
