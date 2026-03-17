import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Shirt, Watch, ShoppingBag, Smartphone, Laptop, Footprints, BookOpen, Disc, Gamepad2, Tv, Sparkles, Cookie, Dumbbell, Utensils, Gem, Wallet, ShirtIcon, Clock, Stamp, Package } from 'lucide-react';
import { Category } from '../types';

const categories: Category[] = [
    { 
        id: 'brand-watches', 
        name: 'ブランド時計', 
        description: 'Rolex, Omega, Cartier', 
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
        icon: Watch
    },
    { 
        id: 'bags', 
        name: 'ブランドバッグ', 
        description: 'Hermes, Chanel, Louis Vuitton', 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
        icon: ShoppingBag
    },
    { 
        id: 'gold-precious', 
        name: '金・貴金属', 
        description: '金・プラチナ・貴金属', 
        image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&q=80&w=800',
        icon: Sparkles
    },
    { 
        id: 'gemstones', 
        name: '宝石', 
        description: 'ルビー・サファイア・エメラルド', 
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        icon: Gem
    },
    { 
        id: 'diamond', 
        name: 'ダイヤモンド', 
        description: 'ダイヤモンド専門査定', 
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
        icon: Gem
    },
    { 
        id: 'brand-jewelry', 
        name: 'ブランドジュエリー', 
        description: 'Tiffany, Cartier, Bvlgari', 
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
        icon: Sparkles
    },
    { 
        id: 'wallets', 
        name: 'ブランド財布', 
        description: 'ハイブランド財布', 
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800',
        icon: Wallet
    },
    { 
        id: 'fur-clothing', 
        name: '洋服・毛皮', 
        description: '高級衣類・毛皮', 
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800',
        icon: Shirt
    },
    { 
        id: 'antique-rolex', 
        name: 'アンティークロレックス', 
        description: 'ヴィンテージロレックス', 
        image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80&w=800',
        icon: Clock
    },
    { 
        id: 'shoes', 
        name: '靴・シューズ', 
        description: 'ブランドシューズ・スニーカー', 
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
        icon: Footprints
    },
    { 
        id: 'kimono', 
        name: '着物', 
        description: '着物・和装品', 
        image: 'https://images.unsplash.com/photo-1583340740165-a6f41a8b1b0f?auto=format&fit=crop&q=80&w=800',
        icon: Shirt
    },
    { 
        id: 'antiques', 
        name: '骨董品', 
        description: '美術品・骨董品', 
        image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800',
        icon: Sparkles
    },
    { 
        id: 'stamps', 
        name: '切手', 
        description: '切手・記念切手', 
        image: 'https://images.unsplash.com/photo-1606148937616-f48f6791c0e6?auto=format&fit=crop&q=80&w=800',
        icon: Stamp
    },
    { 
        id: 'estate-items', 
        name: '遺品', 
        description: '遺品整理・買取', 
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
        icon: Package
    },
];

export const Categories: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionTitle en="CATEGORIES" jp="取扱アイテム" />
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {categories.map((cat) => (
                        <div key={cat.id} className="group relative h-28 overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img 
                                    src={cat.image} 
                                    alt={cat.name} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-300"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-3 text-white">
                                <div className="text-center">
                                    <div className="flex justify-center mb-1 text-brand-gold">
                                        {cat.icon && <cat.icon size={16} />}
                                    </div>
                                    <h3 className="text-xs font-bold leading-tight">{cat.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};