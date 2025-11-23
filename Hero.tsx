import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-brand-black text-white">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                    alt="Luxury Store Interior" 
                    className="w-full h-full object-cover opacity-40 filter grayscale scale-105 animate-[pulse_10s_infinite]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-7xl mx-auto">
                <div className="animate-fade-in-up">
                    <p className="text-brand-gold tracking-[0.3em] text-sm md:text-lg uppercase mb-4 font-bold">
                        Premium Resale Service
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
                        RELIGHT<br />
                        <span className="text-2xl md:text-4xl font-sans font-light tracking-wide block mt-4 text-gray-200">
                            その価値に、再び光を。
                        </span>
                    </h1>
                    
                    <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed mb-10">
                        ブランド服、バッグ、時計、スニーカー。<br className="hidden md:block"/>
                        あなたが大切にしてきた逸品を、確かな目利きで次に繋ぎます。<br/>
                        業界最高水準の買取価格をお約束します。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="group relative px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-white">
                            <span className="relative z-10 flex items-center gap-2">
                                無料査定を申し込む
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto mb-2"></div>
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </div>
        </div>
    );
};