"use client";

import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Accordion } from "@/components/ui/Accordion";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiShoppingCart, FiZap, FiChevronDown, FiArrowRight, FiTrendingUp, FiTarget, FiSettings, FiBarChart2 } from "react-icons/fi";

export default function Home() {
  const services = [
    { title: "Webflow", href: "/webflow", color: "from-blue-500/10 to-blue-500/5", icon: FiLayout, desc: "Pixel-perfect visual engineering" },
    { title: "WordPress", href: "/wordpress", color: "from-purple-500/10 to-purple-500/5", icon: FiCode, desc: "Enterprise CMS orchestration" },
    { title: "Shopify", href: "/shopify", color: "from-green-500/10 to-green-500/5", icon: FiShoppingCart, desc: "High-conversion commerce" },
    { title: "Custom", href: "/custom", color: "from-orange-500/10 to-orange-500/5", icon: FiZap, desc: "Bespoke full-stack verticality" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* 1. Hero Section */}
      <header className="relative px-6 pt-32 pb-24 min-h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <div className="inline-block px-4 py-2 mb-8 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Strategic Growth Unit
          </div>
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase">
            Websites & Marketing Systems<br />That Bring You Qualified Leads.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            We design, build, and optimize websites and digital systems that turn traffic into real business opportunities — not just clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#contact">
              <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                <span className="group-hover:translate-x-1 transition-transform inline-block">Get a Free Strategy Session</span>
              </Button>
            </Link>
            <Link href="#growth" className="text-zinc-500 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
              See How It Works
            </Link>
          </div>
        </motion.div>
      </header>

      {/* 2. Trust Bar */}
      <section className="py-16 border-y border-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-center mb-10 text-zinc-500">Trusted by Leading Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
            <div className="text-xl font-bold">TECHNO</div>
            <div className="text-xl font-bold">SYNERGY</div>
            <div className="text-xl font-bold">NEXUS</div>
            <div className="text-xl font-bold">VORTEX</div>
            <div className="text-xl font-bold">QUANTUM</div>
          </div>
          <div className="mt-10 text-center">
            <Link href="#contact" className="text-sm font-semibold text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5">
              See Why Clients Trust Us
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-400">Expert solutions across four powerful platforms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 h-full flex flex-col`}
                  >
                    <Icon className="text-4xl mb-4 text-zinc-300 group-hover:text-white transition-colors" />
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 flex-grow">{service.desc}</p>
                    <div className="flex items-center text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">
                      Explore <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Methodology (The Protocol) */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">The Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { step: "01", title: "Data Harvesting", desc: "We identify high-intent keyword clusters and capture demand before competitors." },
              { step: "02", title: "Visual Synthesis", desc: "Our design units create unique, localized layouts for every keyword entity." },
              { step: "03", title: "Mass Deployment", desc: "Automated generation of 1000+ optimized landing pages with zero CLS." },
              { step: "04", title: "Conversion Loop", desc: "Continuous mapping of user behavior to refine CTR and lead quality." }
            ].map((s, i) => (
              <div key={i} className="flex gap-6">
                <span className="text-4xl font-bold text-zinc-800">{s.step}</span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="#contact">
              <Button variant="outline" size="lg" className="border-zinc-700 hover:bg-zinc-900 group">
                Start Your Project <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Growth & Scale Architecture */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9]">
              Growth & Scale<br />Architecture.
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
              We combine cutting-edge AI technology with proven marketing strategies to deliver results that scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Facebook & Google Ads",
                desc: "High-converting ad campaigns with advanced targeting and optimization.",
                items: ["Campaign Setup", "Audience Targeting", "A/B Testing", "ROI Tracking"],
                icon: FiTarget,
                color: "blue"
              },
              {
                title: "SEO Domination",
                desc: "Programmatic SEO with 1000+ pages for complete market coverage.",
                items: ["1000+ Pages", "Local SEO", "Technical SEO", "Content Automation"],
                icon: FiTrendingUp,
                color: "green"
              },
              {
                title: "Marketing Automation",
                desc: "Complete CRM and email automation to nurture leads into customers.",
                items: ["CRM Setup", "Email Sequences", "SMS Marketing", "Lead Scoring"],
                icon: FiSettings,
                color: "purple"
              },
              {
                title: "AI Content Creation",
                desc: "90-day AI-powered content strategy with SEO optimization.",
                items: ["AI Content", "SEO Optimization", "Social Strategy", "Content Calendar"],
                icon: FiZap,
                color: "orange"
              },
              {
                title: "Conversion Optimization",
                desc: "Landing page optimization and funnel improvements for maximum ROI.",
                items: ["Landing Pages", "A/B Testing", "Funnel Analysis", "CRO Strategy"],
                icon: FiLayout,
                color: "rose"
              },
              {
                title: "Analytics & Reporting",
                desc: "Comprehensive tracking and reporting for all marketing activities.",
                items: ["Custom Dashboards", "ROI Tracking", "Performance Reports", "Data Analysis"],
                icon: FiBarChart2,
                color: "zinc"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[40px] bg-zinc-950 border border-zinc-900 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-8 border border-zinc-800 group-hover:border-${service.color}-500/50 group-hover:bg-${service.color}-500/10 transition-colors`}>
                  <service.icon className={`text-xl text-zinc-500 group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-2xl font-black italic tracking-tighter mb-4 uppercase leading-none group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="space-y-3">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-white transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Value Proposition */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Agencey?</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold mb-2">Radical Focus</h4>
                <p className="text-zinc-400">We don't do generalists. Each engineer is a master of their specific vertical.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-xl font-bold mb-2">No-Code Speed</h4>
                <p className="text-zinc-400">Leveraging Webflow and Shopify to ship enterprise solutions in weeks, not months.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-xl font-bold mb-2">Built for Scale</h4>
                <p className="text-zinc-400">pSEO systems that manage 10,000+ pages with minimal maintenance overhead.</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900/50 rounded-3xl border border-zinc-800 p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Unified Execution</h3>
            <p className="text-zinc-400 mb-8">Decoupled teams working in perfect harmony.</p>
            <Link href="#contact">
              <Button className="w-full font-bold group">
                Talk to a Web Expert <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Proof of Work (Stats) */}
      <section className="py-20 px-6 border-y border-zinc-900/50 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Pages Generated", val: "1,200+" },
            { label: "Client Success", val: "99.8%" },
            { label: "Page Load Avg", val: "400ms" },
            { label: "Active Units", val: "04" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold">{stat.val}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/webflow" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group">
            View Our Work <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-10">
            <Accordion items={[
              {
                question: "What do you actually do?",
                answer: "We design and build high-converting websites and marketing systems—Webflow, WordPress, Shopify, and custom builds—focused on traffic, leads, and sales, not just looks."
              },
              {
                question: "Who is this for?",
                answer: "Startups, agencies, and growing businesses that need a website or marketing system that actually drives revenue—not a pretty brochure."
              },
              {
                question: "How are you different from other agencies?",
                answer: "We don’t just “design.” We combine UX, performance, SEO, and conversion strategy so your website works as a growth engine from day one."
              },
              {
                question: "How long does a typical project take?",
                answer: "Most websites launch in 2–4 weeks, depending on scope. We move fast without cutting corners."
              },
              {
                question: "Do you help after the site is live?",
                answer: "Yes. We offer ongoing optimization, SEO, ads, and support to keep your site improving—not stagnating."
              },
              {
                question: "Can you work with my existing website?",
                answer: "Absolutely. We can redesign, optimize, or rebuild your current site to improve speed, SEO, and conversions."
              },
              {
                question: "How much does it cost?",
                answer: "Pricing depends on scope. We offer transparent quotes after a short strategy call—no hidden fees, no surprises."
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
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-24 px-6" id="contact">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-950 p-12 md:p-16 rounded-3xl border border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter mb-8 uppercase leading-[0.9]">
                  Ready to Grow Your<br />Business?
                </h2>
                <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
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
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-800 shadow-2xl">
              <LeadForm service="homepage" source="main" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold">Agencey</div>
            <div className="flex gap-8 text-sm text-zinc-400">
              <Link href="/webflow" className="hover:text-white transition-colors">Webflow</Link>
              <Link href="/wordpress" className="hover:text-white transition-colors">WordPress</Link>
              <Link href="/shopify" className="hover:text-white transition-colors">Shopify</Link>
              <Link href="/custom" className="hover:text-white transition-colors">Custom</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-zinc-500">
            © 2025 Agencey. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
