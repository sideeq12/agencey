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

export default async function ShopifyPSeoPage({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        notFound();
    }

    return <ShopifyTemplate data={page} />;
}
