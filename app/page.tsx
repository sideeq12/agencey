import { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Websites & Marketing Systems That Bring You Qualified Leads",
  description: "We design, build, and optimize websites and digital systems that turn traffic into real business opportunities — not just clicks. Expert Webflow, WordPress, Shopify, and custom development.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Websites & Marketing Systems That Bring You Qualified Leads | Agencey",
    description: "We design, build, and optimize websites and digital systems that turn traffic into real business opportunities.",
    url: "https://agencey.pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites & Marketing Systems That Bring You Qualified Leads | Agencey",
    description: "We design, build, and optimize websites and digital systems that turn traffic into real business opportunities.",
  },
};

export default function Home() {
  return <HomePageClient />;
}
