import { Metadata } from "next";
import { WebflowHubClient } from "./WebflowHubClient";

export const metadata: Metadata = {
    title: "Expert Webflow Development Services",
    description: "We design and build Webflow websites that load fast, look professional, and convert visitors into leads — without plugin bloat or maintenance headaches.",
    alternates: {
        canonical: "/webflow"
    },
    openGraph: {
        title: "Expert Webflow Development Services | Agencey",
        description: "We design and build Webflow websites that load fast, look professional, and convert visitors into leads.",
        url: "https://agencey.pro/webflow",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Expert Webflow Development Services | Agencey",
        description: "We design and build Webflow websites that load fast, look professional, and convert visitors into leads.",
    },
};

export default function WebflowHub() {
    return <WebflowHubClient />;
}
