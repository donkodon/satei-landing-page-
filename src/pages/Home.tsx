import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { Process } from '../components/Process';
import { Footer } from '../components/Footer';
import { StickyCta } from '../components/StickyCta';
import { PurchaseRecords } from '../components/PurchaseRecords';
import { StrongBrands } from '../components/StrongBrands';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-black pb-16 md:pb-0">
            <Header />
            
            <main>
                <Hero />
                
                {/* Introduction / Concept */}
                <section className="py-20 px-4 text-center bg-white">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 leading-relaxed">
                            使わなくなったブランド品に、<br/>
                            <span className="text-brand-gold">最高の評価</span>を。
                        </h2>
                        <p className="text-gray-600 leading-loose mb-8">
                            Relight（リライト）は、お客様の大切なコレクションを次に繋ぐ<br className="hidden md:block"/>
                            プレミアムリユースサービスです。<br/>
                            市場動向を熟知したプロフェッショナルが、<br className="hidden md:block"/>
                            一点一点丁寧に査定いたします。
                        </p>
                        <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
                    </div>
                </section>

                <StrongBrands />

                <PurchaseRecords />

                <Categories />
                
                <Process />

                {/* Trust Section */}
                <section className="py-20 bg-brand-gray">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="h-96 relative rounded-lg overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Concierge Service" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-brand-gold tracking-widest uppercase mb-4">Why Relight?</h3>
                                <h2 className="text-3xl font-serif font-bold mb-6">高価買取ができる理由</h2>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-md text-brand-gold">01</div>
                                        <div>
                                            <h4 className="font-bold mb-2">独自の販売ルート</h4>
                                            <p className="text-sm text-gray-600">国内だけでなく海外にも販路を持つことで、世界基準の相場で買取が可能。</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-md text-brand-gold">02</div>
                                        <div>
                                            <h4 className="font-bold mb-2">店舗コストの削減</h4>
                                            <p className="text-sm text-gray-600">WEB集客に特化し、店舗運営費を削減。その分を買取価格に還元しています。</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center font-serif font-bold text-xl shadow-md text-brand-gold">03</div>
                                        <div>
                                            <h4 className="font-bold mb-2">圧倒的な専門知識</h4>
                                            <p className="text-sm text-gray-600">各ジャンルの専任バイヤーが在籍。希少価値を見逃しません。</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <StickyCta />
        </div>
    );
};

export default Home;