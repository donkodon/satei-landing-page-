import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-3xl font-serif font-bold mb-6">RELIGHT</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            ブランド品の価値を再定義し、<br/>
                            次なるオーナーへと繋ぐ。<br/>
                            信頼と実績の買取サービス。
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <Instagram className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
                            <Twitter className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
                            <Facebook className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-6">Menu</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="hover:text-white cursor-pointer">買取アイテム一覧</li>
                            <li className="hover:text-white cursor-pointer">買取の流れ</li>
                            <li className="hover:text-white cursor-pointer">よくある質問</li>
                            <li className="hover:text-white cursor-pointer">お客様の声</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-6">Company</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li>株式会社Relight</li>
                            <li>東京都渋谷区...</li>
                            <li>古物商許可証 第1234567890号</li>
                            <li className="hover:text-white cursor-pointer">プライバシーポリシー</li>
                            <li className="hover:text-white cursor-pointer">特定商取引法に基づく表記</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-6">Contact</h3>
                        <p className="text-2xl font-bold mb-2">0120-000-000</p>
                        <p className="text-xs text-gray-500 mb-6">受付時間 10:00 - 19:00 (年中無休)</p>
                        <button className="w-full py-3 border border-white/20 hover:bg-white hover:text-black transition-colors text-sm font-bold">
                            お問い合わせフォーム
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">© 2024 Relight Inc. All Rights Reserved.</p>
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                        PAGE TOP <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};