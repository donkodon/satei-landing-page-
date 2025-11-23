import React from 'react';

interface SectionTitleProps {
    en: string;
    jp: string;
    color?: 'light' | 'dark';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ en, jp, color = 'dark' }) => {
    return (
        <div className="mb-12 text-center">
            <h2 className={`text-4xl md:text-5xl font-serif font-bold tracking-wider mb-2 ${color === 'light' ? 'text-white' : 'text-brand-black'}`}>
                {en}
            </h2>
            <p className={`text-sm md:text-base font-sans tracking-widest ${color === 'light' ? 'text-brand-goldLight' : 'text-brand-gold'}`}>
                {jp}
            </p>
            <div className={`w-12 h-0.5 mx-auto mt-6 ${color === 'light' ? 'bg-white/30' : 'bg-brand-black/10'}`}></div>
        </div>
    );
};