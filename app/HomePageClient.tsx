"use client";

import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { Footer } from "@/components/ui/Footer";
import { ClientGrowthChart } from "@/components/dashboard/ClientGrowthChart";
import { PerformanceComparisonChart } from "@/components/dashboard/PerformanceComparisonChart";
import { ProjectTimelineChart } from "@/components/dashboard/ProjectTimelineChart";
import { SeoProgressChart } from "@/components/dashboard/SeoProgressChart";
import Link from "next/link";
import Image from "next/image";
import { LeadForm } from "@/components/forms/LeadForm";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiShoppingCart, FiZap, FiChevronDown, FiArrowRight, FiTrendingUp, FiTarget, FiSettings, FiBarChart2 } from "react-icons/fi";

export function HomePageClient() {
  const services = [
    { title: "Web Design", href: "/webflow", color: "from-blue-500/10 to-blue-500/5", icon: FiLayout, desc: "High-performance sites for local businesses & global brands." },
    { title: "Meta & PPC Ads", href: "/social-media", color: "from-purple-500/10 to-purple-500/5", icon: FiTarget, desc: "Paid acquisition systems that turn traffic into revenue." },
    { title: "SEO Dominance", href: "/seo", color: "from-green-500/10 to-green-500/5", icon: FiTrendingUp, desc: "Dominate search rankings and capture high-intent demand." },
    { title: "AI Automation", href: "/custom", color: "from-orange-500/10 to-orange-500/5", icon: FiZap, desc: "Bespoke AI workflows to scale your internal operations." },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* 1. Hero Section */}
      <header className="relative px-6 pt-32 pb-32 min-h-[90vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <div className="inline-block px-4 py-2 mb-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            Strategic Growth Unit
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-10 leading-[1.05] text-white drop-shadow-2xl">
            Websites & Marketing<br /> <span className="text-white/70">That Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-16 font-medium leading-relaxed drop-shadow-lg">
            We build websites for local businesses and global brands, manage Meta Ads that convert, dominate SEO, and implement AI automation to scale your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link href="#contact">
              <Button size="lg" className="h-16 px-12 text-base font-bold rounded-full shadow-2xl group">
                <span className="group-hover:translate-x-1 transition-transform inline-block">Consult Our Strategists</span>
              </Button>
            </Link>
            <Link href="#growth" className="text-white/70 hover:text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 border-b border-transparent hover:border-white/40 pb-1">
              The Protocol
            </Link>
          </div>
        </motion.div>
      </header>


      {/* 3. Services Grid */}
      <Section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-500">Expert solutions across four powerful platforms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href} className="group">
                  <motion.div
                    // Use a slightly different animation logic here since it's inside a Section that already reveals
                    // Or keep the stagger effect as "children" variants if we were nesting, but keep it simple for now and rely on hover
                    className={`p-8 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                  >
                    <Icon className="text-4xl mb-4 text-zinc-400 group-hover:text-black transition-colors" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-zinc-500 text-sm mb-6 flex-grow">{service.desc}</p>
                    <div className="flex items-center text-sm font-semibold text-zinc-400 group-hover:text-black transition-colors">
                      Explore <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">The Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { step: "01", title: "Strategy & Audit", desc: "We analyze your market, competitors, and current assets to build a roadmap for measurable growth." },
              { step: "02", title: "High-Fidelity Design", desc: "Our design units craft professional, high-converting layouts tailored to your brand and local customers." },
              { step: "03", title: "System Deployment", desc: "We launch your website, Meta Ads, and SEO systems with a focus on speed and conversion integrity." },
              { step: "04", title: "AI-Driven Scaling", desc: "We implement AI automation and continuous testing to lower your acquisition costs and scale revenue." }
            ].map((s, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-bold text-zinc-200">{s.step}</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24">
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Accelerated Delivery</h3>
              <p className="text-zinc-600">From kickoff to launch in weeks, not months.</p>
            </div>
            <ProjectTimelineChart />
          </div>

          <div className="mt-16 text-center">
            <Link href="#contact">
              <Button variant="outline" size="lg" className="group">
                Start Your Project <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 5. Growth & Scale Architecture */}
      <Section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9]">
              Growth & Scale<br />Architecture.
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
              We combine cutting-edge AI technology with proven marketing strategies to deliver results that scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Local Business Sites",
                desc: "High-performance websites tailored for local businesses to drive foot traffic and online leads.",
                items: ["Professional Design", "Mobile Optimization", "Local SEO Setup", "Lead Capture"],
                icon: FiLayout,
                color: "blue"
              },
              {
                title: "Meta & Google Ads",
                desc: "Strategic ad campaigns across Facebook, Instagram, and Google to capture immediate demand.",
                items: ["Lead Generation", "Retargeting", "Ad Creative", "ROAS Optimization"],
                icon: FiTarget,
                color: "green"
              },
              {
                title: "SEO Authority",
                desc: "Long-term organic growth systems to dominate search results and build authority.",
                items: ["Keyword Research", "On-Page SEO", "Backlink Strategy", "Technical Audit"],
                icon: FiTrendingUp,
                color: "purple"
              },
              {
                title: "AI Automation",
                desc: "Bespoke AI workflows that automate your business processes and customer engagement.",
                items: ["AI Chatbots", "Workflow Sync", "Automated Follow-ups", "Process Optimization"],
                icon: FiZap,
                color: "orange"
              },
              {
                title: "Conversion Funnels",
                desc: "End-to-end sales systems designed to guide users from discovery to final purchase.",
                items: ["Funnel Design", "A/B Testing", "Email Automation", "Sales Integration"],
                icon: FiSettings,
                color: "rose"
              },
              {
                title: "Performance Data",
                desc: "Real-time analytics and reporting to track your ROI across all marketing channels.",
                items: ["Custom Dashboards", "Conversion Tracking", "Monthly Reports", "Strategy Scaling"],
                icon: FiBarChart2,
                color: "zinc"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-[40px] bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-8 border border-zinc-200 group-hover:border-${service.color}-500/50 group-hover:bg-${service.color}-500/10 transition-colors`}>
                  <service.icon className={`text-xl text-zinc-500 group-hover:text-black transition-colors`} />
                </div>
                <h3 className="text-2xl font-black italic tracking-tighter mb-4 uppercase leading-none group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover:bg-black transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-700 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Value Proposition */}
      <Section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Why High-Growth Teams Choose Us</h2>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <h4 className="text-xl font-bold mb-2">Specialist Execution</h4>
                <p className="text-zinc-600">We don&apos;t use generalists. Your project is managed by experts specialized in design, Meta Ads, SEO, and AI automation.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="border-l-4 border-purple-500 pl-6"
              >
                <h4 className="text-xl font-bold mb-2">Rapid Deployment</h4>
                <p className="text-zinc-600">We ship professional, production-ready marketing systems in weeks — not months — allowing you to start generating ROI immediately.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="border-l-4 border-green-500 pl-6"
              >
                <h4 className="text-xl font-bold mb-2">Revenue Architecture</h4>
                <p className="text-zinc-600">Our systems are built with one goal: conversion. Every pixel and line of code is optimized to turn visitors into paying customers.</p>
              </motion.div>
            </div>
          </div>
          <div className="bg-zinc-50 rounded-3xl border border-zinc-200 p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Unified Execution</h3>
            <p className="text-zinc-600 mb-8">Design, development, and growth work as one system — no silos, no handoffs, no wasted time.</p>
            <Link href="#contact">
              <Button className="w-full font-bold group">
                Talk to an Expert <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* 6. Proof of Work (Growth Charts) */}
      {/* 6. Performance Dashboard (Replaces Proof of Work) */}
      <Section className="py-24 px-6 border-y border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-zinc-600">The results we deliver for our partners.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ClientGrowthChart />
            <PerformanceComparisonChart />
            <SeoProgressChart />
          </div>

          <div className="mt-16 text-center">
            <Link href="/webflow" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors group">
              View Our Work <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 7. FAQ Section */}
      <Section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-10">
            <Accordion items={[
              {
                question: "What do you actually do?",
                answer: "We build professional websites for local businesses and global brands, manage Meta & Google Ads, dominate search rankings with SEO, and implement AI automation to streamline your growth."
              },
              {
                question: "Who is this for?",
                answer: "Local businesses, startups, and established companies that need more than just a pretty website—they need a high-performance marketing system that drives automated revenue."
              },
              {
                question: "How are you different from other agencies?",
                answer: "We don't just 'design.' We integrate AI automation and multi-channel marketing (Ads + SEO) directly into your technical architecture so your business grows while you sleep."
              },
              {
                question: "Do you work with local businesses?",
                answer: "Absolutely. We specialize in helping local businesses dominate their area through localized SEO and targeted Meta Ads, paired with high-converting websites."
              },
              {
                question: "What is 'AI Automation' for my business?",
                answer: "We build custom AI workflows that handle lead nurturing, customer support, and administrative tasks, allowing you to focus on high-level strategy while your systems handle the busy work."
              },
              {
                question: "How long until I see results from Ads and SEO?",
                answer: "Meta Ads usually drive traffic and leads within the first week of launch. SEO is a longer-term play that builds powerful organic authority over 3–6 months."
              },
              {
                question: "How much does it cost?",
                answer: "Pricing is based on your specific growth goals. We offer transparent, ROIs-focused packages for local businesses through to enterprise-level automation systems."
              }
            ]} />
            <div className="flex justify-center mt-12">
              <Link href="#contact">
                <Button size="lg" className="h-16 px-10 text-lg font-bold group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Get a Free Strategy Session</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Final CTA Section */}
      <Section className="py-24 px-6" id="contact">
        <div className="max-w-5/6 mx-auto bg-gradient-to-br from-zinc-100 to-white p-12 md:p-16 rounded-3xl border border-zinc-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9]">
                  Ready to Grow Your<br />Business?
                </h2>
                <p className="text-lg text-zinc-600 max-w-md leading-relaxed">
                  Book a free 30-minute strategy session. We&apos;ll review your current marketing, identify what&apos;s holding you back, and outline a clear path to more revenue.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Business Review", desc: "A clear look at what's working and what isn't." },
                  { title: "Growth Plan", desc: "Specific recommendations tailored to your goals." },
                  { title: "Implementation", desc: "Expert guidance on how to execute effectively." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                      <div className="w-1 h-1 rounded-full bg-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-200 shadow-2xl">
              <LeadForm service="homepage" source="main" />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
