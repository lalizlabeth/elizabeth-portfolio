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
              {
                "Led design workshops with 100+ attendees including The Art of Typography and Elizabeth’s Case Study Workshop."
              }
            </li>
            <li>
              {
                "Grew an online audience from 0 to 30k followers across Instagram & TikTok."
              }
            </li>
            <li>
              {
                "Learned how to operate a business and file taxes in the EU and UK."
              }
            </li>
            <li>
              {
                "Processed a bunch of paperwork to be approved at a charter school network!"
              }
            </li>
          </ol>
        </section>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Highlights</h2>
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
          <h3 className={styles.heading2}>Process videos</h3>
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
