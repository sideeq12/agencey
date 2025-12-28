"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface LeadFormProps {
    service: string;
    source: string;
    ctaText?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ service, source, ctaText = 'Get My Free Strategy Session →' }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            service: formData.get('service'),
            goals: formData.get('goals'),
            source,
        };

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="p-8 text-center bg-black rounded-[40px] border border-zinc-800">
                <h3 className="text-2xl font-black italic tracking-tighter mb-4 text-white uppercase">Message sent.</h3>
                <p className="text-zinc-400"> We’ll get back to you within 24 hours.</p>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="p-8 text-center bg-red-50 border border-red-200 rounded-[40px]">
                <h3 className="text-2xl font-black italic tracking-tighter mb-4 text-red-900 uppercase">Error.</h3>
                <p className="text-red-700">Something went wrong. Please try again or contact us directly.</p>
                <Button onClick={() => setStatus('idle')} className="mt-4">
                    Try Again
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g., Dr. John Smith Jr."
                        className="h-14 px-6 rounded-2xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-white transition-all text-sm"
                    />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="h-14 px-6 rounded-2xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-white transition-all text-sm"
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                    <input
                        required
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        className="h-14 px-6 rounded-2xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-white transition-all text-sm"
                    />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Company Name</label>
                    <input
                        required
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your Organization"
                        className="h-14 px-6 rounded-2xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-white transition-all text-sm"
                    />
                </div>
            </div>

            {/* Service Needed */}
            <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Service Needed</label>
                <select
                    id="service"
                    name="service"
                    defaultValue={service}
                    className="h-14 px-6 rounded-2xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-white transition-all text-sm appearance-none cursor-pointer"
                >
                    <option value="webflow">Webflow Development</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="shopify">Shopify E-commerce</option>
                    <option value="custom">Custom Web Application</option>
                    <option value="facebook-google-ads">Facebook & Google Ads</option>
                    <option value="seo">SEO Domination (pSEO)</option>
                    <option value="marketing-automation">Marketing Automation</option>
                    <option value="ai-content">AI Content Creation</option>
                    <option value="conversion-opt">Conversion Optimization</option>
                    <option value="analytics">Analytics & Reporting</option>
                    <option value="design">Graphic Design</option>
                </select>
            </div>

            {/* Business Goals */}
            <div className="flex flex-col gap-2">
                <label htmlFor="goals" className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Tell us about your business goals</label>
                <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    placeholder="Describe what you want to achieve..."
                    className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950 text-white focus:outline-none focus:border-white transition-all text-sm resize-none"
                />
            </div>

            <Button type="submit" disabled={status === 'loading'} className="h-16 text-lg font-bold group">
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {status === 'loading' ? 'Sending message...' : ctaText}
                </span>
            </Button>
            <p className="text-[10px] text-center text-zinc-600 font-bold uppercase tracking-widest">
                Confidential Data Handling Protocol Active
            </p>
        </form>
    );
};
