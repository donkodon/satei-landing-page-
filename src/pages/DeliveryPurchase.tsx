import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCta } from '../components/StickyCta';
import { SectionTitle } from '../components/SectionTitle';
import { Truck, Box, CreditCard, CheckCircle, HelpCircle } from 'lucide-react';

const DeliveryPurchase: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-black pb-16 md:pb-0">
            <Header />
            
            <main className="pt-20">
                {/* Page Hero */}
                <div className="bg-brand-black text-white py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">宅配買取サービス</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            自宅にいながら、箱に詰めて送るだけ。<br/>
                            忙しいあなたに最適な、簡単・安心の買取サービスです。
                        </p>
                    </div>
                </div>

                {/* Benefits */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <Truck size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">全国どこでも送料無料</h3>
                                <p className="text-gray-600 text-sm">
                                    配送料はすべて当社負担。キャンセル時の返送料も無料です。（※一部対象外あり）
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <Box size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">宅配キット無料プレゼント</h3>
                                <p className="text-gray-600 text-sm">
                                    ダンボールや緩衝材など、発送に必要な資材を無料でお届けします。
                                </p>
                            </div>
                            <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
                                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <CreditCard size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">最短即日振込</h3>
                                <p className="text-gray-600 text-sm">
                                    査定完了後、ご了承いただければ最短で当日中にお振込いたします。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Flow */}
                <section className="py-20 bg-brand-gray">
                    <div className="max-w-5xl mx-auto px-4">
                        <SectionTitle en="FLOW" jp="宅配買取の流れ" />
                        
                        <div className="mt-12 space-y-12">
                            {/* Step 1 */}
                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center text-xl font-serif font-bold">01</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">お申し込み</h3>
                                    <p className="text-gray-600 mb-4">
                                        Webフォームまたはお電話にてお申し込みください。無料宅配キット（ダンボール・緩衝材・申込書・着払い伝票）をご希望の日時にお届けします。
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded text-sm text-gray-500">
                                        ※すでにお手持ちのダンボールで発送される場合は、「集荷依頼」のみもお選びいただけます。
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center text-xl font-serif font-bold">02</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">梱包・発送</h3>
                                    <p className="text-gray-600 mb-4">
                                        売りたいお品物と必要書類（身分証明書のコピー・買取申込書）をダンボールに詰め、着払い伝票を貼って発送してください。
                                    </p>
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-sm">【必要書類】</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-600 pl-2">
                                            <li>身分証明書のコピー（運転免許証、保険証、パスポートなど）</li>
                                            <li>買取申込書（宅配キットに同梱、またはダウンロード）</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center text-xl font-serif font-bold">03</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">査定・お振込</h3>
                                    <p className="text-gray-600 mb-4">
                                        お品物が到着次第、専門バイヤーが丁寧に査定いたします。査定結果はメールまたはお電話にてご連絡します。<br/>
                                        金額にご納得いただけましたら、ご指定の銀行口座へお振込いたします。
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded text-sm text-gray-500 flex items-start gap-2">
                                        <CheckCircle size={16} className="mt-1 text-green-500 flex-shrink-0" />
                                        <span>キャンセル時の返送料も無料です。（※一部のお品物を除く）</span>
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
                                    配送キットはいつ届きますか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    通常、お申し込みから1〜3日程度でお届けいたします。日時指定も可能です。
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-3">
                                    <HelpCircle className="text-brand-gold" size={20} />
                                    買取できないものはありますか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    ノーブランド品、著しい破損や汚れがあるもの、偽造品などは買取をお断りする場合がございます。詳しくは「買取対象ブランド」ページをご確認ください。
                                </p>
                            </div>
                            <div className="border-b border-gray-200 pb-6">
                                <h3 className="flex items-center gap-3 font-bold text-lg mb-3">
                                    <HelpCircle className="text-brand-gold" size={20} />
                                    キャンセル料はかかりますか？
                                </h3>
                                <p className="text-gray-600 pl-8">
                                    査定料、キャンセル料は一切かかりません。返送料も原則無料ですが、お品物によっては一部お客様負担となる場合がございます。
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
                            直接宅配買取にお申し込みください。
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="bg-[#06C755] text-white px-8 py-4 rounded font-bold hover:bg-[#05b04d] transition-colors">
                                LINEで無料査定
                            </button>
                            <button className="bg-brand-gold text-white px-8 py-4 rounded font-bold hover:bg-[#b38f2f] transition-colors">
                                宅配買取を申し込む
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <StickyCta />
        </div>
    );
};

export default DeliveryPurchase;