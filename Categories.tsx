import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Shirt, Watch, ShoppingBag, Smartphone, Laptop, Footprints } from 'lucide-react';
import { Category } from '../types';

const categories: Category[] = [
    { 
        id: 'clothes', 
        name: 'BRAND CLOTHES', 
        description: 'Supreme, Off-White, Gucci, etc.', 
        image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
        icon: Shirt
    },
    { 
        id: 'bags', 
        name: 'BRAND BAGS', 
        description: 'Hermes, Chanel, Louis Vuitton', 
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800',
        icon: ShoppingBag
    },
    { 
        id: 'watches', 
        name: 'LUXURY WATCHES', 
        description: 'Rolex, Patek Philippe, Audemars Piguet', 
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
        icon: Watch
    },
    { 
        id: 'sneakers', 
        name: 'SNEAKERS', 
        description: 'Nike, Adidas, New Balance', 
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800',
        icon: Footprints
    },
    { 
        id: 'smartphones', 
        name: 'SMARTPHONES', 
        description: 'iPhone, Galaxy, Pixel', 
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800',
        icon: Smartphone
    },
    { 
        id: 'gadgets', 
        name: 'PC & GADGETS', 
        description: 'MacBook, iPad, Cameras', 
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
        icon: Laptop
    },
];

export const Categories: React.FC = () => {
    return (
        <section className="py-20 bg-brand-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <SectionTitle en="CATEGORIES" jp="取扱アイテム" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.id} className="group relative h-80 overflow-hidden cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
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
                            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-2 text-brand-gold">
                                        {cat.icon && <cat.icon size={20} />}
                                        <span className="text-xs font-bold tracking-widest uppercase">Relight Buy</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-2">{cat.name}</h3>
                                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {cat.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};