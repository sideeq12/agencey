"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', before: 2000, after: 4000 },
  { month: 'Feb', before: 2200, after: 5500 },
  { month: 'Mar', before: 2500, after: 8000 },
  { month: 'Apr', before: 2700, after: 12000 },
  { month: 'May', before: 3000, after: 18500 },
  { month: 'Jun', before: 3200, after: 25000 },
  { month: 'Jul', before: 3500, after: 32000 },
  { month: 'Aug', before: 3800, after: 45000 },
  { month: 'Sep', before: 4000, after: 58000 },
  { month: 'Oct', before: 4200, after: 72000 },
  { month: 'Nov', before: 4500, after: 86000 },
  { month: 'Dec', before: 4800, after: 105000 },
];

export function GrowthChart() {
    return (
        <div className="w-full bg-zinc-900/30 rounded-[40px] border border-zinc-800 p-8 md:p-12 overflow-hidden relative">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                {[
                    { label: "Total Revenue", before: "$12K", after: "$466K+", color: "text-blue-500" },
                    { label: "Monthly Traffic", before: "1.2k", after: "45k", color: "text-indigo-500" },
                    { label: "Conversion Rate", before: "0.8%", after: "4.2%", color: "text-purple-500" }
                ].map((stat, i) => (
                    <div key={i} className="text-left">
                        <h4 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-2">{stat.label}</h4>
                        <div className="flex items-baseline gap-3">
                            <span className="text-zinc-600 text-lg line-through decoration-zinc-700 decoration-2">{stat.before}</span>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                                className={`text-4xl md:text-5xl font-black ${stat.color}`}
                            >
                                {stat.after}
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#52525b" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#52525b" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis
                            dataKey="month"
                            stroke="#52525b"
                            tick={{ fill: '#71717a', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            dy={10}
                        />
                        <YAxis
                            stroke="#52525b"
                            tick={{ fill: '#71717a', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => `$${value / 1000}k`}
                            dx={-10}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px', color: '#fff', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                            itemStyle={{ color: '#fff' }}
                            labelStyle={{ color: '#a1a1aa', marginBottom: '8px' }}
                            formatter={(value: number, name: string) => [
                                `$${value.toLocaleString()}`, 
                                name === 'after' ? 'With Us' : 'Before'
                            ]}
                        />
                        <Area
                            type="monotone"
                            dataKey="before"
                            stroke="#52525b"
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            fillOpacity={1}
                            fill="url(#colorBefore)"
                            animationDuration={2000}
                        />
                        <Area
                            type="monotone"
                            dataKey="after"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorAfter)"
                            animationDuration={2000}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
            <div className="absolute bottom-8 right-12 flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-600 opacity-50"></div>
                    <span className="text-zinc-500">Industry Avg.</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-blue-400 font-bold">Your Growth</span>
                </div>
            </div>
        </div>
    );
}
