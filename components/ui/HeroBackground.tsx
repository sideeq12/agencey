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
                className="object-cover opacity-80"
                sizes="100vw"
            />

            {/* Subtle gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
        </div>
    );
};
