import React from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
    backgroundImage?: string;
    className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
    backgroundImage = '/team.jpg',
    className
}) => {
    return (
        <div className={`absolute inset-0 z-0 overflow-hidden ${className || ''}`}>
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt="Team Background"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={90}
            />

            {/* Sophisticated Multi-Layer Overlay */}
            {/* Base darkening layer for contrast */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Gradient overlay for depth and focus */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30" />

            {/* Radial gradient to draw focus to center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />

            {/* Premium grain/noise overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};
