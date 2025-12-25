import pages from "@/data/webflow/pages.json";
import { WebflowTemplate } from "@/templates/WebflowTemplate";
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

export default async function WebflowPSeoPage({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        notFound();
    }

    return <WebflowTemplate data={page} />;
}
