"use client";

import React from 'react';
import { motion } from "framer-motion";
import { ServiceImpactChart } from '@/components/dashboard/ServiceImpactChart';
import { ProjectTimelineChart } from '@/components/dashboard/ProjectTimelineChart';
import { SeoHead } from '@/components/seo/SeoHead';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Accordion } from '@/components/ui/Accordion';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Section } from '@/components/ui/Section';

interface WebflowTemplateProps {
    data: {
        title: string;
        description: string;
        cta: string;
        primary_keyword: string;
        slug: string;
    };
}

export const WebflowTemplate: React.FC<WebflowTemplateProps> = ({ data }) => {
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
        "serviceType": "Webflow Development"
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white">
            <SeoHead title={data.title} description={data.description} />
            <JsonLd data={schema} />

            {/* Hero Section */}

            {/* Hero Section */}
            <header className="relative pt-48 pb-24 px-6 overflow-hidden">
                <HeroBackground backgroundImage="/team2.jpg" />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 mb-8 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            Premium Webflow Development
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[0.9] italic">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-tight font-medium">
                            {data.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="px-12">{data.cta}</Button>
                            <Button variant="outline" size="lg">View Our Work</Button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Feature Grid (Standardization) */}
            <Section className="py-24 px-6 border-y border-zinc-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { t: "Pixel Perfect", d: "We translate high-fidelity designs into fluid, responsive Webflow sites without compromise." },
                        { t: "SEO Engineered", d: "Technical SEO is baked into every build, ensuring your site is crawl-ready from day one." },
                        { t: "Lightning Speed", d: "Optimized assets and clean DOM structure for sub-second page loads." },
                        { t: "Custom CMS", d: "Empower your marketing team with a bespoke editorial experience tailored to your workflow." },
                        { t: "Advanced Motion", d: "World-class Webflow interactions that breathe life into your brand experience." },
                        { t: "Lottie Integration", d: "Seamless SVG animations for interactive storytelling and data visualization." }
                    ].map((f, i) => (
                        <div key={i} className="space-y-4 p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-blue-500/30 transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20" />
                            <h3 className="text-lg font-bold">{f.t}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">{f.d}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Process Section */}
            <Section className="py-24 px-6 bg-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-black italic tracking-tighter mb-20 text-center uppercase">Our Build Protocol</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {[
                            { step: "01", title: "Strategy & IA", desc: "Mapping the user journey and information architecture for maximum conversion." },
                            { step: "02", title: "Visual Design", desc: "Crafting a premium aesthetic that aligns with your brand's unique identity." },
                            { step: "03", title: "Build & Interaction", desc: "Expert development in Webflow with custom code injections where necessary." },
                            { step: "04", title: "Optimization", desc: "Rigorous testing for performance, accessibility, and SEO integrity." }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-8">
                                <span className="text-4xl font-black text-zinc-800 italic">{s.step}</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Performance Dashboard */}
            <Section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tighter mb-4 italic">Performance & Velocity</h2>
                        <p className="text-zinc-400">Why leading brands switch to our Webflow stack.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ServiceImpactChart />
                        <ProjectTimelineChart />
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-black border border-zinc-900 rounded-[60px] p-12 md:p-24 text-center">
                        <p className="text-2xl md:text-4xl font-black italic leading-tight mb-12">
                            "The transition to Webflow was seamless. We've seen a 40% increase in organic traffic within 3 months of launch."
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800" />
                            <div className="text-left">
                                <p className="font-bold">Sarah Jenkins</p>
                                <p className="text-xs text-zinc-500 tracking-widest uppercase">Head of Growth, NexaFlow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-zinc-400 text-center mb-12">Everything you need to know about our Webflow services</p>
                    <Accordion items={[
                        {
                            question: "Is Webflow the right choice for my business?",
                            answer: "Webflow is ideal if you need a fast, visually polished website with clean code and strong SEO foundations. It works best for marketing sites, SaaS, startups, and service businesses that don't want to manage plugins or frequent updates. If you require heavy backend logic or advanced e-commerce workflows, we'll assess whether Webflow or another platform fits better."
                        },
                        {
                            question: "What does your Webflow website building process look like?",
                            answer: "We start with strategy and structure — understanding your goals, audience, and content flow. Then we design and build directly in Webflow, focusing on performance, responsiveness, and SEO. Before launch, we test across devices, optimize loading speed, and ensure you can manage content independently."
                        },
                        {
                            question: "How long does it take to build a Webflow website?",
                            answer: "Most Webflow projects take 2–4 weeks, depending on complexity and content readiness. Landing pages can be completed faster, while multi-page or custom-designed sites may take slightly longer. We provide a clear timeline before starting."
                        },
                        {
                            question: "How much does a Webflow website cost?",
                            answer: "Pricing depends on scope, number of pages, and custom functionality. Simple Webflow sites start lower, while custom-designed, conversion-optimized builds cost more. We don't do one-size-fits-all pricing — every quote is based on real requirements."
                        },
                        {
                            question: "Will my Webflow site be SEO-friendly?",
                            answer: "Yes. Webflow produces clean HTML, fast load times, and gives full control over meta tags, schema, and site structure. We build with SEO in mind from day one — not as an afterthought."
                        },
                        {
                            question: "Can I update the website myself after launch?",
                            answer: "Absolutely. Webflow's Editor allows you to update text, images, and CMS content without touching design or code. We also provide guidance so you're not dependent on us for basic changes."
                        },
                        {
                            question: "Do you offer redesigns or only new Webflow builds?",
                            answer: "We handle both. If your existing Webflow site looks outdated, loads slowly, or doesn't convert, we can redesign and restructure it without starting from scratch — keeping what works and fixing what doesn't."
                        },
                        {
                            question: "How does Webflow compare to WordPress or Shopify?",
                            answer: "Webflow is best for marketing-focused websites with high design control and minimal maintenance. WordPress offers more plugin-driven flexibility, while Shopify is built specifically for e-commerce. We recommend platforms based on your goals, not trends."
                        }
                    ]} />
                </div>
            </Section>

            {/* Lead Section */}
            <Section className="py-32 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl font-black tracking-tight mb-8">Let's scale your project.</h2>
                        <ul className="space-y-6">
                            {[
                                "Direct access to lead developers",
                                "Weekly architecture reviews",
                                "SEO & Performance audits included",
                                "Maintenance & support plans"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-zinc-400 text-sm">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-10 rounded-[40px] bg-zinc-950 border border-zinc-900">
                        <LeadForm service="webflow" source={data.slug} />
                    </div>
                </div>
            </Section>

            {/* Footer */}
            <footer className="py-12 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-2xl font-black italic tracking-tighter">AGENCEY.</div>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                        <a href="/webflow" className="text-white">Webflow Hub</a>
                        <a href="/wordpress" className="hover:text-white transition-colors">WordPress</a>
                        <a href="/shopify" className="hover:text-white transition-colors">Shopify</a>
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
