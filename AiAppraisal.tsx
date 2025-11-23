import React, { useState } from 'react';
import { getAiAppraisalEstimate } from '../services/geminiService';
import { Button } from './Button';
import { Sparkles, Loader2, RefreshCw } from 'lucide-react';

export const AiAppraisal: React.FC = () => {
    const [brand, setBrand] = useState('');
    const [item, setItem] = useState('');
    const [condition, setCondition] = useState('B'); // Default to Used - Good
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ minPrice: string; maxPrice: string; reason: string } | null>(null);

    const handleEstimate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!process.env.API_KEY) {
            alert("API Key is missing. Please configure it in metadata.json or env.");
            return;
        }
        
        setLoading(true);
        setResult(null);
        
        const data = await getAiAppraisalEstimate(brand, item, condition);
        setResult(data);
        setLoading(false);
    };

    return (
        <section className="py-24 bg-brand-black text-white relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold tracking-widest mb-4 border border-brand-gold/30">
                        <Sparkles size={14} />
                        POWERED BY GEMINI AI
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                        AI Instant Quote
                    </h2>
                    <p className="text-gray-400">
                        AIが過去の相場データから、あなたのアイテムの概算価格を即座に算出します。<br/>
                        ※実際の買取価格を保証するものではありません。
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-2xl">
                    <form onSubmit={handleEstimate} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Brand</label>
                                <input 
                                    type="text" 
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                    placeholder="例: Louis Vuitton" 
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold text-white transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Item Name</label>
                                <input 
                                    type="text" 
                                    value={item}
                                    onChange={(e) => setItem(e.target.value)}
                                    placeholder="例: Speedy 30 Monogram" 
                                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold text-white transition-colors"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Condition</label>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { id: 'S', label: '新品・未使用' },
                                    { id: 'A', label: '美品' },
                                    { id: 'B', label: '使用感あり' }
                                ].map((c) => (
                                    <button
                                        key={c.id}
                                        type="button"
                                        onClick={() => setCondition(c.id)}
                                        className={`py-3 px-2 rounded-lg text-sm font-bold border transition-all ${
                                            condition === c.id 
                                            ? 'bg-brand-gold text-brand-black border-brand-gold' 
                                            : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500'
                                        }`}
                                    >
                                        {c.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button 
                            type="submit" 
                            fullWidth 
                            variant="gold" 
                            disabled={loading || !brand || !item}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="animate-spin" /> Assessing...
                                </span>
                            ) : 'AI査定を開始する'}
                        </Button>
                    </form>

                    {result && (
                        <div className="mt-8 pt-8 border-t border-white/10 animate-fade-in-up">
                            <div className="text-center">
                                <p className="text-gray-400 text-sm mb-2">推定買取価格レンジ</p>
                                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                                    ¥{result.minPrice} <span className="text-2xl text-gray-500 font-sans">~</span> ¥{result.maxPrice}
                                </div>
                                <p className="text-xs text-brand-gold mt-2 font-bold tracking-wider">※状態や市場変動により異なります</p>
                            </div>
                            <div className="mt-6 bg-white/10 p-4 rounded-lg">
                                <h4 className="flex items-center gap-2 text-sm font-bold mb-2 text-gray-300">
                                    <Sparkles size={14} className="text-brand-gold" />
                                    AI Valuation Insight
                                </h4>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {result.reason}
                                </p>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-400 mb-4">より正確な価格を知りたい方は</p>
                                <Button variant="primary" className="bg-[#06C755] hover:bg-[#05b54d] text-white border-none w-full md:w-auto">
                                    LINEで写真を送って正確な査定へ
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};