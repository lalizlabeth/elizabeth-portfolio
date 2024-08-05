import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";
import Image from "next/image";

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
        <section className={styles.subsection}>
          <p>
            {
              "In 2020, I joined Lambda School (now BloomTech) to lead and build the second half of the UX design program. During my time there, I..."
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
              Mentored students to land roles at companies like Shopify,
              Disney+, and Chase.
            </li>
            <li>Architected scalable remote design feedback systems.</li>
            <li>
              {
                "Designed & developed 5+ months of curriculum for the UX design program."
              }
            </li>
            <li>
              Built a partnership with Figma, so that all students could get
              Figma for free.
            </li>
          </ol>
        </section>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>A little bit of context</h2>
        <section className={styles.subsection}>
          <p>
            {
              "Lambda School was a bootcamp famous for their ISA model: learn now and pay a percentage of your income after you get a job. Every program was cohort-based and structured in this way:"
            }
          </p>
          <ol>
            <li>
              <strong>{"Core instruction (4 months): "}</strong>
              {
                "Instructors taught live lessons and students got evaluated on a weekly and monthly basis. Imagine a structure similar to a stereotypical classroom."
              }
            </li>
            <li>
              <strong>{"Experiential Learning, Labs (4 months): "}</strong>
              {
                "The goal of the experiential learning team was to give students hands-on, real world experience. Students worked in teams of 4-5 to build apps for real stakeholders and clients. During their time in the Labs program, they would complete two projects for their portfolio."
              }
            </li>
            <li>
              <strong>{"Lambda X (Until you land a job): "}</strong>
              {
                "Students who reach Lambda X are endorsed and “job ready.” In Lambda X, they actively worked on their job search and interview prep."
              }
            </li>
          </ol>
          <p>
            {
              "Before I joined, there was no design mentorship or manager support for Labs and beyond. I joined to lead and build the second half of the UX program!"
            }
          </p>
          <Image
            src="lambda-school/program-map.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>The core problem</h3>
          <section className={styles.subsection}>
            <p>
              {
                "During my first week, I quickly discovered a major problem with the existing UX design program."
              }
            </p>
            <blockquote className={styles.blockquote}>
              The UX students did not have the skills they needed to jobs.
            </blockquote>
          </section>
        </section>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Highlights</h2>
        <p>{"Some snapshots of some of my favorite moments."}</p>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Related links</h2>
        <section className={styles.subsection}>
          <p>
            {"Most of my work from Lambda School is documented in blog posts."}
          </p>
          <ul className={styles.links}>
            <li>
              ↗ {""}
              <Link href="https://designisaparty.com/scaling-feedback/">
                {"Scaling feedback"}
              </Link>
            </li>
            <li>
              ↗ {""}
              <Link href="https://designisaparty.com/learning-the-why/">
                {"Learning the why"}
              </Link>
            </li>
            <li>
              ↗ {""}
              <Link href="https://designisaparty.com/participation-points/">
                {"Participation points"}
              </Link>
            </li>
            <li>
              ↗ {""}
              <Link href="https://designisaparty.com/learning-playgrounds/">
                {"Learning playgrounds"}
              </Link>
            </li>
            <li>
              ↗ {""}
              <Link href="https://designisaparty.com/creating-community/">
                {"Creating learning communities"}
              </Link>
            </li>
            <li>
              <Link href="https://elpha.com/posts/2i48449s/designing-remote-learning-communities">
                {"Designing remote learning communities for Elpha"}
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </PageLayout>
  );
}
