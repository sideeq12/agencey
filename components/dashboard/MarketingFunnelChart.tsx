"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { stage: 'Visitors', value: 15000, color: '#3b82f6' },
    { stage: 'Leads', value: 1200, color: '#8b5cf6' },
    { stage: 'Customers', value: 350, color: '#10b981' },
];

export function MarketingFunnelChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white rounded-3xl border border-zinc-200 p-8 hover:border-purple-500/30 hover:shadow-lg transition-all"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Conversion Funnel</h3>
                <p className="text-zinc-600 text-sm">Optimized flow from traffic to revenue</p>
            </div>

            <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 0, right: 40, left: 40, bottom: 0 }}
                        barSize={40}
                    >
                        <XAxis type="number" hide />
                        <YAxis
                            type="category"
                            dataKey="stage"
                            stroke="#52525b"
                            tick={{ fill: '#18181b', fontSize: 14, fontWeight: 600 }}
                            width={100}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                            contentStyle={{ backgroundColor: '#fff', borderColor: '#e4e4e7', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', color: '#18181b' }}
                            itemStyle={{ color: '#18181b' }}
                        />
                        <Bar dataKey="value" radius={[0, 20, 20, 0] as any} background={{ fill: '#f4f4f5' }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                            {/* Label list could be added here for values on bars */}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
