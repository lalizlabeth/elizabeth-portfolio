import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";
import Image from "next/image";

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
        <section className={styles.subsection}>
          <p>
            In March 2023, I left my full-time job to see if I could do two
            things:
          </p>
          <ol>
            <li>Start a successful business on my own.</li>
            <li>Build the best online visual design course.</li>
          </ol>

          <p>
            {
              "And I did it 😇! In Nov 2023, I launched a self-paced and interactive 2-course series called"
            }{" "}
            <Link
              className={styles.inlineLink}
              href="https://www.artofvisualdesign.com/"
            >
              {"The Art of Visual Design (Elizabeth’s Version)"}
            </Link>{" "}
            {"powered by a learning platform I built from scratch."}
          </p>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>{"By the numbers"}</h3>
          <ol>
            <li>
              <strong>{"200+ students "}</strong>
              {"have enrolled since the launch in November 2023."}
            </li>
            <li>
              <strong>{"1,500+ downloads "}</strong>
              {" on my digitally published resources: "}
              <Link
                href="templatesbyliz.com/portfolio"
                className={styles.inlineLink}
              >
                {"Elizabeth’s Portfolio Guide"}
              </Link>
              ,{" "}
              <Link
                href="templatesbyliz.com/job-tracker"
                className={styles.inlineLink}
              >
                {"Elizabeth’s Job Tracker"}
              </Link>
              , and{" "}
              <Link
                href="templatesbyliz.com/product-design"
                className={styles.inlineLink}
              >
                {"Elizabeth’s Declassified Guide to Product Design"}
              </Link>
              {"."}
            </li>
            <li>
              {"Led design workshops with "} <strong>{"100+ attendees"}</strong>{" "}
              {
                "including The Art of Typography and Elizabeth’s Case Study Workshop."
              }
            </li>
            <li>
              {"Grew an online audience from "}{" "}
              <strong>{"0 to 30k followers"}</strong>{" "}
              {"across Instagram and TikTok."}
            </li>
          </ol>
        </section>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Highlights</h2>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Curriculum development</h3>
          <p>
            {
              "When I was developing the curriculum, my goal was to strike a balance between the practical and experimental. I divided learning visual design into three foundational areas:"
            }
          </p>
          <ol>
            <li>
              <strong>Technique:</strong>{" "}
              {
                "How do you make your ideas come to life? Execution should not be a blocker to your ideas. If you have an idea in your head, you should be able to create it in your design tool of choice in an effective way."
              }
            </li>
            <li>
              <strong>Taste:</strong>{" "}
              {
                "How do you know when something is considered good taste according to the industry? How can you cultivate your own aesthetic? When something feels off, can you articulate what’s off about it?"
              }
            </li>
            <li>
              <strong>Tactics:</strong>{" "}
              {
                "What are the design standards that industry professionals abide by? What is the most methodical way to create a type hierarchy? When your design doesn’t look good yet, what are strategies you can employ to improve it?"
              }
            </li>
          </ol>
          <p>
            {"You can read more about my curriculum development process in "}{" "}
            <Link
              className={styles.inlineLink}
              href="https://designisaparty.com/how-to-teach/"
            >
              How to teach everything without being everywhere all at once
            </Link>
            .
          </p>
          <video
            src="/art-of-visual-design/curriculum.mp4"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            loop
            muted
            autoPlay
          ></video>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Learning playgrounds</h3>
          <p>
            {"My teaching philosophy is centered around "}
            <Link
              href="designisaparty.com/learning-playgrounds"
              className={styles.inlineLink}
            >
              {"learning playgrounds"}
            </Link>
            {
              ", spaces intentionally designed to guide students in exploring various topics. When I build a playground, I try to balance structure while creating space for free play."
            }
          </p>{" "}
          <Image
            src="/art-of-visual-design/examples.gif"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Live events</h3>
          <p>
            {
              "This is a screenshot from one of my public educational live events! I use Figma to run all my workshops. It gets a little chaotic sometimes, but it's so much fun! My aspiration is to mimic the energy of an IRL experience."
            }
          </p>
          <Image
            src="/art-of-visual-design/figma-workshop.png"
            alt="Live event for teaching Figma."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Breaking the rules</h3>
          <p>
            {
              "The second course is called “What rules?” I wanted to create space for us to question the “rules” created by the design industry. Can “ugly” be defined? What happens when instead of being constrained to one color in your design, you have to use five? What happens when you have to create a type hierarchy using Papyrus?"
            }
          </p>
          <Image
            src="/art-of-visual-design/break-the-rules.gif"
            alt="Live event for teaching Figma."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Teaching my process</h3>
          <p>
            {
              "I started a YouTube channel! One of my favorite videos is this video on how I find and use design inspiration in my own design work."
            }
          </p>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/h0Op1UAvtTM?si=fzT5Et9MfGKcTAWG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </section>
      </section>
      <hr className={styles.divider}></hr>
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
            <Link href="https://www.youtube.com/channel/UCUVHN5VUbFL_XuawreeImPw">
              {"Educational long-form videos"}
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
