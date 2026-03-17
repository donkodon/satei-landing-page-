import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCta } from '../components/StickyCta';
import { SectionTitle } from '../components/SectionTitle';
import { Home, Clock, Shield, CheckCircle, HelpCircle } from 'lucide-react';

const VisitPurchase: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-black pb-16 md:pb-0">
            <Header />
            
            <main className="pt-20">
                {/* Page Hero */}
                <div className="bg-brand-black text-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">出張買取サービス</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            ご自宅やオフィスまで専門スタッフがお伺いします。<br/>
                            その場で査定・現金買取。大量のお品物でも安心です。
                        </p>
                    </div>
                </div>

                {/* Benefits */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <Home size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">ご自宅で完結</h3>
                                <p className="text-gray-600 text-sm">
                                    重い荷物を運ぶ必要なし。ご自宅やオフィスにいながら、その場で買取が完了します。
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <Clock size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">最短即日対応</h3>
                                <p className="text-gray-600 text-sm">
                                    お申し込み後、最短で当日中に訪問可能。お急ぎの方にも対応いたします。
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <Shield size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">出張費・査定料無料</h3>
                                <p className="text-gray-600 text-sm">
                                    出張費、査定料、キャンセル料はすべて無料。安心してご利用いただけます。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Flow */}
                <section className="py-20 bg-brand-gray">
                    <div className="max-w-5xl mx-auto px-4">
                        <SectionTitle en="FLOW" jp="出張買取の流れ" />
                        
                        <div className="mt-12 space-y-12">
                            {/* Step 1 */}
                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center text-xl font-serif font-bold">01</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">お申し込み</h3>
                                    <p className="text-gray-600 mb-4">
                                        Webフォーム、LINE、お電話にてお申し込みください。お売りいただきたい商品の内容、ご希望の訪問日時をお伺いします。
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded text-sm text-gray-500">
                                        ※対応エリア：東京都23区、横浜市、川崎市を中心に対応しております。その他のエリアはお問い合わせください。
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center text-xl font-serif font-bold">02</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">ご訪問・査定</h3>
                                    <p className="text-gray-600 mb-4">
                                        予約日時に専門スタッフがご自宅へお伺いし、その場で丁寧に査定いたします。査定にかかる時間は品物の量にもよりますが、通常30分〜1時間程度です。
                                    </p>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-sm">【ご用意いただくもの】</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                                            <li>身分証明書（運転免許証、保険証、パスポートなど）</li>
                                            <li>売りたいお品物（付属品や保証書があればより高額査定に）</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center text-xl font-serif font-bold">03</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">ご成約・お支払い</h3>
                                    <p className="text-gray-600 mb-4">
                                        査定金額をご提示し、ご納得いただけましたらその場で現金にてお支払いいたします。<br/>
                                        高額買取の場合は銀行振込の可能性もございます。
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded text-sm text-gray-500 flex items-start gap-2">
                                        <CheckCircle size={16} className="mt-1 text-green-500 flex-shrink-0" />
                                        <span>査定金額にご納得いただけない場合は、もちろんキャンセル可能です。キャンセル料は一切かかりません。</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <SectionTitle en="FAQ" jp="よくあるご質問" />
                        
                        <div className="mt-12 space-y-6">
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-3">
                                    <HelpCircle className="text-brand-gold" size={20} />
                                    対応エリアはどこですか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    東京都23区、横浜市、川崎市を中心に対応しております。その他のエリアもご相談に応じますので、まずはお問い合わせください。
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-3">
                                    <HelpCircle className="text-brand-gold" size={20} />
                                    何点から出張買取を依頼できますか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    1点からでも対応いたします。ただし、買取総額が一定金額以下の場合、出張をお断りさせていただくことがございます。詳しくはお問い合わせください。
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-3">
                                    <HelpCircle className="text-brand-gold" size={20} />
                                    女性一人でも安心して利用できますか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    はい、安心してご利用いただけます。女性スタッフの指定も可能ですので、お申し込み時にお申し付けください。また、スタッフは全員身分証を携帯しております。
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-3">
                                    <HelpCircle className="text-brand-gold" size={20} />
                                    当日キャンセルは可能ですか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    訪問予定時刻の2時間前までにご連絡いただければキャンセル可能です。キャンセル料は一切かかりません。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-20 bg-brand-black text-white text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold mb-6">無料査定のお申し込み</h2>
                        <p className="text-gray-400 mb-8">
                            まずはLINE査定で概算金額を確認するか、<br/>
                            直接出張買取にお申し込みください。
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="https://lin.ee/XfikMs1" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-8 py-4 rounded font-bold hover:bg-[#05b04d] transition-colors text-center">
                                LINEで無料査定
                            </a>
                            <a href="https://shuttyouyoyaku.pages.dev" target="_blank" rel="noopener noreferrer" className="bg-brand-gold text-white px-8 py-4 rounded font-bold hover:bg-[#b38f2f] transition-colors text-center">
                                出張買取を申し込む
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <StickyCta />
        </div>
    );
};

export default VisitPurchase;
