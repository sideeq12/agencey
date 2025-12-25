import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 active:scale-95';

    const variants = {
        primary: 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20',
        secondary: 'bg-white text-black hover:bg-zinc-100',
        outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
