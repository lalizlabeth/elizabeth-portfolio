import type { Metadata } from "next";
import { Proza_Libre, IBM_Plex_Mono, Alegreya } from "next/font/google";
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
        <link rel="icon" href="/favicon.png" />
        <title>Elizabeth Lin: Product Design Leader &amp; Educator</title>
      </Head>
      <body className={`${alegreya.variable} ${ibm_plex_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
