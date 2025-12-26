"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
    { subject: 'Speed', A: 120, B: 90, fullMark: 150 },
    { subject: 'SEO', A: 98, B: 75, fullMark: 150 },
    { subject: 'Conversion', A: 86, B: 60, fullMark: 150 },
    { subject: 'Security', A: 99, B: 70, fullMark: 150 },
    { subject: 'Scalability', A: 85, B: 65, fullMark: 150 },
    { subject: 'UX Score', A: 95, B: 70, fullMark: 150 },
];

export function ServiceImpactChart() {
    return (
        <div className="w-full bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8">
            <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">Platform Power</h3>
                <p className="text-zinc-400 text-sm">Comparing Agencey Custom Stacks vs. Standard Themes</p>
            </div>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid stroke="#333" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#e4e4e7', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                        <Radar
                            name="Agencey Custom"
                            dataKey="A"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fill="#3b82f6"
                            fillOpacity={0.3}
                        />
                        <Radar
                            name="Standard Theme"
                            dataKey="B"
                            stroke="#52525b"
                            strokeWidth={2}
                            fill="#52525b"
                            fillOpacity={0.1}
                        />
                        <Legend />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', borderRadius: '12px' }}
                            itemStyle={{ color: '#fff' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
