import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StickyCta } from '../components/StickyCta';
import { ArrowRight, Award, Banknote, Zap, ChevronDown, ChevronUp, Check, Clock, Package, EyeOff, MapPin, FileText, UserCircle, Truck } from 'lucide-react';

const DeliveryPurchase: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "査定料や送料はかかりますか？",
            a: "いいえ、査定料、往復の送料、キャンセル料、振込手数料など、すべて完全無料です。お客様のご負担は一切ございません。"
        },
        {
            q: "宅配キットには何が含まれていますか？",
            a: "ダンボール、緩衝材（プチプチ）、着払い伝票、買取申込書がセットになっています。お品物のサイズに合わせて数種類のダンボールをご用意しております。"
        },
        {
            q: "査定結果に納得がいかない場合はキャンセルできますか？",
            a: "はい、もちろん可能です。査定金額にご納得いただけない場合は、速やかにお品物を無料でご返送いたします。"
        },
        {
            q: "身分証明書は必要ですか？",
            a: "古物営業法の規定により、買取の際は身分証明書（運転免許証、保険証、パスポートなど）のコピーが必ず必要となります。"
        },
        {
            q: "傷や汚れがあるものでも買い取ってもらえますか？",
            a: "はい、傷や汚れ、箱などの付属品がないお品物でも喜んで査定させていただきます。状態に関わらず、まずはお気軽にお送りください。"
        }
    ];

    const comparisonData = [
        { label: "現金化の早さ", icon: <Banknote size={16}/>, delivery: "最短即日〜翌日", deliveryMark: "◎", store: "即日（その場で）", storeMark: "◎", visit: "即日（その場で）", visitMark: "◎", flea: "売れるまで現金化不可", fleaMark: "△" },
        { label: "かかる手間", icon: <Clock size={16}/>, delivery: "箱に詰めて送るだけ", deliveryMark: "◎", store: "店舗への移動・待ち時間", storeMark: "△", visit: "日程調整が必要", visitMark: "◯", flea: "撮影・出品・やり取り・梱包", fleaMark: "×" },
        { label: "買取価格", icon: <Award size={16}/>, delivery: "店舗維持費がなく高還元", deliveryMark: "◎", store: "高水準", storeMark: "◯", visit: "高水準", visitMark: "◯", flea: "高いが手数料・送料が発生", fleaMark: "◯" },
        { label: "プライバシー", icon: <EyeOff size={16}/>, delivery: "完全非対面で安心", deliveryMark: "◎", store: "人目が気になる", storeMark: "△", visit: "自宅に人が入る", visitMark: "△", flea: "個人間トラブルのリスク", fleaMark: "△" },
        { label: "売れる量", icon: <Package size={16}/>, delivery: "何点でもまとめてOK", deliveryMark: "◎", store: "持ち運べる量のみ", storeMark: "△", visit: "大量でもOK", visitMark: "◎", flea: "1点ずつの出品が必要", fleaMark: "×" },
        { label: "対応エリア", icon: <MapPin size={16}/>, delivery: "全国どこでも対応", deliveryMark: "◎", store: "店舗の周辺のみ", storeMark: "△", visit: "対応エリア内のみ", visitMark: "◯", flea: "全国どこでも対応", fleaMark: "◎" }
    ];

    return (
        <div className="min-h-screen bg-[#11151D] font-sans text-white selection:bg-blue-600 selection:text-white pb-16 md:pb-0">
            <Header />
            
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                            alt="Luxury Women's Handbag" 
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#11151D] via-[#11151D]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#11151D] via-transparent to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto">
                        <div className="max-w-2xl">
                            <div className="inline-block border border-[#2A58A6] bg-[#2A58A6]/20 text-[#60A5FA] text-xs font-bold px-3 py-1 mb-6 tracking-widest rounded-sm">
                                PREMIUM SERVICE
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif text-white">
                                最高峰の査定を、<br/>
                                <span className="text-[#3B82F6]">ご自宅で。</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-xl">
                                業界トップクラスの鑑定士が、あなたの価値を正しく評価します。
                                完全非対面の宅配買取で、プライバシーを守りながら最高額での売却を。
                            </p>
                            <button className="bg-[#2A58A6] hover:bg-blue-600 text-white px-8 py-4 rounded font-bold text-lg transition-all flex items-center gap-3 group shadow-lg">
                                今すぐ無料査定を申し込む
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Target Audience Section */}
                <section className="py-20 px-6 bg-[#11151D]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">こんな方におすすめです</h2>
                            <p className="text-gray-400">宅配買取は、忙しい現代のライフスタイルに最も適した買取方法です。</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "日中忙しくて店舗に行く時間がない",
                                "近くに信頼できるブランド買取店がない",
                                "売りたい品物が複数あって持ち運びが大変",
                                "対面での査定や、金額交渉が少し苦手",
                                "誰にも知られずにプライバシーを守って売りたい",
                                "自分のペースで空いた時間に準備したい"
                            ].map((text, idx) => (
                                <div key={idx} className="bg-[#1E2532] p-5 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-gray-700 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#2A58A6]/20 text-[#3B82F6] flex items-center justify-center flex-shrink-0">
                                        <Check size={20} />
                                    </div>
                                    <p className="text-gray-200 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3 Reasons Section */}
                <section className="py-20 px-6 bg-[#181E29]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">選ばれる3つの理由</h2>
                            <p className="text-gray-400">確かな実績と信頼で、大切なお品物を最高価格で買い取ります。</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Reason 1 */}
                            <div className="bg-[#1E2532] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="w-12 h-12 bg-[#23314F] rounded-lg flex items-center justify-center mb-6 text-[#3B82F6]">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">熟練の鑑定士</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    ブランド知識豊富な専門スタッフが、市場動向を熟知した上で一点一点丁寧に査定。隠れた価値を見逃しません。
                                </p>
                            </div>

                            {/* Reason 2 */}
                            <div className="bg-[#1E2532] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="w-12 h-12 bg-[#23314F] rounded-lg flex items-center justify-center mb-6 text-[#3B82F6]">
                                    <Banknote size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">査定料・送料0円</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    宅配キットの送付から、返送の送料、査定手数料、振込手数料まで全て弊社が負担。お客様の負担は一切ありません。
                                </p>
                            </div>

                            {/* Reason 3 */}
                            <div className="bg-[#1E2532] p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                                <div className="w-12 h-12 bg-[#23314F] rounded-lg flex items-center justify-center mb-6 text-[#3B82F6]">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">スピード入金</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    お品物到着後、最短当日中に査定結果をお知らせ。ご承諾いただければ、即日〜翌営業日にはご入金が完了します。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-20 px-6 bg-[#11151D]">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">買取方法でどう違うの？</h2>
                            <p className="text-gray-400">お客様のニーズに合わせて最適な方法をお選びいただけます。<br/>その中でも<span className="text-[#60A5FA] font-bold">「宅配買取」</span>は圧倒的な手間のなさで選ばれています。</p>
                        </div>
                        
                        <div className="overflow-x-auto pb-4">
                            <div className="min-w-[768px]">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b border-gray-800 text-gray-400 font-medium w-1/5">比較ポイント</th>
                                            <th className="p-4 border-b-2 border-[#3B82F6] bg-[#2A58A6]/10 text-[#60A5FA] font-bold text-center w-1/5 rounded-t-lg">
                                                <div className="text-lg mb-1">宅配買取</div>
                                                <div className="text-xs font-normal opacity-80">（当サービス推奨）</div>
                                            </th>
                                            <th className="p-4 border-b border-gray-800 text-white font-medium text-center w-1/5">店頭買取</th>
                                            <th className="p-4 border-b border-gray-800 text-white font-medium text-center w-1/5">出張買取</th>
                                            <th className="p-4 border-b border-gray-800 text-white font-medium text-center w-1/5">フリマアプリ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonData.map((row, idx) => (
                                            <tr key={idx} className="border-b border-gray-800/50 hover:bg-[#1E2532]/30 transition-colors">
                                                <td className="p-4 text-gray-300 font-medium">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-gray-500 bg-gray-800/50 p-2 rounded-lg">{row.icon}</span>
                                                        {row.label}
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center bg-[#2A58A6]/5 border-x border-[#2A58A6]/20">
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <span className="text-[#60A5FA] font-bold text-2xl">{row.deliveryMark}</span>
                                                        <span className="text-sm text-white font-medium">{row.delivery}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <span className={`font-bold text-xl ${row.storeMark === '◎' ? 'text-gray-300' : 'text-gray-500'}`}>{row.storeMark}</span>
                                                        <span className="text-xs text-gray-400">{row.store}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <span className={`font-bold text-xl ${row.visitMark === '◎' ? 'text-gray-300' : 'text-gray-500'}`}>{row.visitMark}</span>
                                                        <span className="text-xs text-gray-400">{row.visit}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-center">
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <span className={`font-bold text-xl ${row.fleaMark === '◎' || row.fleaMark === '◯' ? 'text-gray-300' : 'text-gray-500'}`}>{row.fleaMark}</span>
                                                        <span className="text-xs text-gray-400">{row.flea}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Friendly Steps Section with White Background */}
                <section className="py-20 px-6 bg-[#F8FAFC] text-[#11151D]">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-[#11151D]">宅配買取のご利用フロー</h2>
                            <p className="text-gray-600">お申し込みからお振込みまで、すべてご自宅で完結します。<br/>選べる2つの梱包方法をご用意しております。</p>
                        </div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative h-64 md:h-auto">
                                    <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="スマホでお申し込み" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 bg-[#2A58A6] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shadow-lg">
                                        1
                                    </div>
                                </div>
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4 text-[#11151D]">WEB・LINEでお申し込み</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        24時間受付。お名前と住所を入力するだけで簡単にお申し込みいただけます。LINEからの画像査定も承っております。
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 with 2 Patterns */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-8 pb-0">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#2A58A6] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shadow-lg flex-shrink-0">
                                            2
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#11151D]">選べる梱包・発送方法</h3>
                                    </div>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        お客様の状況に合わせて、2つの発送方法をご用意しております。どちらも送料は完全無料（着払い）です。
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 border-t border-gray-100">
                                    {/* Pattern A */}
                                    <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                                        <div className="inline-block bg-[#3B82F6]/10 text-[#2A58A6] font-bold px-3 py-1 rounded-full text-sm mb-4">
                                            パターン A
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">無料の宅配キットを使う</h4>
                                        <img src="https://images.unsplash.com/photo-1607004468134-b295cb2e1e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="宅配キット" className="w-full h-48 object-cover rounded-lg mb-4" />
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            箱がない方におすすめ。お申し込み後、最短翌日に「ダンボール・緩衝材・着払い伝票・申込書」のセットを無料でお届けします。お品物を詰めて送るだけです。
                                        </p>
                                    </div>

                                    {/* Pattern B */}
                                    <div className="p-8">
                                        <div className="inline-block bg-[#06C755]/10 text-[#05b04d] font-bold px-3 py-1 rounded-full text-sm mb-4">
                                            パターン B
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">自宅にある箱で送る（集荷）</h4>
                                        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="自宅の箱" className="w-full h-48 object-cover rounded-lg mb-4" />
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            お急ぎの方におすすめ。ご自宅にある紙袋やダンボールにお品物を詰めてください。ご指定の日時に配送業者が集荷（引取）にお伺いします。
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Required Documents Callout */}
                            <div className="bg-[#2A58A6]/5 border border-[#2A58A6]/20 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2A58A6] shadow-sm flex-shrink-0">
                                    <FileText size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-[#11151D]">発送時に必要な書類（重要）</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        古物営業法の定めにより、買取には以下の書類の同梱が必要です。<br/>
                                        <span className="font-bold text-[#2A58A6]">①本人確認書類のコピー</span>（運転免許証、保険証、マイナンバーカードなど）<br/>
                                        <span className="font-bold text-[#2A58A6]">②買取申込書</span>（キットに同封、またはご自身で紙に必要事項を記入したメモでも可）
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative h-64 md:h-auto">
                                    <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="プロによる査定" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 bg-[#2A58A6] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shadow-lg">
                                        3
                                    </div>
                                </div>
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4 text-[#11151D]">プロによる査定・結果のご連絡</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        お品物が到着次第、熟練の鑑定士が1点1点丁寧に査定いたします。査定が完了しましたら、最短当日中にメールまたはLINEにて査定金額をご連絡いたします。
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative h-64 md:h-auto">
                                    <img src="https://images.unsplash.com/photo-1580519542036-ed47f3e42214?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="即日お振込み" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4 bg-[#2A58A6] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl shadow-lg">
                                        4
                                    </div>
                                </div>
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4 text-[#11151D]">ご成約・即日お振込み</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        査定金額にご納得いただけましたら、ご指定の銀行口座へすぐにお振込みいたします（手数料無料）。<br/>
                                        ※万が一キャンセルされる場合でも、返送料は弊社が負担いたしますのでご安心ください。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-6 bg-[#181E29]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">よくある質問</h2>
                            <p className="text-gray-400">お客様から寄せられるご質問にお答えします。</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-[#1E2532] border border-gray-800 rounded-lg overflow-hidden transition-all duration-200">
                                    <button 
                                        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="font-bold pr-4 text-white">Q. {faq.q}</span>
                                        {openFaq === index ? (
                                            <ChevronUp className="text-[#3B82F6] flex-shrink-0" size={20} />
                                        ) : (
                                            <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                                        )}
                                    </button>
                                    <div 
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                            openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                                            <span className="text-[#3B82F6] font-bold mr-2">A.</span>
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24 px-6 relative text-center bg-[#11151D]">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-white">あなたの価値を、最高額で。</h2>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            まずは無料査定でお持ちのお品物の価値をご確認ください。<br/>
                            1分で完了する簡単申し込みで、宅配キットをお届けします。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://lin.ee/XfikMs1" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] text-white px-8 py-4 rounded font-bold hover:bg-[#05b04d] transition-colors flex items-center justify-center gap-2">
                                LINEで無料査定
                            </a>
                            <button className="bg-[#2A58A6] hover:bg-blue-600 text-white px-8 py-4 rounded font-bold transition-all flex items-center justify-center gap-3 group">
                                宅配買取を申し込む
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
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
