import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

type ExperienceRowProps = { title?: string; subtitle?: string; link?: string };

export function ExperienceRow(props: ExperienceRowProps) {
  return (
    <li className={styles.experienceLineItem}>
      <Link href={`${props.link}`}>
        <h4>{props.title}</h4>
        <h4 className={styles.subtitle}>{props.subtitle}</h4>
      </Link>
    </li>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <h1>Elizabeth Lin</h1>
        <h2>Product Design Leader &amp; Educator</h2>
      </header>
      <section className={styles.content}>
        <section className={styles.experience}>
          <section className={styles.experienceGroup}>
            <h3>Teaching & mentorship</h3>
            <ol>
              <ExperienceRow
                title="Building The Art of Visual Design"
                subtitle="Design is a Party, 2023"
                link="/whatever"
              ></ExperienceRow>
              <ExperienceRow
                title="Creating design opportunities"
                subtitle="Primer, 2021"
                link="https://designisaparty.com/creating-community/"
              ></ExperienceRow>
              <ExperienceRow
                title="Learning the why"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/learning-the-why/"
              ></ExperienceRow>
            </ol>
          </section>
          <section className={styles.experienceGroup}>
            <h3>Process & systems design</h3>
            <ol>
              <ExperienceRow
                title="Training the next generation of designers"
                subtitle="Lambda School, 2020"
                link="/whatever"
              ></ExperienceRow>
              <ExperienceRow
                title="Scalable feedback systems"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/scaling-feedback//"
              ></ExperienceRow>
            </ol>
          </section>
        </section>
        <section className={styles.backstory}>
          <section className={styles.experienceGroup}>
            <h3>My backstory</h3>
            <p>
              My name is Elizabeth! If you're looking for my resume, you can
              find it <Link href="/ElizabethLinResume2024.pdf">here</Link>.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
