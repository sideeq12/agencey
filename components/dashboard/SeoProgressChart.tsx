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
            className="w-full bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8 hover:border-yellow-500/30 transition-colors"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">SEO Campaign Velocity</h3>
                <p className="text-zinc-400 text-sm">Organic traffic & keyword ranking growth over 6 months</p>
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
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="month" stroke="#52525b" axisLine={false} tickLine={false} />
                        <YAxis stroke="#52525b" axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="organic" name="Organic Traffic" stroke="#3b82f6" fillOpacity={1} fill="url(#colorOrganic)" strokeWidth={3} />
                        <Area type="monotone" dataKey="keywords" name="Ranked Keywords" stroke="#eab308" fillOpacity={1} fill="url(#colorKeywords)" strokeWidth={3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
