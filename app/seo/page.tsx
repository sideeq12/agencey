"use client";

import { motion } from "framer-motion";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function SEOPage() {
    return (
        <div className="min-h-screen bg-white text-zinc-900 px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <HeroBackground backgroundImage="/team3.jpg" />
                <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-10">
                            <FiTrendingUp className="text-4xl text-blue-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12">
                            SEO Strategies That Drive<br />Consistent, High-Intent Traffic.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-600 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            We help your business rank for keywords that matter — bringing in users who are actively searching for your services.
                        </p>
                        <Link href="#strategy">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">Get an SEO Audit</span>
                            </Button>
                        </Link>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left max-w-5xl mx-auto">
                            {[
                                "Programmatic SEO",
                                "Content Clusters",
                                "Authority Hubs",
                                "Technical Audits",
                                "Backlink Strategy",
                                "Conversion Focus"
                            ].map((item) => (
                                <div key={item} className="flex flex-col gap-3 p-6 bg-zinc-100/50 border border-zinc-200 rounded-2xl hover:border-blue-500/50 transition-all group">
                                    <FiCheckCircle className="text-blue-500 text-xl" />
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-zinc-900">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-40 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-16 rounded-[60px] shadow-2xl text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6 uppercase leading-[0.9]">
                                        Increase Organic<br />Traffic.
                                    </h2>
                                    <p className="text-zinc-600 leading-relaxed font-medium">
                                        Book a free 30-minute strategy session. We&apos;ll review your current marketing, identify what&apos;s holding you back, and outline a clear path to more revenue.
                                    </p>
                                </div>

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
                                                <h4 className="font-bold text-zinc-900 text-sm">{item.title}</h4>
                                                <p className="text-xs text-zinc-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-200">
                                <LeadForm service="seo" source="seo_landing" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
