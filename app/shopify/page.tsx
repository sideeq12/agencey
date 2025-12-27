"use client";

import { motion } from "framer-motion";
import pages from "@/data/shopify/pages.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiShoppingCart, FiCheckCircle } from "react-icons/fi";
import { LeadForm } from "@/components/forms/LeadForm";
import { ComponentType } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Section } from "@/components/ui/Section";
import { ServiceImpactChart } from "@/components/dashboard/ServiceImpactChart";
import { MarketingFunnelChart } from "@/components/dashboard/MarketingFunnelChart";

export default function ShopifyHub() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
                <HeroBackground backgroundImage="/team4.jpg" />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-green-500/10 border border-green-500/20 mb-10 text-green-500">
                            <FiShoppingCart className="text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12">
                            High-Converting Shopify Stores<br />Built to Scale Sales.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-600 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            We build fast, clean, conversion-focused Shopify stores that make it easy for customers to buy — and easy for you to manage and grow.
                        </p>
                        <Link href="#strategy">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">Launch My Store</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Platform Sub-services / Pages */}
            <Section className="py-24 border-t border-zinc-200 bg-zinc-50/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-600 text-center mb-16">E-commerce Authority Engineering</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {pages.slice(0, 9).map((page, i) => (
                            <Link
                                key={page.slug}
                                href={`/shopify/${page.slug}`}
                                className="group p-10 rounded-[40px] border border-zinc-200 hover:border-green-500/50 transition-all bg-white flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-2xl font-black italic tracking-tighter mb-4 uppercase group-hover:text-zinc-900 transition-colors leading-none">{page.title}</h2>
                                    <p className="text-zinc-600 text-sm mb-8 leading-relaxed font-medium line-clamp-2">{page.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Conversion Focused</span>
                                    <span className="text-green-500 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>



            {/* Performance Breakdown */}
            <Section className="py-24 border-t border-zinc-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-bold mb-4">E-Commerce Dominance</h2>
                        <p className="text-zinc-600">Shopify stores optimized for maximum conversion.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ServiceImpactChart />
                        <MarketingFunnelChart />
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section className="py-24 border-t border-zinc-200 bg-zinc-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-zinc-600 text-center mb-12">Everything you need to know about our Shopify commerce services</p>
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
            </Section>

            {/* Strategy Section */}
            <Section id="strategy" className="py-40 border-t border-zinc-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-16 rounded-[60px] shadow-2xl text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6 uppercase leading-[0.9]">
                                        Scale My Business<br />Online.
                                    </h2>
                                    <p className="text-zinc-600 leading-relaxed font-medium">
                                        Book a free 30-minute strategy session. We&apos;ll review your current marketing, identify what&apos;s holding you back, and outline a clear path to more revenue.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    {[
                                        { title: "Business Review", desc: "A clear look at what's working and what isn't." },
                                        { title: "Growth Plan", desc: "Specific recommendations tailored to your goals." },
                                        { title: "Implementation", desc: "Expert guidance on how to execute effectively." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                                                <div className="w-1 h-1 rounded-full bg-zinc-900" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">{item.title}</h4>
                                                <p className="text-xs text-zinc-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-200">
                                <LeadForm service="shopify" source="shopify_hub" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
