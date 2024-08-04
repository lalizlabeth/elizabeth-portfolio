import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

type ExperienceRowProps = { title?: string; subtitle?: string; link?: string };

function ExperienceRow(props: ExperienceRowProps) {
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
            <h3>Teaching &amp; mentorship</h3>
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
            <h3>Process &amp; systems design</h3>
            <ol>
              <ExperienceRow
                title="Training the next generation of designers"
                subtitle="Lambda School, 2020"
                link="/whatever"
              ></ExperienceRow>
              <ExperienceRow
                title="Scalable feedback systems"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/scaling-feedback/"
              ></ExperienceRow>
            </ol>
          </section>
          <section className={styles.experienceGroup}>
            <h3>Product &amp; Craft</h3>
            <ol>
              <ExperienceRow
                title="A learning community for kids"
                subtitle="Primer, 2022"
                link="/"
              ></ExperienceRow>
              <ExperienceRow
                title="Who defines good taste?"
                subtitle="2020"
                link="https://designisaparty.com/who-defines-taste/"
              ></ExperienceRow>
              <ExperienceRow
                title="My outdated portfolio"
                subtitle="2015-2020"
                link="https://designisaparty.com/scaling-feedback/"
              ></ExperienceRow>
            </ol>
          </section>
          <section className={styles.experienceGroup}>
            <h3>Just for fun</h3>
            <ol>
              <ExperienceRow
                title="Notion templates designed by me"
                subtitle="Design is a Party, 2023"
                link="https://www.templatesbyliz.com/"
              ></ExperienceRow>
              <ExperienceRow
                title="An educational font guessing game"
                subtitle="Design is a Party, 2023"
                link="https://www.artofvisualdesign.com/fontguessr"
              ></ExperienceRow>
            </ol>
          </section>
        </section>
        <section className={styles.backstory}>
          <section className={styles.experienceGroup}>
            <h3>My backstory</h3>
            <p>
              My name is Elizabeth! If you&apos;re looking for my resume, you
              can find it <Link href="/ElizabethLinResume2024.pdf">here</Link>.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
