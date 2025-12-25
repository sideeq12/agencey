import React from 'react';

interface ImagePlaceholderProps {
    className?: string;
    text?: string;
    aspect?: 'square' | 'video' | 'auto';
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    className = '',
    text = 'Image Placeholder',
    aspect = 'video'
}) => {
    const aspectClass = {
        square: 'aspect-square',
        video: 'aspect-video',
        auto: '',
    };

    return (
        <div className={`relative flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden ${aspectClass[aspect]} ${className}`}>
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
            </svg>
            <div className="relative z-10 text-center px-4">
                <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400 dark:text-zinc-600 mb-1">{text}</p>
                <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 mx-auto" />
            </div>
        </div>
    );
};
