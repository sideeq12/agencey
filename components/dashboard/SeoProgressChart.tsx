"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { month: 'M1', organic: 500, keywords: 120 },
    { month: 'M2', organic: 800, keywords: 250 },
    { month: 'M3', organic: 1500, keywords: 480 },
    { month: 'M4', organic: 3200, keywords: 850 },
    { month: 'M5', organic: 5800, keywords: 1400 },
    { month: 'M6', organic: 12000, keywords: 2300 },
];

export function SeoProgressChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full bg-white rounded-3xl border border-zinc-200 p-8 hover:border-yellow-500/30 hover:shadow-lg transition-all"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">SEO Campaign Velocity</h3>
                <p className="text-zinc-600 text-sm">Organic traffic & keyword ranking growth over 6 months</p>
            </div>

            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorKeywords" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" vertical={false} />
                        <XAxis dataKey="month" stroke="#52525b" axisLine={false} tickLine={false} />
                        <YAxis stroke="#52525b" axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', borderColor: '#e4e4e7', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', color: '#18181b' }}
                            itemStyle={{ color: '#18181b' }}
                        />
                        <Area type="monotone" dataKey="organic" name="Organic Traffic" stroke="#3b82f6" fillOpacity={1} fill="url(#colorOrganic)" strokeWidth={3} />
                        <Area type="monotone" dataKey="keywords" name="Ranked Keywords" stroke="#eab308" fillOpacity={1} fill="url(#colorKeywords)" strokeWidth={3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
