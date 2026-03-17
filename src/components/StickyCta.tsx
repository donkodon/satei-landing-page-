import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const StickyCta: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 md:hidden flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a href="#" className="flex-1 bg-white text-brand-black flex flex-col items-center justify-center py-3 border-t border-gray-200">
                <Phone size={20} className="mb-1" />
                <span className="text-xs font-bold">電話する</span>
            </a>
            <a href="https://lin.ee/XfikMs1" target="_blank" rel="noopener noreferrer" className="flex-[2] bg-[#06C755] text-white flex items-center justify-center gap-2 py-3">
                <MessageCircle size={24} className="fill-current" />
                <div className="text-left leading-tight">
                    <span className="block text-[10px] opacity-90">最短5分！</span>
                    <span className="block text-sm font-bold">LINEで無料査定</span>
                </div>
            </a>
        </div>
    );
};