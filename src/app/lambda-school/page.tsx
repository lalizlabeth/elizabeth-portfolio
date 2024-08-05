import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";

export default function LambdaSchool() {
  return (
    <PageLayout
      title="Training the next generation of designers"
      subtitle="Lambda School, 2020"
      imageSrc="/lambda-school/header.png"
      imageAlt="Collaborative Figma exercise on iteration"
    >
      <section className={styles.section}>
        <h2 className={styles.heading1}>Overview</h2>
        <p>
          {
            "In 2020, I joined Lambda School (now BloomTech) to lead and build the second half of the UX design program. During my time there, I did a lot:"
          }
        </p>
        <ol>
          <li>
            Led the experiential learning design team of 2 design managers.
          </li>
          <li>
            Oversaw design portfolio and program quality for 100+ UX design
            students.
          </li>
          <li>
            Mentored students to land roles at companies like Shopify, Disney+,
            and Chase.
          </li>
          <li>Architected scalable remote design feedback systems.</li>
          <li>
            {
              "Designed & developed 5+ months of curriculum for the UX design program."
            }
          </li>
          <li>
            Built a partnership with Figma, so that all students could get Figma
            for free.
          </li>
        </ol>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>A little bit of context</h2>
        <p>
          {
            "Lambda School was a bootcamp famous for their ISA model: learn now and pay a percentage of your income after you get a job. Every program was cohort-based and structured in this way:"
          }
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Snapshots</h2>
        <p>{"Snapshots of some of my favorite moments."}</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Related links</h2>
        <ul className={styles.links}>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/scaling-feedback/">
              {"Blog post: Scaling feedback"}
            </Link>
          </li>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/participation-points/">
              {"Blog post: Participation points"}
            </Link>
          </li>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/learning-playgrounds/">
              {"Blog post: Learning playgrounds"}
            </Link>
          </li>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/creating-community/">
              {"Blog post: Creating learning communities"}
            </Link>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
