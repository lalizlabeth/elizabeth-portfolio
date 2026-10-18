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
  const isExternal = /^https?:\/\//.test(props.link);
  return (
    <li className={styles.experienceLineItem}>
      <Link
        href={`${props.link}`}
        className={styles.link}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        <Tooltip text={`${props.tooltip}`}></Tooltip>
        <h4 className={styles.title}>{props.title}</h4>
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
        <h2>Product Designer &amp; Educator</h2>
      </header>
      <section className={styles.columns}>
        <div className={styles.column}>
          <section className={styles.experienceGroup}>
            <h3>About me</h3>
            <Link className={styles.link} href="/ElizabethLinResume2024.pdf">
              <h4 className={styles.title}>↗ Resume</h4>
            </Link>
            <p>
              {
                "My name is Elizabeth! I'm currently the first design program manager at Ramp where I enable designers to use AI in their workflows and build culture across the team."
              }
            </p>
            <p>
              {
                "I also run an alternative design school called"} <Link className={styles.inlineLink} href='https://www.designisaparty.com/' target="_blank" rel="noopener noreferrer">design is a party</Link> {"where I teach designers how to prototype with AI and improve their visual design skills."}
            </p>
            <p>
              {
                "Outside of design, I love talking about Alexander McQueen, judging people's reading lists, and playing classical saxophone."
              }
            </p>
          </section>
        </div>
        <div className={styles.column}>
          <section className={styles.experienceGroup}>
            <h3>Teaching &amp; mentorship</h3>
            <ol>
              <ExperienceRow
                title="Prototyping with Cursor"
                subtitle="Design is a Party, 2025"
                link="https://designisaparty.com/prototyping"
                tooltip="This is what I am working on now!"
              ></ExperienceRow>
              <ExperienceRow
                title="The Art of Visual Design"
                subtitle="Design is a Party, 2023-2024"
                link="/art-of-visual-design"
                tooltip="300+ students have enrolled!"
              ></ExperienceRow>
              <ExperienceRow
                title="Prototyping for Masters"
                subtitle="School for Visual Arts, 2025–2026"
                link="https://prototyping-for-masters-26.vercel.app/"
                tooltip="A prototyping class I teach at SVA"
              ></ExperienceRow>
              <ExperienceRow
                title="How I AI"
                subtitle="2025"
                link="https://www.youtube.com/watch?v=zQkFJNj-2lw&lc=UgzCeLdbexHx8qdkMap4AaABAg"
                tooltip="My first podcast episode!"
              ></ExperienceRow>
              <ExperienceRow
                title="Design Better Podcast"
                subtitle="2025"
                link="https://designbetterpodcast.com/p/elizabeth-lin"
                tooltip="My episode on the Design Better Podcast"
              ></ExperienceRow>
              <ExperienceRow
                title="Elizabeth's Declassified Guide to Product Design"
                subtitle="Design is a Party, 2024"
                link="https://courses.designisaparty.com/course/course_9c2d8f37-4a1b-4f3e-9a62-b1c8d7e2f5a3"
                tooltip="A guide with all my advice for emerging product designers!"
              ></ExperienceRow>
              <ExperienceRow
                title="Elizabeth's Portfolio Guide"
                subtitle="Design is a Party, 2023"
                link="https://courses.designisaparty.com/course/course_9c2d8f37-4a1b-4f3e-9a62-b1c8d7e2f5a3"
                tooltip="My guide for building a portfolio"
              ></ExperienceRow>
              <ExperienceRow
                title="Training the next generation of designers"
                subtitle="Lambda School, 2020"
                link="/lambda-school"
                tooltip="Some of my proudest work 🥹"
              ></ExperienceRow>
              <ExperienceRow
                title="Learning the why"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/blog/learning-the-why/"
                tooltip="📄 Blog: Thoughts on teaching design reasoning"
              ></ExperienceRow>
              <ExperienceRow
                title="Designing interfaces for connection"
                subtitle="Type Electives, 2025"
                link="https://designisaparty.com/designing-interfaces-for-connection/"
                tooltip="A class I taught about exploring chat interfaces"
              ></ExperienceRow>
            </ol>
          </section>
        </div>
        <div className={styles.column}>
          <section className={styles.experienceGroup}>
            <h3>Product &amp; Craft</h3>
            <ol>
              <ExperienceRow
                title="How we built ramp.design"
                subtitle="Ramp, 2026"
                link="https://www.youtube.com/watch?v=UWpH537zzuo"
                tooltip="A video about how we built ramp.design"
              ></ExperienceRow>
              <ExperienceRow
                title="A learning community for kids"
                subtitle="Primer, 2020-2023"
                link="/primer"
                tooltip="I learned a lot as the founding designer on this team!"
              ></ExperienceRow>
              <ExperienceRow
                title="Who defines good taste?"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/blog/who-defines-taste/"
                tooltip="📄 Yet another blog post, this one about taste"
              ></ExperienceRow>
              <ExperienceRow
                title="On playful design"
                subtitle="Delightful Products, 2020"
                link="https://www.delightfulproducts.org/posts/elizabeth-lin"
                tooltip="An interview about bringing play into design"
              ></ExperienceRow>
              <ExperienceRow
                title="My outdated portfolio"
                subtitle="2015-2020"
                link="https://www.elizabethylin.com"
                tooltip="I still love the portfolio design, but pls tread with caution 😇"
              ></ExperienceRow>
            </ol>
          </section>
          <section className={styles.experienceGroup}>
            <h3>Process &amp; systems design</h3>
            <ol>
              <ExperienceRow
                title="Creating design opportunities"
                subtitle="Primer, 2020"
                link="https://designisaparty.com/blog/creating-opportunities/"
                tooltip="📄 Blog: How we found a Primer design intern"
              ></ExperienceRow>
              <ExperienceRow
                title="Scalable feedback systems"
                subtitle="Lambda School, 2020"
                link="https://designisaparty.com/blog/scaling-feedback/"
                tooltip="📄 Blog: How I built feedback systems for 100+ students"
              ></ExperienceRow>
            </ol>
          </section>
        </div>
        <div className={styles.column}>
          <section className={styles.experienceGroup}>
            <h3>Just for fun</h3>
            <ol>
              <ExperienceRow
                title="My design books"
                subtitle="2025"
                link="https://www.designisaparty.com/design-books"
                tooltip="A digital version of my design book collection"
              ></ExperienceRow>
              <ExperienceRow
                title="Discover your design aesthetic quiz"
                subtitle="2024"
                link="https://www.artofvisualdesign.com/aesthetic-quiz"
                tooltip="The stars will reveal your design aesthetic~"
              ></ExperienceRow>
              <ExperienceRow
                title="Reveal your design destiny"
                subtitle="2024"
                link="https://www.artofvisualdesign.com/crystal-ball"
                tooltip="Let my crystal ball tell you waht to design next!"
              ></ExperienceRow>
              <ExperienceRow
                title="An educational font guessing game"
                subtitle="2023"
                link="https://www.artofvisualdesign.com/fontguessr"
                tooltip="Are you a Typography Titan? 😉"
              ></ExperienceRow>
              <ExperienceRow
                title="Jeopardy run by Figma variables"
                subtitle="2023"
                link="https://www.figma.com/community/file/1258765867218511354/figma-jeopardy"
                tooltip="I'll take Typography for $1000!"
              ></ExperienceRow>
              <ExperienceRow
                title="GUIS through art history"
                subtitle="2021"
                link="/guis-through-art-history"
                tooltip="I taught a class exploring interfaces inspired by Rococo and Surrealism"
              ></ExperienceRow>
              <ExperienceRow
                title="Notion templates designed by me"
                subtitle="2023"
                link="https://www.templatesbyliz.com/"
                tooltip="I make Notion templates sometimes!"
              ></ExperienceRow>
              <ExperienceRow
                title="What we can learn from Neopets"
                subtitle="2023"
                link="https://www.figma.com/proto/trrEXpOenNuxBnv0qCPjpw/%E2%9C%A8-What-we-can-learn-from-Neopets?page-id=0%3A1&node-id=2-2&viewport=415%2C514%2C0.02&t=hfDXJgmWxzAsrEqJ-1&scaling=contain&content-scaling=fixed/"
                tooltip="I learned everything I know from Neopets"
              ></ExperienceRow>
            </ol>
          </section>
        </div>
      </section>
      <footer className={styles.footer}>
        <h3>Elsewhere on the internet</h3>
        <section className={styles.links}>
          <Link href="https://designisaparty.com/blog" target="_blank" rel="noopener noreferrer">
            <h4 className={styles.title}>Blog</h4>
          </Link>
          ·
          <Link href="https://www.linkedin.com/in/elizabethylin/" target="_blank" rel="noopener noreferrer">
            <h4 className={styles.title}>LinkedIn</h4>
          </Link>
          ·
          <Link href="https://x.com/lalizlabeth" target="_blank" rel="noopener noreferrer">
            <h4 className={styles.title}>Twitter</h4>
          </Link>
          ·
          <Link href="https://www.tiktok.com/@lalizlabeth" target="_blank" rel="noopener noreferrer">
            <h4 className={styles.title}>TikTok</h4>
          </Link>{" "}
          ·
          <Link href="https://www.instagram.com/lalizlabeth.design/" target="_blank" rel="noopener noreferrer">
            <h4 className={styles.title}>Instagram</h4>
          </Link>
          ·
          <Link href="https://www.youtube.com/channel/UCUVHN5VUbFL_XuawreeImPw" target="_blank" rel="noopener noreferrer">
            <h4 className={styles.title}>YouTube</h4>
          </Link>
        </section>
      </footer>
    </main>
  );
}
