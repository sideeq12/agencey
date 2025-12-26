"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { day: 'Day 0', traffic: 1000, leads: 5, conversion: 0.5 },
    { day: 'Day 15', traffic: 1500, leads: 12, conversion: 0.8 },
    { day: 'Day 30', traffic: 2800, leads: 35, conversion: 1.2 },
    { day: 'Day 45', traffic: 4500, leads: 68, conversion: 1.5 },
    { day: 'Day 60', traffic: 7200, leads: 120, conversion: 1.6 },
    { day: 'Day 75', traffic: 10500, leads: 180, conversion: 1.7 },
    { day: 'Day 90', traffic: 15600, leads: 295, conversion: 1.9 },
];

export function ClientGrowthChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8 hover:border-blue-500/30 transition-colors"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">90-Day Client Growth</h3>
                <p className="text-zinc-400 text-sm">Average performance trajectory for new partners</p>
            </div>

            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis
                            dataKey="day"
                            stroke="#666"
                            tick={{ fill: '#888', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            yAxisId="left"
                            stroke="#666"
                            tick={{ fill: '#888', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            label={{ value: 'Traffic', angle: -90, position: 'insideLeft', fill: '#666' }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            stroke="#666"
                            tick={{ fill: '#888', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            label={{ value: 'Leads', angle: 90, position: 'insideRight', fill: '#666' }}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Bar yAxisId="right" dataKey="leads" name="Leads Generated" fill="#8b5cf6" barSize={20} radius={[4, 4, 0, 0]} />
                        <Line yAxisId="left" type="monotone" dataKey="traffic" name="Monthly Traffic" stroke="#3b82f6" strokeWidth={3} dot={false} />
                        <Line yAxisId="right" type="monotone" dataKey="conversion" name="Conv. Rate (%)" stroke="#10b981" strokeWidth={3} dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
