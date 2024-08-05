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
      <Link href={`${props.link}`} className={styles.link}>
        <Tooltip text={`${props.tooltip}`}></Tooltip>
        <h4 className={styles.title}>↗ {props.title}</h4>
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
                title="Founding The Art of Visual Design"
                subtitle="Design is a Party, 2023"
                link="/art-of-visual-design"
                tooltip="This is what I most recently worked on!"
              ></ExperienceRow>
              <ExperienceRow
                title="Creating design opportunities"
                subtitle="Primer, 2021"
                link="https://designisaparty.com/creating-community/"
                tooltip="📄 Blog: Making opportunities for young designers"
              ></ExperienceRow>
              <ExperienceRow
                title="Learning the why"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/learning-the-why/"
                tooltip="Another post from my blog on learning to explain the why 🧐"
              ></ExperienceRow>
            </ol>
          </section>
          <section className={styles.experienceGroup}>
            <h3>Process &amp; systems design</h3>
            <ol>
              <ExperienceRow
                title="Training the next generation of designers"
                subtitle="Lambda School, 2020"
                link="/lambda-school"
                tooltip="Some work I'm the most proud of 🥹"
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
                link="/primer"
                tooltip="The most fun I've had working on a product ✨"
              ></ExperienceRow>
              <ExperienceRow
                title="Who defines good taste?"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/who-defines-taste/"
                tooltip="Yet another blog post, this one about taste 🥰"
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
                title="An educational font guessing game"
                subtitle="2023"
                link="https://www.artofvisualdesign.com/fontguessr"
                tooltip="Try to get Typography Titan 😉!"
              ></ExperienceRow>
              <ExperienceRow
                title="Jeopardy run by Figma variables"
                subtitle="2023"
                link="https://www.figma.com/community/file/1258765867218511354/figma-jeopardy"
                tooltip="Typography for $1000!"
              ></ExperienceRow>
              <ExperienceRow
                title="Notion templates designed by me"
                subtitle="2023"
                link="https://www.templatesbyliz.com/"
                tooltip="I make Notion templates sometimes!"
              ></ExperienceRow>
            </ol>
          </section>
        </section>
        <section className={styles.backstory}>
          <section className={styles.experienceGroup}>
            <h3>My backstory</h3>
            <Link className={styles.link} href="/ElizabethLinResume2024.pdf">
              <h4 className={styles.title}>↗ Resume</h4>
            </Link>
            <p>
              My name is Elizabeth! I&apos;m a product design leader &amp;
              educator with more than a decade of experience.
            </p>
            <p>
              I also write about my musings on design mentorship and education
              on my blog{" "}
              <Link href="designisaparty.com" className={styles.link}>
                design is a party
              </Link>
              .
            </p>
          </section>
        </section>
      </section>
      <footer className={styles.footer}>
        <h3>Elsewhere on the internet</h3>
        <section className={styles.links}>
          <Link href="https://designisaparty.com/">
            <h4 className={styles.title}>Blog</h4>
          </Link>
          ·
          <Link href="https://www.linkedin.com/in/elizabethylin/">
            <h4 className={styles.title}>LinkedIn</h4>
          </Link>
          ·
          <Link href="https://x.com/lalizlabeth">
            <h4 className={styles.title}>Twitter</h4>
          </Link>
          ·
          <Link href="https://www.tiktok.com/@lalizlabeth">
            <h4 className={styles.title}>TikTok</h4>
          </Link>{" "}
          ·
          <Link href="https://www.tiktok.com/@lalizlabeth.design">
            <h4 className={styles.title}>Instagram</h4>
          </Link>
          ·
          <Link href="https://www.youtube.com/channel/UCUVHN5VUbFL_XuawreeImPw">
            <h4 className={styles.title}>YouTube</h4>
          </Link>
        </section>
      </footer>
    </main>
  );
}
