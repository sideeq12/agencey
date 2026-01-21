import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Agencey : Marketing and Business Website Development Company",
    template: "%s | Agencey"
  },
  description: "We design, build, and optimize high-converting websites and digital marketing systems that turn traffic into qualified leads. Expert Webflow, WordPress, Shopify, and custom development.",
  keywords: ["web design agency", "website development", "digital marketing", "SEO services", "webflow development", "wordpress development", "shopify development", "custom web development", "marketing agency"],
  authors: [{ name: "Agencey" }],
  creator: "Agencey",
  publisher: "Agencey",
  metadataBase: new URL("https://agencey.pro"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agencey.pro",
    siteName: "Agencey",
    title: "Agencey : Marketing and Business Website Development Company",
    description: "We design, build, and optimize high-converting websites and digital marketing systems that turn traffic into qualified leads.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agencey - Marketing and Business Website Development Company"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencey : Marketing and Business Website Development Company",
    description: "We design, build, and optimize high-converting websites and digital marketing systems.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Navbar } from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <meta name="google-site-verification" content="iRV9eKvURqQCv5r60PCkOKWXjw6ESLVAeJijlEF2aOM" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
