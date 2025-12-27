"use client";

import React from 'react';
import { motion } from "framer-motion";
import { PerformanceComparisonChart } from '@/components/dashboard/PerformanceComparisonChart';
import { SeoProgressChart } from '@/components/dashboard/SeoProgressChart';
import { SeoHead } from '@/components/seo/SeoHead';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Accordion } from '@/components/ui/Accordion';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Section } from '@/components/ui/Section';

interface WordPressTemplateProps {
    data: {
        title: string;
        description: string;
        cta: string;
        primary_keyword: string;
        slug: string;
    };
}

export const WordPressTemplate: React.FC<WordPressTemplateProps> = ({ data }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
            "@type": "Organization",
            "name": "Agencey",
            "url": "https://agencey.pro"
        },
        "serviceType": "WordPress Development"
    };

    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <SeoHead title={data.title} description={data.description} />
            <JsonLd data={schema} />

            <header className="pt-20 pb-12 px-6 relative overflow-hidden">
                <HeroBackground backgroundImage="/team3.jpg" />
                <div className="max-w-5xl mx-auto bg-white rounded-[40px] p-12 md:p-20 shadow-xl border border-zinc-200 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-8 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                                    WordPress Ecosystem Experts
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1] text-zinc-900 mb-6">
                                    {data.title}
                                </h1>
                                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-xl mb-8">
                                    {data.description}
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white">
                                        {data.cta}
                                    </Button>
                                    <Button variant="outline" size="lg">Check Our Process</Button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="w-full md:w-80 p-8 bg-zinc-100 rounded-3xl border border-zinc-200">
                            <h3 className="font-bold text-center mb-6">Free Resource</h3>
                            <ImagePlaceholder text="WP Speed E-book" aspect="square" className="mb-6" />
                            <Button variant="secondary" className="w-full">See How It Works</Button>
                        </div>
                    </div>
                </div>
            </header>

            <Section className="py-20 px-6 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8 space-y-12">
                    <div className="prose prose-zinc max-w-none">
                        <h2 className="text-3xl font-bold mb-6">Unlocking WordPress Potential</h2>
                        <p className="text-lg text-zinc-600">
                            We specialize in {data.primary_keyword} using modern development practices. No bloated themes, no unnecessary plugins. Just high-performance, scalable WordPress solutions.
                        </p>
                    </div>

                    <ImagePlaceholder text="Custom WordPress Dashboard" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-md">
                            <h4 className="font-bold mb-2">Vulnerability Protection</h4>
                            <p className="text-sm text-zinc-500">Enterprise-grade security patches and proactive monitoring.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-md">
                            <h4 className="font-bold mb-2">Asset Optimization</h4>
                            <p className="text-sm text-zinc-500">Customized caching and CDN integration for {"< 1s"} load times.</p>
                        </div>
                    </div>
                </div>

                <aside className="lg:col-span-4">
                    <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-xl">
                        <h3 className="text-xl font-bold mb-6">Start Your Project</h3>
                        <LeadForm service="wordpress" source={data.slug} />
                    </div>
                </aside>
            </Section>

            {/* Performance Metrics */}
            <Section className="py-24 px-6 border-y border-zinc-200 bg-zinc-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Optimized for Growth</h2>
                        <p className="text-zinc-600">See the impact of a properly architected WordPress build.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PerformanceComparisonChart />
                        <SeoProgressChart />
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-zinc-600 text-center mb-12">Everything you need to know about our WordPress services</p>
                    <Accordion items={[
                        {
                            question: "Is WordPress the right choice for my business?",
                            answer: "WordPress is ideal if you need a flexible, content-rich website with extensive plugin support and customization options. It works best for blogs, news sites, corporate websites, and businesses that need regular content updates. If you require a simpler, maintenance-free solution, we'll assess whether WordPress or another platform fits better."
                        },
                        {
                            question: "What does your WordPress website building process look like?",
                            answer: "We start with understanding your content strategy, audience, and business goals. Then we select the right theme and plugins, customize the design, and build a scalable architecture. Before launch, we optimize for speed, security, and SEO, and ensure your team can manage content easily."
                        },
                        {
                            question: "How long does it take to build a WordPress website?",
                            answer: "Most WordPress projects take 3–5 weeks, depending on customization level and content volume. Simple blog setups can be completed faster, while complex custom-designed sites with advanced functionality may take longer. We provide a clear timeline before starting."
                        },
                        {
                            question: "How much does a WordPress website cost?",
                            answer: "Pricing depends on design complexity, number of pages, custom features, and plugin requirements. Basic WordPress sites start lower, while fully custom-designed, enterprise-level builds cost more. We provide transparent pricing based on your specific needs."
                        },
                        {
                            question: "Will my WordPress site be SEO-friendly?",
                            answer: "Yes. We build WordPress sites with clean code, fast loading times, and proper SEO plugins configured from day one. We optimize meta tags, schema markup, and site structure to ensure strong search engine visibility."
                        },
                        {
                            question: "Can I update the website myself after launch?",
                            answer: "Absolutely. WordPress has an intuitive editor that allows you to update text, images, and posts without technical knowledge. We provide training and documentation so you can manage your content independently."
                        },
                        {
                            question: "Do you offer redesigns or only new WordPress builds?",
                            answer: "We handle both. If your existing WordPress site is outdated, slow, or difficult to manage, we can redesign and optimize it while preserving your content and SEO rankings — keeping what works and improving what doesn't."
                        },
                        {
                            question: "How does WordPress compare to Webflow or Shopify?",
                            answer: "WordPress offers the most plugin flexibility and is best for content-heavy sites with frequent updates. Webflow provides more design control with less maintenance, while Shopify is purpose-built for e-commerce. We recommend platforms based on your specific goals."
                        }
                    ]} />
                </div>
            </Section>

            {/* Conversion Section */}
            <footer className="py-12 border-t border-zinc-200 bg-white">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-zinc-500 text-sm">© 2025 AGENCEY WordPress Department</p>
                    <div className="flex gap-6">
                        <a href="/wordpress" className="text-sm font-bold text-blue-600">WordPress Hub</a>
                        <a href="/webflow" className="text-sm text-zinc-500 hover:text-black">Webflow Services</a>
                        <a href="/" className="text-sm text-zinc-500 hover:text-black">Home</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
