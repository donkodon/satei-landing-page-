import React from 'react';
import { SectionTitle } from './SectionTitle';
import { PurchaseItem } from '../types';
import { TrendingUp } from 'lucide-react';

const records: PurchaseItem[] = [
    {
        id: '1',
        brand: 'ROLEX',
        name: 'Cosmograph Daytona 116500LN White',
        price: '4,650,000',
        image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
        category: 'WATCH',
        diff: '25% UP'
    },
    {
        id: '2',
        brand: 'HERMÈS',
        name: 'Birkin 25 Togo Black Gold Hardware',
        price: '3,200,000',
        image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop',
        category: 'BAG',
        diff: 'MAX'
    },
    {
        id: '3',
        brand: 'CHROME HEARTS',
        name: '22K Baby Fat Cross Pave Diamond',
        price: '450,000',
        image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=800&auto=format&fit=crop',
        category: 'ACCESSORY'
    },
    {
        id: '4',
        brand: 'MONCLER',
        name: 'Maya Down Jacket Black',
        price: '150,000',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop',
        category: 'APPAREL'
    },
    {
        id: '5',
        brand: 'NIKE',
        name: 'Air Jordan 1 Retro High OG Chicago',
        price: '210,000',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
        category: 'SNEAKER'
    },
    {
        id: '6',
        brand: 'Apple',
        name: 'MacBook Pro M3 Max 16-inch',
        price: '480,000',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=800&auto=format&fit=crop',
        category: 'PC/GADGET'
    }
];

export const PurchaseRecords: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle en="PURCHASE RECORDS" jp="高価買取実績" />
                
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto leading-loose">
                    Relightは独自の再販ルートと徹底したコスト削減により、<br className="hidden md:block"/>
                    業界最高水準の買取価格を実現しています。<br/>
                    他社の査定額にご満足いただけなかった方も、ぜひ一度ご相談ください。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {records.map((item) => (
                        <div key={item.id} className="group bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden flex flex-col">
                            {/* Image Area */}
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-brand-black text-white text-xs font-bold px-3 py-1 tracking-widest uppercase">
                                    {item.category}
                                </div>
                                {item.diff && (
                                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-black text-xs font-bold px-3 py-1 flex items-center gap-1 shadow-lg animate-pulse">
                                        <TrendingUp size={12} />
                                        {item.diff}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="mb-2">
                                    <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wide mb-1">{item.brand}</h4>
                                    <h3 className="font-medium text-gray-800 line-clamp-2 min-h-[3rem]">{item.name}</h3>
                                </div>
                                
                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-end justify-between">
                                        <span className="text-xs text-gray-400 font-bold">買取参考価格</span>
                                        <div className="text-right">
                                            <span className="text-2xl font-serif font-bold text-brand-black group-hover:text-brand-gold transition-colors">
                                                ¥{item.price}
                                            </span>
                                            <span className="text-xs text-gray-400 ml-1">-</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-4 bg-transparent border-2 border-brand-black text-brand-black font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300">
                        もっと実績を見る
                    </button>
                </div>
            </div>
        </section>
    );
};