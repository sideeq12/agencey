import React from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
    backgroundImage?: string;
    className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({
    backgroundImage = '/team.jpg',
    className = ''
}) => {
    return (
        <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt="Background"
                fill
                priority
                className="object-cover opacity-60"
                sizes="100vw"
            />

            {/* Top Gradient Only for text readability (removed bottom gradients) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />

            {/* Radial gradient very subtle */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 opacity-20" />
        </div>
    );
};
