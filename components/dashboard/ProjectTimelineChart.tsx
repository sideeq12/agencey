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
        <div className="w-full bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Delivery Velocity</h3>
                <p className="text-zinc-400 text-sm">Typical 8-week sprint from Kickoff to Launch</p>
            </div>

            <div className="space-y-6 relative h-[250px] flex flex-col justify-center">
                {/* Grid lines vertical */}
                <div className="absolute inset-0 grid grid-cols-8 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="border-l border-zinc-800 h-full relative">
                            <span className="absolute -top-6 -left-3 text-xs text-zinc-600">W{i}</span>
                        </div>
                    ))}
                </div>

                {phases.map((phase, i) => (
                    <div key={i} className="relative z-10 flex items-center">
                        <div className="w-40 text-sm font-medium text-zinc-300 pr-4 text-right shrink-0">{phase.name}</div>
                        <div className="flex-grow h-8 bg-zinc-900/50 rounded-md relative overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${phase.weeks * 12.5}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className={`absolute h-full rounded-md ${phase.color} opacity-90`}
                                style={{ left: `${phase.start * 12.5}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
