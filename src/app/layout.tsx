import type { Metadata } from "next";
import { IBM_Plex_Mono, Alegreya, Bricolage_Grotesque, Space_Mono, Pinyon_Script, Cherry_Bomb_One } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const alegreya = Alegreya({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fancy",
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-monospace",
});

const bricolage_grotesque = Bricolage_Grotesque({
  weight: ["400", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const space_mono = Space_Mono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const pinyon_script = Pinyon_Script({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-pinyon-script",
});

const cherry_bomb_one = Cherry_Bomb_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-cherry-bomb",
});

export const metadata: Metadata = {
  title: "Elizabeth Lin: Independent Product Designer & Educator",
  description:
    "Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy",
  keywords: [
    "elizabeth lin",
    "lalizlabeth",
    "product designer",
    "product design manager",
    "educator",
    "khan academy",
    "lambda school",
    "primer",
    "mentorship",
  ],
  openGraph: {
    title: "Elizabeth Lin: Independent Product Designer & Educator",
    description:
      "Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy",
    url: "https://lalizlabeth.com",
    siteName: "Elizabeth Lin: Product Designer & Educator",
    images: [
      {
        url: "https://lalizlabeth.com/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elizabeth Lin: Independent Product Designer & Educator",
    description:
      "Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy",
    images: [
      {
        url: "https://lalizlabeth.com/og-image.png", // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
  },
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
        <title>Elizabeth Lin: Product Design Manager &amp; Educator</title>
        <meta
          name="keywords"
          content="elizabeth lin, lalizlabeth, product design, product design manager, educator, leader, khan academy, lambda school, primer, mentorship"
        />
      </Head>
      <Analytics />
      <body className={`${alegreya.variable} ${ibm_plex_mono.variable} ${bricolage_grotesque.variable} ${space_mono.variable} ${pinyon_script.variable} ${cherry_bomb_one.variable}`}>
        {children}
      </body>
    </html>
  );
}
