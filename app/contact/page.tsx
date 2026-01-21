import { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us - Free Strategy Session",
    description: "Book a free 30-minute strategy session. Get expert guidance on growing your online presence and turning traffic into revenue.",
    alternates: {
        canonical: "/contact"
    },
    openGraph: {
        title: "Contact Us - Free Strategy Session | Agencey",
        description: "Book a free 30-minute strategy session. Get expert guidance on growing your online presence.",
        url: "https://agencey.pro/contact",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - Free Strategy Session | Agencey",
        description: "Book a free 30-minute strategy session. Get expert guidance on growing your online presence.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
