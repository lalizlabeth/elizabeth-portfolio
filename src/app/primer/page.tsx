import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Primer() {
  return (
    <PageLayout
      title="A learning community for kids"
      subtitle="Primer, 2022"
      imageSrc="/primer/header.jpg"
      imageAlt="Designs from Primer's room experience"
    >
      <section className={styles.section}>
        <h2 className={styles.heading1}>Overview</h2>
        <section className={styles.subsection}>
          <p>
            <Link className={styles.inlineLink} href="https://primer.com/">
              Primer
            </Link>{" "}
            is an education startup with a mission to change the education
            system from the ground up. I joined Primer as the 1st designer and
            built the design team from the ground up!
          </p>
          <ol>
            <li>
              {
                "Established team design process, user research, and set the bar for design quality."
              }
            </li>
            <li>
              {"Managed Primer’s internship program and the design team."}
            </li>
            <li>
              {
                "Led product & design strategy for key initiatives including Primer Clubs, Rooms, Pursuits, and Journals."
              }
            </li>{" "}
            <li>
              {
                "Collaborated with a brand studio for the Primer rebrand and logo redesign initiatives."
              }
            </li>
            <li>
              {
                "Cultivated team culture during the pandemic by organizing remote-friendly events like lightning talks, birthday parties, and game sessions."
              }
            </li>
          </ol>
        </section>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Highlights</h2>
        <p>
          {
            "During my time at Primer, we went through a lot of product strategy shifts! As an early-stage startup, we had to pivot a lot to find product market fit. These are some of my favorite projects we worked on:"
          }
        </p>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>
            Live, audio chat spaces for learning
          </h3>
          <p>
            {
              "Primer Rooms were live, interactive experiences for small groups! Both educators and students could design and lead learning experiences using this tool."
            }
          </p>
          <Image
            src="/primer/header.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <p>
            {
              "Pen (12), a student who loves to draw, started a weekly club on their own called Really Cool People Person's Club (RCPPC for short) using Primer Rooms. A group of ~10 preteens met on a weekly basis to practice drawing and critiquing each other's work."
            }
          </p>
          <Image
            src="/primer/pen.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>{" "}
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>
            {"Multi-week, immersive learning experiences"}
          </h3>
          <p>
            {
              "After experimenting with short one-off events, we realized that parents might be more willing to pay for long-form experiences similar to courses. We launched Galactic Explorations as our first experience where students worked together to research and discover exoplanets."
            }
          </p>
          <Image
            src="/primer/pursuits.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
      </section>{" "}
      <section className={styles.subsection}>
        <h3 className={styles.heading2}>
          Connecting teen artists from around the world
        </h3>
        <p>
          {
            "We realized that managing COPPA regulations were hindering our ability to quickly grow our online community. I led an experiment called Art Fair where we tested a limited experience for teen (13+) artists. Art Fair reached nearly 1k sign ups in a month."
          }
        </p>
        <video
          src="primer/art-fair.mp4"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          loop
          muted
          autoPlay
        ></video>{" "}
        <p>
          {
            "With this experiment, we also modified the structure of clubs to have more structure including daily art prompts, required feedback cycles, and organized art swaps."
          }
        </p>
      </section>
      <section className={styles.subsection}>
        <h3 className={styles.heading2}>
          Customization for empowering the community
        </h3>
        <p>
          {
            "We wanted to empower our students to feel like they had ownership over the online community! One of the first projects I led was a custom background editor that used CSS. The vision was to eventually make the editor into an educational experience similar to how Neopets personally taught me CSS 😇."
          }
        </p>
        <video
          src="primer/background.mp4"
          width={0}
          height={0}
          style={{ width: "100%", height: "100%" }}
          loop
          muted
          autoPlay
        ></video>
      </section>{" "}
      <section className={styles.subsection}>
        <h3 className={styles.heading2}>
          Led team user research trip to Miami schools
        </h3>
        <p>
          {
            "The last pivot we made was creating in-person microschools. I won't dive into all the details, but I led a full-team user research trip to Miami to conduct research! Our goals were to:"
          }
        </p>
        <ol>
          <li>Dive deeper into known pain points</li>
          <li>
            Surface pain points that teachers and students have in the
            Microschools classrooms
          </li>
          <li>
            Return with shared language and artifacts that help the team make
            product decisions
          </li>
        </ol>
        <Image
          src="/primer/microschools-research.png"
          alt="Primer merch area designed by me"
          width={0}
          height={0}
          unoptimized={true}
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </section>
      <section className={styles.subsection}>
        <h3 className={styles.heading2}>
          Built the design team from the ground up
        </h3>
        <p>
          {
            "It was hard to find screenshots, but I established the Primer team's design process, user research, and set the bar for design quality. Everyone on the team had a basic understanding of Figma and was able to create mock ups using our design library!"
          }
        </p>
        <p>
          {
            "This image is from one of our earliest team brainstorms for building out a challenges system."
          }
        </p>{" "}
        <Image
          src="/primer/brainstorm.png"
          alt="Primer merch area designed by me"
          width={0}
          height={0}
          unoptimized={true}
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </section>
      <section className={styles.subsection}>
        <h3 className={styles.heading2}>
          Creating student-designed Primer merch
        </h3>
        <p>
          {
            "One of the best parts about working at Primer was that we could ask students to design merch for us. I think we had some of the best company swag our there 😈."
          }
        </p>{" "}
        <Image
          src="/primer/swag-wall.png"
          alt="Primer merch area designed by me"
          width={0}
          height={0}
          unoptimized={true}
          style={{ width: "100%", height: "100%" }}
        ></Image>
        <Image
          src="/primer/stickers.png"
          alt="Primer merch area designed by me"
          width={0}
          height={0}
          unoptimized={true}
          style={{ width: "100%", height: "100%" }}
        ></Image>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Related links</h2>
        <ul className={styles.links}>
          <li>
            ↗ {""}
            <Link href="https://designisaparty.com/creating-opportunities/">
              {"Creating design opportunities"}
            </Link>
          </li>
          <li>
            ↗ {""}
            <Link href="https://www.strelioff.com/primer">
              {"Primer redesign case study"}
            </Link>
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
