import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const CompanyInfo: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-brand-black">
            <Header />
            
            <main className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">会社概要</h1>
                        <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
                    </div>

                    {/* Company Information */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <table className="w-full">
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <th className="bg-brand-gray px-6 py-4 text-left text-sm font-bold text-brand-black w-1/3">
                                        会社名
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        Relight
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-brand-gray px-6 py-4 text-left text-sm font-bold text-brand-black">
                                        代表
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        能登 健二
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-brand-gray px-6 py-4 text-left text-sm font-bold text-brand-black">
                                        設立
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        2026年2月
                                    </td>
                                </tr>

                                <tr>
                                    <th className="bg-brand-gray px-6 py-4 text-left text-sm font-bold text-brand-black">
                                        所在地
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        〒224-0062<br/>
                                        神奈川県横浜市都筑区葛が谷14−3
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-brand-gray px-6 py-4 text-left text-sm font-bold text-brand-black">
                                        古物商許可証
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        東京都公安委員会 第451930009830号
                                    </td>
                                </tr>
                                <tr>
                                    <th className="bg-brand-gray px-6 py-4 text-left text-sm font-bold text-brand-black">
                                        事業内容
                                    </th>
                                    <td className="px-6 py-4 text-sm text-gray-700">
                                        ・ブランド品の買取及び販売<br/>
                                        ・宝飾品、時計、バッグ等の買取及び販売<br/>
                                        ・古物商営業<br/>
                                        ・リユース事業の出品コンサル、出品アプリ開発
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CompanyInfo;
