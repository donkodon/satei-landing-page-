import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from './SectionTitle';
import { MessageCircle, Truck, Home } from 'lucide-react';
import { ServiceFlow } from '../types';

const steps: ServiceFlow[] = [
    {
        title: "LINE査定",
        description: "写真を撮って送るだけ。最短5分で概算金額をお伝えします。",
        steps: ["LINE友だち追加", "写真を送信", "査定結果を確認"],
        icon: MessageCircle,
        color: "bg-[#06C755]"
    },
    {
        title: "宅配買取",
        description: "全国どこからでも送料無料。宅配キットに詰めて送るだけ。",
        steps: ["申し込み", "梱包・発送", "振込を確認"],
        icon: Truck,
        color: "bg-brand-black"
    },
    {
        title: "出張買取",
        description: "専門バイヤーがご自宅へ。その場で現金化も可能です。",
        steps: ["訪問予約", "ご自宅で査定", "即現金化"],
        icon: Home,
        color: "bg-brand-black"
    }
];

export const Process: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle en="HOW TO SELL" jp="選べる3つの買取方法" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {steps.map((method, idx) => (
                        <div key={idx} className="flex flex-col h-full border border-gray-100 shadow-lg hover:shadow-xl transition-shadow p-8 rounded-none bg-white relative overflow-hidden group">
                            
                            {/* Header Icon */}
                            <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full ${method.color} opacity-10 group-hover:scale-150 transition-transform duration-500`}></div>
                            <div className="relative z-10 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-brand-black">
                                <method.icon size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                            <p className="text-gray-600 mb-8 text-sm leading-relaxed min-h-[60px]">
                                {method.description}
                            </p>

                            {/* Steps Visual */}
                            <div className="mt-auto space-y-4">
                                {method.steps.map((step, stepIdx) => (
                                    <div key={stepIdx} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center">
                                            {stepIdx + 1}
                                        </div>
                                        <span className="text-sm font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                            
                            {method.title === "宅配買取" ? (
                                <Link to="/delivery-purchase" className="mt-8 w-full py-3 border border-brand-black text-brand-black text-sm font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors block text-center">
                                    詳細を見る
                                </Link>
                            ) : (
                                <button className="mt-8 w-full py-3 border border-brand-black text-brand-black text-sm font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors">
                                    詳細を見る
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};