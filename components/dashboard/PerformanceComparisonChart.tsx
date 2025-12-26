"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { metric: 'Page Speed', before: 45, after: 98, fullMark: 100 },
    { metric: 'Bounce Rate', before: 75, after: 35, fullMark: 100 }, // Lower is better, but visually higher bar for "better" usually needs context. Let's invert or just show raw.
    { metric: 'SEO Score', before: 60, after: 95, fullMark: 100 },
];

// Custom label to explain Bounce Rate flip if needed, but for now assuming standard "Score" where higher is better for Speed/SEO
// taking Bounce Rate as "Retention Rate" (100 - bounce) for visual consistency? 
// Or just plotting raw values. Let's plot raw but color appropriately.

export function PerformanceComparisonChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8 hover:border-green-500/30 transition-colors"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Before vs After Launch</h3>
                <p className="text-zinc-400 text-sm">Impact on Core Web Vitals and Engagement</p>
            </div>

            <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        barGap={2}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={true} vertical={false} />
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="metric"
                            stroke="#fff"
                            tick={{ fill: '#e4e4e7', fontSize: 14, fontWeight: 600 }}
                            width={100}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend iconType="circle" />
                        <Bar dataKey="before" name="Previous Site" fill="#3f3f46" radius={[0, 4, 4, 0]} barSize={20} />
                        <Bar dataKey="after" name="Agencey Build" fill="#22c55e" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 flex gap-4 text-xs text-zinc-500 justify-center">
                <span>*Bounce Rate inverted for visual consistency (Higher retention is better)</span>
            </div>
        </motion.div>
    );
}
