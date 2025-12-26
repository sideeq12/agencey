"use client";

import { motion } from "framer-motion";
import pages from "@/data/custom/pages.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiZap, FiCheckCircle } from "react-icons/fi";
import { LeadForm } from "@/components/forms/LeadForm";
import { ComponentType } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function CustomHub() {
    return (
        <div className="min-h-screen bg-black text-white px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
                <HeroBackground backgroundImage="/team5.jpg" />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-orange-500/10 border border-orange-500/20 mb-10 text-orange-500">
                            <FiZap className="text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12">
                            Custom Websites Built<br />Around Your Business Goals.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            When templates aren’t enough, we design and develop custom websites that match your exact requirements — from user experience to backend logic.
                        </p>
                        <Link href="#strategy">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">Turn My Idea Into Reality</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Platform Sub-services / Pages */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 text-center mb-16">Bespoke Full-Stack Engineering</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pages.slice(0, 9).map((page, i) => (
                            <Link
                                key={page.slug}
                                href={`/custom/${page.slug}`}
                                className="group p-10 rounded-[40px] border border-zinc-800 hover:border-orange-500/50 transition-all bg-black flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-2xl font-black italic tracking-tighter mb-4 uppercase group-hover:text-white transition-colors leading-none">{page.title}</h2>
                                    <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-medium">{page.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">{page.intent}</span>
                                    <span className="text-orange-500 group-hover:translate-x-2 transition-transform">→</span>
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
                    <p className="text-zinc-400 text-center mb-12">Everything you need to know about our custom engineering services</p>
                    <Accordion items={[
                        {
                            question: "Is a custom website the right choice for my business?",
                            answer: "Custom development is the choice for businesses that have outgrown standard platforms or need unique functionality that plugins can't provide. It's ideal for enterprise SaaS, complex marketplaces, or brands that require absolute control over performance, security, and the user experience."
                        },
                        {
                            question: "What does your custom development process look like?",
                            answer: "We follow a modular engineering approach: Technical Discovery, System Architecture, UI/UX Prototyping, and Agile Development Sprints. We use modern stacks like Next.js, TypeScript, and Tailwind CSS to build robust, maintainable platforms."
                        },
                        {
                            question: "How long does it take to build a custom website?",
                            answer: "Custom builds usually range from 8 to 16 weeks depending on the complexity of the backend logic and integration requirements. We provide a detailed technical roadmap and release internal milestones every two weeks."
                        },
                        {
                            question: "How much does a custom website cost?",
                            answer: "Custom engineering is an investment in your business infrastructure. Pricing depends on the complexity of features, integrations, and performance requirements. We provide transparent, value-based pricing that reflects the long-term scalability of your platform."
                        },
                        {
                            question: "Will my custom site be SEO-friendly?",
                            answer: "Yes. By building from scratch, we have total control over the DOM structure, server-side rendering (SSR), and edge-caching. Custom sites often outperform platform-based sites in Core Web Vitals and organic rankings due to zero code bloat."
                        },
                        {
                            question: "Can I update the website myself after launch?",
                            answer: "Absolutely. We typically integrate a Headless CMS (like Sanity, Contentful, or Strapi) that allows your team to manage content effortlessly while keeping the frontend performant and secure. You get platform ease-of-use with custom power."
                        },
                        {
                            question: "Do you offer maintenance and support after launch?",
                            answer: "Yes. We provide ongoing support agreements that cover security patches, performance monitoring, and iterative feature development. We don't just launch and leave; we partner with you for the long term."
                        },
                        {
                            question: "How does custom development compare to Webflow, WordPress, or Shopify?",
                            answer: "Custom dev offers 'infinite' flexibility compared to platform constraints. While it requires a higher initial investment, it removes the ceiling on what's possible and significantly reduces long-term technical debt for large-scale operations."
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
                                        Let&apos;s Architect Your<br />Product.
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
                                <LeadForm service="custom" source="custom_hub" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
