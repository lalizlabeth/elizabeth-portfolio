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
            <p>
              {
                "It was a sensitive topic because I had prove that the first 4 months of core instruction needed a complete overhaul. We interviewed design managers at top companies in the industry and validated that our students needed to: "
              }
            </p>
            <ol>
              <li>
                <strong>
                  {"Improve their visual design skills and taste."}
                </strong>
                {
                  " Their design work demonstrated a lack of understanding of visual design fundamentals and modern taste."
                }
              </li>
              <li>
                <strong>{"Learn UX design best principles."}</strong>
                {
                  " Although they were following the “steps” of the design process, their projects were difficult to use because they did not follow standard design patterns."
                }
              </li>
              <li>
                <strong>
                  {"Get comfortable presenting and defending their work."}
                </strong>
                {
                  " During the early design critiques, students did not know how to explain their design reasoning. I was concerned because explaining your process is key to landing a design job."
                }
              </li>
              <li>
                <strong>{"Become experts in design tools."}</strong>
                {
                  " Students did not learn how to use design tools during core instruction. They spent more time struggling with the “how” of the design tool than sketching designs."
                }
              </li>
            </ol>{" "}
            <p>
              {
                "I was originally hired to coach students after they had learned their core skills. However, I quickly had to shift gears and redesign the entire program. Now that you have all the context, I want to share some things I am very proud of accomplishing during my time there 😊."
              }
            </p>
          </section>
        </section>
      </section>
      <hr className={styles.divider}></hr>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Highlights</h2>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Leveling up visual design skills</h3>{" "}
          <p>
            {
              "One of my favorite visual design lessons was when I shared an objectively ugly design 😈 and asked the students to pretend they were my mentor. What should I change, and why?"
            }
          </p>
          <video
            src="/lambda-school/refinement.mp4"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            loop
            muted
            autoPlay
          ></video>
          <p>
            {
              "These are some of their real responses, anonymized by Animal Crossing villagers:"
            }
          </p>
          <Image
            src="/lambda-school/discussion-long.png"
            alt="The design team announcing Design Day!"
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <p>
            The following exercise is from a lesson on the art of iteration.
            Students got into small groups and the goal was to create the
            highest number of visual design iterations on one screen!
          </p>
          <video
            src="/lambda-school/iterations.mp4"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            loop
            muted
            autoPlay
          ></video>{" "}
          <p>
            {"I also wrote about my visual design lessons in"}{" "}
            <Link
              className={styles.inlineLink}
              href="https://designisaparty.com/learning-playgrounds/"
            >
              {"Learning playgrounds"}
            </Link>
            {", "}
            <Link
              className={styles.inlineLink}
              href="https://www.elizabethylin.com/teaching/project/visual-design-club/"
            >
              Teaching visual design
            </Link>
            {", and "}{" "}
            <Link
              className={styles.inlineLink}
              href="https://designisaparty.com/who-defines-taste/"
            >
              {"Who defines good taste?"}
            </Link>
          </p>{" "}
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Scaling feedback</h3>
          <p>
            {
              "With 100+ UX students across full-time and part-time, we couldn’t meet with every student 1-1 every day. Our strategies involved developing feedback themes and sharing them in group or asynchronous settings."
            }
          </p>
          <Image
            src="/lambda-school/interview-prep.gif"
            alt="The design team announcing Design Day!"
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>{" "}
          <p>
            {"I wrote in-depth about our feedback systems in "}
            <Link
              className={styles.inlineLink}
              href="https://designisaparty.com/scaling-feedback/"
            >
              {'"Scaling" feedback'}
            </Link>
            .
          </p>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Teaching design reasoning</h3>
          <p>
            {
              "Learning the why is hard! When things just “feel” right, it can be hard to put a reason behind your feeling. We realized our students needed practice explaining their design reasoning."
            }
          </p>
          <video
            src="/lambda-school/typography-reasoning.mp4"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            loop
            muted
            autoPlay
          ></video>{" "}
          <p>
            {"I wrote in-depth about learning to explain reasoning in "}
            <Link
              className={styles.inlineLink}
              href="https://designisaparty.com/learning-the-why/"
            >
              {"Learning the why"}
            </Link>{" "}
            {" and "}{" "}
            <Link
              className={styles.inlineLink}
              href="https://designisaparty.com/participation-points/"
            >
              {"Participation points"}
            </Link>
            .
          </p>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Figma skills map</h3>
          <p>
            {
              "Outside of visual design principles, we noticed that students had a difficult time using design tools. We didn’t want the tool to become their blocker in creating high-quality design work, so we mapped out every Figma skill in our ideal order of learning."
            }
          </p>
          <video
            src="/lambda-school/figma-map.mp4"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            loop
            muted
            autoPlay
          ></video>
          <p>
            {
              "Students could make a copy of this map and toggle which skills they have mastered!"
            }
          </p>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>Design Day!</h3>
          <p>
            {
              "We wanted to improve student morale as they reached the end of the program. I led an initiative to host a mini conference called “Design Day” to inspire them creatively. We received a small budget of $500 from the leadership team to cover costs. The day consisted of:"
            }
          </p>
          <ol>
            <li>Joyfully subvert the status quo, May-Li Khoe</li>
            <li>Designing for blue sky, Shawn Park</li>
            <li>
              Design internship panel featuring interns from Microsoft, Best
              Buy, and Asana
            </li>
            <li>Design challenge with prizes!</li>
          </ol>{" "}
          <Image
            src="/lambda-school/design-day.png"
            alt="The design team announcing Design Day!"
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
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
              ↗ {""}
              <Link href="https://www.elizabethylin.com/teaching/project/labs/">
                {"Building the Lambda Labs curriculum"}
              </Link>
            </li>
            <li>
              ↗ {""}
              <Link href="https://www.elizabethylin.com/teaching/project/visual-design-club/">
                {"Teaching visual design"}
              </Link>
            </li>
            <li>
              ↗ {""}
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
