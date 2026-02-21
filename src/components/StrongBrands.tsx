import React from 'react';
import { SectionTitle } from './SectionTitle';

interface BrandItem {
    name: string;
    image: string;
}

const brands: BrandItem[] = [
    // Luxury Bags / High Brand
    { name: "HERMÈS", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&q=80&w=600" },
    { name: "CHANEL", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600" },
    { name: "LOUIS VUITTON", image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600" },
    { name: "DIOR", image: "https://images.unsplash.com/photo-1550614000-4b9519e02a48?auto=format&fit=crop&q=80&w=600" },
    { name: "GUCCI", image: "https://images.unsplash.com/photo-1547900827-c25e87a2d677?auto=format&fit=crop&q=80&w=600" },
    { name: "PRADA", image: "https://images.unsplash.com/photo-1575296093822-94032115e61e?auto=format&fit=crop&q=80&w=600" },
    { name: "CELINE", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600" },
    { name: "BALENCIAGA", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600" },
    { name: "LOEWE", image: "https://images.unsplash.com/photo-1590739225287-bd2f527a9c8b?auto=format&fit=crop&q=80&w=600" },
    { name: "FENDI", image: "https://images.unsplash.com/photo-1627142594632-473d09d316cb?auto=format&fit=crop&q=80&w=600" },
    
    // Watch
    { name: "ROLEX", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600" },
    { name: "PATEK PHILIPPE", image: "https://images.unsplash.com/photo-1614164185128-e4899cae316d?auto=format&fit=crop&q=80&w=600" },
    { name: "AUDEMARS PIGUET", image: "https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&fit=crop&q=80&w=600" },
    { name: "OMEGA", image: "https://images.unsplash.com/photo-1616035100788-29a544607777?auto=format&fit=crop&q=80&w=600" },
    { name: "HUBLOT", image: "https://images.unsplash.com/photo-1612817288484-9691c95b6306?auto=format&fit=crop&q=80&w=600" },
    
    // Jewelry
    { name: "Cartier", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" },
    { name: "TIFFANY & Co.", image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=600" },
    { name: "BVLGARI", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=600" },
    { name: "CHROME HEARTS", image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&q=80&w=600" },
    
    // Apparel / Street
    { name: "Supreme", image: "https://images.unsplash.com/photo-1605634563484-3882776c5264?auto=format&fit=crop&q=80&w=600" },
    { name: "OFF-WHITE", image: "https://images.unsplash.com/photo-1555274175-6f9f43bc8836?auto=format&fit=crop&q=80&w=600" },
    { name: "MONCLER", image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&q=80&w=600" },
    { name: "THE NORTH FACE", image: "https://images.unsplash.com/photo-1588636195861-f09c2a637502?auto=format&fit=crop&q=80&w=600" },
    { name: "COMME des GARÇONS", image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&q=80&w=600" },
    
    // Tech
    { name: "Apple", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=600" }
];

export const StrongBrands: React.FC = () => {
    return (
        <section className="py-24 bg-brand-black text-white relative">
             {/* Decorative Background Texture */}
             <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <SectionTitle en="STRONG BRANDS" jp="買取強化ブランド" color="light" />
                
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Relightでは、以下のブランドを特に高価買取しております。<br/>
                    世界的な需要に基づき、他社には出せない価格をご提示します。
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {brands.map((brand, idx) => (
                        <div 
                            key={idx} 
                            className="group relative h-28 overflow-hidden rounded-md cursor-pointer border border-white/10 hover:border-brand-gold transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img 
                                    src={brand.image} 
                                    alt={brand.name} 
                                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/40 transition-colors duration-500"></div>
                            </div>
                            
                            {/* Brand Name */}
                            <div className="absolute inset-0 flex items-center justify-center p-2 z-10">
                                <span className="font-serif font-bold text-sm md:text-base tracking-widest text-white/90 group-hover:text-white group-hover:scale-105 transition-all duration-300 text-center drop-shadow-md">
                                    {brand.name}
                                </span>
                            </div>

                            {/* Hover Line Effect */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-sm text-gray-400">
                        ※上記以外のブランドも幅広く取り扱っております。お気軽にご相談ください。
                    </p>
                </div>
            </div>
        </section>
    );
};