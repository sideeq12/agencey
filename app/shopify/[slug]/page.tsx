import pages from "@/data/shopify/pages.json";
import { ShopifyTemplate } from "@/templates/ShopifyTemplate";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return pages.map((p) => ({
        slug: p.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: page.title,
        description: page.description,
        alternates: {
            canonical: `/shopify/${page.slug}`
        },
        openGraph: {
            title: page.title,
            description: page.description,
            url: `https://agencey.pro/shopify/${page.slug}`,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: page.title,
            description: page.description,
        },
    };
}

export default async function ShopifyPSeoPage({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        notFound();
    }

    return <ShopifyTemplate data={page} />;
}
