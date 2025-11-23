import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'gold';
    fullWidth?: boolean;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    fullWidth = false, 
    children, 
    className = '',
    ...props 
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-brand-black text-white hover:bg-brand-gold hover:text-white border border-transparent",
        outline: "bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-white",
        gold: "bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-black hover:brightness-110 shadow-lg"
    };

    return (
        <button 
            className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};