import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

type TooltipProps = { text: string };

function Tooltip(props: TooltipProps) {
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipText}>{props.text}</p>
    </div>
  );
}

type ExperienceRowProps = {
  title: string;
  subtitle: string;
  link: string;
  tooltip?: string;
};

function ExperienceRow(props: ExperienceRowProps) {
  return (
    <li className={styles.experienceLineItem}>
      <Link href={`${props.link}`}>
        <Tooltip text={`${props.tooltip}`}></Tooltip>
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
                link="/art-of-visual-design"
                tooltip="This is what I most recently worked on!"
              ></ExperienceRow>
              <ExperienceRow
                title="Creating design opportunities"
                subtitle="Primer, 2021"
                link="https://designisaparty.com/creating-community/"
                tooltip="An article from my blog"
              ></ExperienceRow>
              <ExperienceRow
                title="Learning the why"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/learning-the-why/"
                tooltip="Another post from my blog"
              ></ExperienceRow>
            </ol>
          </section>
          <section className={styles.experienceGroup}>
            <h3>Process &amp; systems design</h3>
            <ol>
              <ExperienceRow
                title="Training the next generation of designers"
                subtitle="Lambda School, 2020"
                link="/art-of-visual-design"
                tooltip="Some of the work I'm the most proud of 🥹"
              ></ExperienceRow>
              <ExperienceRow
                title="Scalable feedback systems"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/scaling-feedback/"
                tooltip="This will also take you to my blog!"
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
                tooltip="The most fun I've had working on a product ✨"
              ></ExperienceRow>
              <ExperienceRow
                title="Who defines good taste?"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/who-defines-taste/"
                tooltip="Yet another blog post 🥰"
              ></ExperienceRow>
              <ExperienceRow
                title="My outdated portfolio"
                subtitle="2015-2020"
                link="https://www.elizabethylin.com"
                tooltip="I still love the portfolio design, but tread with caution 😇"
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
                tooltip="I make Notion templates sometimes!"
              ></ExperienceRow>
              <ExperienceRow
                title="An educational font guessing game"
                subtitle="Design is a Party, 2023"
                link="https://www.artofvisualdesign.com/fontguessr"
                tooltip="Try to get Typography Titan 😉!"
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
              I'm a product design leader &amp; educator with more than a decade
              of experience.
            </p>
            <p>
              I also write about my musings on design mentorship and education
              on my blog{" "}
              <Link href="designisaparty.com">design is a party</Link>.
            </p>
          </section>
        </section>
      </section>
      <footer className={styles.footer}>
        <h3>Elsewhere on the internet</h3>
      </footer>
    </main>
  );
}
