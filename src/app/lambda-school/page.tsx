import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";

export default function LambdaSchool() {
  return (
    <PageLayout>
      <h1>Training the next generation of designers</h1>
      <section className={styles.section}>
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
        </ul>
      </section>
    </PageLayout>
  );
}
