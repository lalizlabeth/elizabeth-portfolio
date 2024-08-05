import type { Metadata } from "next";
import { IBM_Plex_Mono, Alegreya } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const alegreya = Alegreya({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fancy",
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-monospace",
});

export const metadata: Metadata = {
  title: "Elizabeth Lin: Product Design Leader & Educator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.icon" />
        <title>Elizabeth Lin: Product Design Leader &amp; Educator</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="" />
        <meta
          name="twitter:title"
          content="Elizabeth Lin: Product Design Leader & Educator"
        />
        <meta
          name="twitter:description"
          content="Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy"
        />{" "}
        <meta
          name="twitter:image"
          content="https://elizabeth-portfolio-tau.vercel.app/og-image.png"
        />
        <meta name="twitter:site" content="@lalizlabeth"></meta>
        <meta
          name="description"
          content="Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Elizabeth Lin: Product Design Leader & Educator"
        />
        <meta
          property="og:image"
          content="https://elizabeth-portfolio-tau.vercel.app/og-image@2x.png"
        />
        <meta
          property="og:description"
          content="Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy"
        />
        <meta
          name="keywords"
          content="elizabeth lin, lalizlabeth, product design, product design manager, educator, leader, khan academy, lambda school, primer, mentorship"
        />
      </Head>
      <body className={`${alegreya.variable} ${ibm_plex_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
