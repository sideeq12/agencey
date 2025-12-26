"use client";

import { motion } from "framer-motion";
import pages from "@/data/wordpress/pages.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiCode, FiCheckCircle } from "react-icons/fi";
import { LeadForm } from "@/components/forms/LeadForm";
import { ComponentType } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function WordPressHub() {
    return (
        <div className="min-h-screen bg-black text-white px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
                <HeroBackground backgroundImage="/team3.jpg" />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-purple-500/10 border border-purple-500/20 mb-10 text-purple-500">
                            <FiCode className="text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12">
                            Flexible WordPress Websites<br />Built for Long-Term Growth.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            We create secure, scalable WordPress websites tailored to your business — optimized for SEO, performance, and easy content management.
                        </p>
                        <Link href="#strategy">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">Redesign My Website</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Platform Sub-services / Pages */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 text-center mb-16">Enterprise WordPress Calibration</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pages.slice(0, 9).map((page, i) => (
                            <Link
                                key={page.slug}
                                href={`/wordpress/${page.slug}`}
                                className="group p-10 rounded-[40px] border border-zinc-800 hover:border-purple-500/50 transition-all bg-black flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-2xl font-black italic tracking-tighter mb-4 uppercase group-hover:text-white transition-colors leading-none">{page.title}</h2>
                                    <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-medium">{page.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Scalable Architecture</span>
                                    <span className="text-purple-500 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-zinc-400 text-center mb-12">Everything you need to know about our WordPress services</p>
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
            </section>

            {/* Strategy Section */}
            <section id="strategy" className="py-40 border-t border-zinc-900 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 rounded-[60px] shadow-2xl text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6 uppercase leading-[0.9]">
                                        Fix My Website<br />Performance.
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed font-medium">
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
                                            <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                                                <div className="w-1 h-1 rounded-full bg-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm uppercase tracking-wider">{item.title}</h4>
                                                <p className="text-xs text-zinc-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-800">
                                <LeadForm service="wordpress" source="wordpress_hub" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
