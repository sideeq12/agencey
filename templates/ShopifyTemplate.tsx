import React from 'react';
import { SeoHead } from '@/components/seo/SeoHead';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Accordion } from '@/components/ui/Accordion';
import { HeroBackground } from '@/components/ui/HeroBackground';

interface ShopifyTemplateProps {
    data: {
        title: string;
        description: string;
        cta: string;
        primary_keyword: string;
        slug: string;
    };
}

export const ShopifyTemplate: React.FC<ShopifyTemplateProps> = ({ data }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
            "@type": "Organization",
            "name": "Agencey",
            "url": "https://agencey.com"
        },
        "serviceType": "Shopify Development"
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
            <SeoHead title={data.title} description={data.description} />
            <JsonLd data={schema} />

            {/* Content starts below global Navbar */}

            <header className="relative pt-48 pb-24 px-6 overflow-hidden">
                <HeroBackground backgroundImage="/team4.jpg" />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block px-3 py-1 mb-8 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                        Performance Shopify Solution
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[0.9] italic uppercase">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-tight font-medium">
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Button size="lg" className="bg-green-500 text-black px-16 hover:bg-green-400 border-none">
                            {data.cta}
                        </Button>
                        <a href="#roi" className="text-xs font-bold uppercase tracking-[0.3em] border-b border-zinc-800 pb-2 hover:text-green-500 transition-colors">
                            See Real Results
                        </a>
                    </div>
                </div>
            </header>

            {/* Feature Grid */}
            <section className="py-24 px-6 border-y border-zinc-900 bg-zinc-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { h: "Headless Commerce", p: "Vercel + Hydrogen implementations for instant load times." },
                        { h: "Private Apps", p: "Bespoke internal apps to automate your complex logistical logic." },
                        { h: "Checkout Extensibility", p: "Advanced customization of the Shopify checkout for maximum LTV." },
                        { h: "Global Scale", p: "Multi-currency, multi-language, and local warehouse automation." }
                    ].map((f, i) => (
                        <div key={i} className="space-y-4">
                            <div className="w-12 h-12 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-500 font-bold italic">
                                0{i + 1}
                            </div>
                            <h3 className="text-xl font-bold">{f.h}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">{f.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Methodology */}
            <section className="py-32 px-6 bg-black" id="roi">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-black italic mb-20 text-center tracking-tighter">THE CONVERSION ENGINE.</h2>
                    <div className="grid grid-cols-1 gap-12">
                        {[
                            { t: "Architecture First", d: "We rebuild your product-data-layer for speed before even touching the design." },
                            { t: "Intent UI Design", d: "Creating layouts that guide users toward the checkout with zero friction points." },
                            { t: "Performance Ops", d: "Rigorous Liquid optimization to reduce server response times by 60%." },
                            { t: "Scale Testing", d: "Simulating peak traffic scenarios to ensure stability during major sales." }
                        ].map((m, i) => (
                            <div key={i} className="group p-10 rounded-[40px] border border-zinc-900 hover:bg-zinc-950 transition-all flex flex-col md:flex-row gap-8 items-center">
                                <div className="text-4xl font-black text-zinc-900 group-hover:text-green-500 transition-colors">STEP {i + 1}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{m.t}</h3>
                                    <p className="text-zinc-400 text-sm">{m.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Proof */}
            <section className="py-32 px-6 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-green-500">Case Study: Fashion Brand X</p>
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">2.4x Increase in ROI.</h2>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            "Moving from a legacy Shopify theme to a modular, performance-engineered site was the best decision for our Q4 growth."
                        </p>
                        <ImagePlaceholder text="Dashboard Metrics Performance" aspect="video" className="shadow-2xl shadow-green-500/10" />
                    </div>
                    <div className="bg-zinc-950 p-12 md:p-16 rounded-[60px] border border-zinc-900">
                        <h3 className="text-3xl font-bold mb-8 text-center uppercase tracking-widest italic">Scale Today.</h3>
                        <LeadForm service="shopify" source={data.slug} />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-zinc-400 text-center mb-12">Everything you need to know about our Shopify commerce services</p>
                    <Accordion items={[
                        {
                            question: "Is Shopify the right choice for my business?",
                            answer: "Shopify is the gold standard for e-commerce. It's ideal if you need a reliable, scalable platform with built-in payment processing, inventory management, and a vast app ecosystem. It works best for brands focused on selling physical or digital products globally without worrying about server maintenance."
                        },
                        {
                            question: "What does your Shopify store building process look like?",
                            answer: "We focus on conversion architecture first. We map out your product discovery paths, design high-intent landing pages, and optimize the checkout flow. We integrate necessary apps for shipping, taxes, and marketing, then conduct rigorous performance testing before launch."
                        },
                        {
                            question: "How long does it take to build a Shopify store?",
                            answer: "A standard high-performance Shopify build typically takes 3–6 weeks. Complex migrations or custom headless implementations using Hydrogen/Oxygen may take 8–12 weeks. We move fast but never compromise on the data-layer integrity."
                        },
                        {
                            question: "How much does a Shopify store cost?",
                            answer: "Pricing is based on the complexity of your product catalog, third-party integrations, and design requirements. We offer everything from optimized theme setups to fully bespoke headless commerce platforms. Every quote is custom-tailored to your expected ROI."
                        },
                        {
                            question: "Will my Shopify site be SEO-friendly?",
                            answer: "Absolutely. We go beyond basic settings, optimizing your Liquid code for speed, implementing advanced schema for products and reviews, and ensuring a technical structure that search engines love. Performance is our primary SEO lever."
                        },
                        {
                            question: "Can I update the website myself after launch?",
                            answer: "Yes. Shopify's Online Store 2.0 makes it incredibly easy for your team to manage sections, blocks, and content without a developer. We provide full training to ensure you're empowered to run your business."
                        },
                        {
                            question: "Do you offer migrations from other platforms?",
                            answer: "We specialize in migrating brands from WooCommerce, Magento, or BigCommerce to Shopify. We handle the data migration, preserve your SEO rankings, and ensure zero downtime during the transition."
                        },
                        {
                            question: "How does Shopify compare to Webflow or WordPress?",
                            answer: "Shopify is built specifically for commerce with robust native checkout and security. Webflow is superior for pure marketing design, and WordPress is best for heavy content publishing. We recommend Shopify if your primary goal is scaling sales."
                        }
                    ]} />
                </div>
            </section>
            {/* Footer */}
            <footer className="py-20 px-6 border-t border-zinc-900 text-center">
                <div className="text-2xl font-black italic tracking-tighter mb-12">AGENCEY.</div>
                <div className="flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                    <a href="/shopify" className="text-white hover:text-green-500">Shopify Hub</a>
                    <a href="/webflow" className="hover:text-white transition-colors">Webflow</a>
                    <a href="/wordpress" className="hover:text-white transition-colors">WordPress</a>
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                </div>
            </footer>
        </div>
    );
};
