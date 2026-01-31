export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import webflowPages from '@/data/webflow/pages.json';
import wordpressPages from '@/data/wordpress/pages.json';
import shopifyPages from '@/data/shopify/pages.json';
import customPages from '@/data/custom/pages.json';

import { industries, locations, services } from '@/data/pseo';

const BASE_URL = 'https://agencey.pro'; // Replace with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/webflow',
        '/wordpress',
        '/shopify',
        '/custom',
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

    const customSitemap = customPages.map((p) => ({
        url: `${BASE_URL}/custom/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const pseoSitemap: MetadataRoute.Sitemap = [];
    services.forEach(service => {
        industries.forEach(industry => {
            locations.forEach(location => {
                pseoSitemap.push({
                    url: `${BASE_URL}/local/${service.slug}/${industry.slug}/${location.slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.7,
                });
            });
        });
    });

    return [
        ...staticRoutes,
        ...webflowSitemap,
        ...wordpressSitemap,
        ...shopifySitemap,
        ...customSitemap,
        ...pseoSitemap,
    ];
}
