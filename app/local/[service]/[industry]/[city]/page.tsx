import React from 'react';
import { industries, locations, services } from '@/data/pseo';
import { PseoTemplate } from '@/components/pseo/PseoTemplate';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const dynamicParams = true; // Enabled for on-demand generation (ISR)

interface PageProps {
    params: Promise<{
        service: string;
        industry: string;
        city: string;
    }>;
}

export async function generateStaticParams() {
    const params = [];

    // To avoid generating thousands of pages at build time which might timeout,
    // we can generate a subset or all of them. 
    // 10 industries * 15 cities * 3 services = 450 pages. This is reasonable for Next.js.

    for (const service of services) {
        for (const industry of industries) {
            for (const city of locations) {
                params.push({
                    service: service.slug,
                    industry: industry.slug,
                    city: city.slug,
                });
            }
        }
    }

    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;

    const service = services.find(s => s.slug === resolvedParams.service);
    const industry = industries.find(i => i.slug === resolvedParams.industry);
    const city = locations.find(l => l.slug === resolvedParams.city);

    if (!service || !industry || !city) {
        return { title: 'Page Not Found' };
    }

    const title = `${service.name} for ${industry.name} in ${city.name} | Agencey`;
    const description = `Top-rated ${service.name} services for ${industry.name} in ${city.name}. We help local ${industry.singular.toLowerCase()} businesses get more leads and consistent revenue.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
        }
    };
}

export default async function Page({ params }: PageProps) {
    const resolvedParams = await params;

    const service = services.find(s => s.slug === resolvedParams.service);
    const industry = industries.find(i => i.slug === resolvedParams.industry);
    const city = locations.find(l => l.slug === resolvedParams.city);

    if (!service || !industry || !city) {
        notFound();
    }

    return <PseoTemplate service={service} industry={industry} city={city} />;
}
