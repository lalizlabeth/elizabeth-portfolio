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
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-monospace",
});

export const metadata: Metadata = {
  title: "Elizabeth Lin: Product Design Manager & Educator",
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
    title: "Elizabeth Lin: Product Design Manager & Educator",
    description:
      "Building an alternative design school. Previously at Primer, Lambda School, & Khan Academy",
    url: "https://lalizlabeth.com",
    siteName: "Elizabeth Lin: Product Design Manager & Educator",
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
      <body className={`${alegreya.variable} ${ibm_plex_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
