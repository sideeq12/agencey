"use client";

import { motion } from "framer-motion";
import pages from "@/data/webflow/pages.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiLayout, FiCheckCircle } from "react-icons/fi";
import { LeadForm } from "@/components/forms/LeadForm";
import { ComponentType } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function WebflowHub() {
    return (
        <div className="min-h-screen bg-black text-white px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
                <HeroBackground backgroundImage="/team2.jpg" />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-10 text-blue-500">
                            <FiLayout className="text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12">
                            Modern Webflow Websites<br />Designed for Performance<br />and Growth.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            We design and build Webflow websites that load fast, look professional, and convert visitors into leads — without plugin bloat or maintenance headaches.
                        </p>
                        <Link href="#strategy">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">Build My Website</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Platform Sub-services / Pages */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 text-center mb-16">Specialized Webflow Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pages.slice(0, 9).map((page, i) => (
                            <Link
                                key={page.slug}
                                href={`/webflow/${page.slug}`}
                                className="group p-10 rounded-[40px] border border-zinc-900 hover:border-blue-500/50 transition-all bg-black flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-2xl font-black italic tracking-tighter mb-4 uppercase group-hover:text-white transition-colors leading-none">{page.title}</h2>
                                    <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-medium">{page.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">{page.intent}</span>
                                    <span className="text-blue-500 group-hover:translate-x-2 transition-transform">→</span>
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
                                        Your Website Should<br />Work Harder.
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
                                <LeadForm service="webflow" source="webflow_hub" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
