"use client";

import { motion } from 'framer-motion';

const phases = [
    { name: 'Discovery & Strategy', weeks: 1, start: 0, color: 'bg-zinc-600' },
    { name: 'UX/UI Design', weeks: 2, start: 1, color: 'bg-blue-600' },
    { name: 'Development', weeks: 3, start: 3, color: 'bg-indigo-600' },
    { name: 'QA & Optimization', weeks: 1, start: 6, color: 'bg-purple-600' },
    { name: 'Launch', weeks: 0.2, start: 7, color: 'bg-green-500' },
];

export function ProjectTimelineChart() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white rounded-3xl border border-zinc-200 p-8 hover:border-green-500/30 hover:shadow-lg transition-all"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Delivery Velocity</h3>
                <p className="text-zinc-600 text-sm">Typical 8-week sprint from Kickoff to Launch</p>
            </div>

            <div className="space-y-6 relative h-[250px] flex flex-col justify-center">
                {/* Grid lines vertical */}
                <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="border-l border-zinc-200 h-full relative">
                            <span className="absolute -top-6 -left-3 text-xs text-zinc-400">W{i}</span>
                        </div>
                    ))}
                </div>

                {phases.map((phase, i) => (
                    <div key={i} className="relative z-10 flex items-center">
                        <div className="w-40 text-sm font-medium text-zinc-800 pr-4 text-right shrink-0">{phase.name}</div>
                        <div className="flex-grow h-8 bg-zinc-100 rounded-md relative overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${phase.weeks * 12.5}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.2 + 0.4 }} // Added delay to sync after container fade in
                                className={`absolute h-full rounded-md ${phase.color} opacity-90`}
                                style={{ left: `${phase.start * 12.5}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
