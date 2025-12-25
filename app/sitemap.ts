export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import webflowPages from '@/data/webflow/pages.json';
import wordpressPages from '@/data/wordpress/pages.json';
import shopifyPages from '@/data/shopify/pages.json';

const BASE_URL = 'https://agency.com'; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/webflow',
        '/wordpress',
        '/shopify',
        '/contact',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const webflowSitemap = webflowPages.map((p) => ({
        url: `${BASE_URL}/webflow/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const wordpressSitemap = wordpressPages.map((p) => ({
        url: `${BASE_URL}/wordpress/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const shopifySitemap = shopifyPages.map((p) => ({
        url: `${BASE_URL}/shopify/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));


    const customSitemap = (require('@/data/custom/pages.json') as any[]).map((p) => ({
        url: `${BASE_URL}/custom/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticRoutes,
        { url: `${BASE_URL}/custom`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        ...webflowSitemap,
        ...wordpressSitemap,
        ...shopifySitemap,
        ...customSitemap,
    ];
}
