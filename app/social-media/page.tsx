"use client";

import { motion } from "framer-motion";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiShare2, FiCheckCircle } from "react-icons/fi";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function SocialMediaPage() {
    return (
        <div className="min-h-screen bg-black text-white px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <HeroBackground backgroundImage="/team4.jpg" />
                <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-purple-500/10 border border-purple-500/20 mb-10">
                            <FiShare2 className="text-4xl text-purple-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12 text-center">
                            Social Media That Generates<br />Leads — Not Just Likes.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed mb-16 text-center">
                            We manage and optimize your social presence to attract the right audience, drive engagement, and turn attention into inbound leads.
                        </p>
                        <div className="flex justify-center mb-20">
                            <Link href="#strategy">
                                <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                    <span className="group-hover:translate-x-1 transition-transform inline-block">Start Generating Leads</span>
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-left max-w-5xl mx-auto">
                            {[
                                "Paid Meta Ads",
                                "LinkedIn ROI",
                                "TikTok Strategy",
                                "Content Calendar",
                                "UGC Sourcing",
                                "ROAS Optimization"
                            ].map((item) => (
                                <div key={item} className="flex flex-col gap-3 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-all group">
                                    <FiCheckCircle className="text-purple-500 text-xl" />
                                    <span className="font-bold text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-40 border-t border-zinc-900">
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
                                        Turn Clicks Into<br />Customers.
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
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-4"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                                                <div className="w-1 h-1 rounded-full bg-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm uppercase tracking-wider">{item.title}</h4>
                                                <p className="text-xs text-zinc-500">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-800"
                            >
                                <LeadForm service="social-media" source="social_landing" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
