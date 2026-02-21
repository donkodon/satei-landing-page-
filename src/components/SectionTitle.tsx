import React from 'react';

interface SectionTitleProps {
    en: string;
    jp: string;
    color?: 'light' | 'dark';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ en, jp, color = 'dark' }) => {
    return (
        <div className="mb-12 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold tracking-wider mb-2 ${color === 'light' ? 'text-white' : 'text-brand-black'}`}>
                {jp}
            </h2>
            <div className={`w-12 h-0.5 mx-auto mt-6 ${color === 'light' ? 'bg-white/30' : 'bg-brand-black/10'}`}></div>
        </div>
    );
};