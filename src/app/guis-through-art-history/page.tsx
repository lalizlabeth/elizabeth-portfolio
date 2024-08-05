import PageLayout from "../components/PageLayout";
import styles from "../styles/page-layout.module.css";
import Link from "next/link";
import Image from "next/image";

export default function LambdaSchool() {
  return (
    <PageLayout
      title="GUIs through Art History"
      subtitle="Hyperlink Academy, 2021"
      imageSrc="/guis/header.png"
      imageAlt="Collaborative research on the history of art"
    >
      <section className={styles.section}>
        <h2 className={styles.heading1}>Overview</h2>
        <section className={styles.subsection}>
          <p>
            {
              "In this class, we explored new styles of graphical user interfaces (GUIs) inspired by art history movements. Each student will choose and research a movement in art history: rococo, cubism, or pop art. What makes these movements unique? How might we bring those styles or impressions into GUIs? Based on that research, we will design interfaces for common products inspired by that movement. With each exploration, we’ll workshop them together to define a modernized version."
            }
          </p>
          <p>
            {
              "I taught 2 sessions of this course with Hyperlink Academy, an online course platform for interdisciplinary courses."
            }
          </p>
        </section>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading1}>Student work</h2>
        <section className={styles.subsection}>
          <p>
            {
              "A 2-hour variation of the workshop where we focused on the movements of surrealism and rococo. We started by looking for fonts and typography that best suited the movement. Then, followed with exploring a button component and notes app."
            }
          </p>
          <video
            src="/guis/guis.mp4"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            loop
            muted
            autoPlay
          ></video>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>{"Color & typography"}</h3>
          <p>
            {
              "What colors and typography do you associate with each art movement? I loved how students explored gradients and found typefaces we normally wouldn't use in interface design!"
            }
          </p>
          <Image
            src="/guis/visual-base.png"
            alt="Color & typography of each movement"
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>{"Checkboxes for each movement"}</h3>
          <p>
            I challenged them to design checkboxes inspired by one of the
            movements. Can you tell which one is which?
          </p>
          <Image
            src="/guis/checkboxes.png"
            alt="Color pickers of each movement"
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>
            {"Color pickers for each movement"}
          </h3>
          <p>
            I challenged them to design a color picker inspired by one of the
            movements. Can you tell which one is which?
          </p>
          <Image
            src="/guis/color-pickers.png"
            alt="Color pickers of each movement"
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
        <section className={styles.subsection}>
          <h3 className={styles.heading2}>
            {"Collection of surrealism-inspired buttons"}
          </h3>{" "}
          <p>
            Some students went conceptual and others focused on the visual
            elements.
          </p>
          <Image
            src="/guis/surrealism-1.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <Image
            src="/guis/surrealism-2.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <Image
            src="/guis/surrealism-3.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
          <Image
            src="/guis/surrealism-4.png"
            alt="Collage of various playgrounds I've designed."
            width={0}
            height={0}
            unoptimized={true}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </section>
      </section>
    </PageLayout>
  );
}
