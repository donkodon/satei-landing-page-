import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link 
                    to="/" 
                    className={`text-2xl font-serif font-bold tracking-wider z-50 ${scrolled || mobileMenuOpen ? 'text-brand-black' : 'text-white'}`}
                >
                    RELIGHT
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: '買取アイテム', path: '#' },
                        { name: '買取の流れ', path: '#' },
                        { name: 'よくある質問', path: '#' },
                        { name: '会社概要', path: '/company' }
                    ].map((item) => (
                        <a 
                            key={item.name} 
                            href={item.path}
                            onClick={(e) => {
                                if (item.path !== '#') {
                                    e.preventDefault();
                                    navigate(item.path);
                                }
                            }}
                            className={`text-sm font-medium hover:text-brand-gold transition-colors ${scrolled ? 'text-brand-black' : 'text-white'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="https://lin.ee/XfikMs1" target="_blank" rel="noopener noreferrer">
                        <Button variant={scrolled ? 'primary' : 'gold'} className="py-2 text-sm">
                            LINE査定
                        </Button>
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="text-brand-black" />
                    ) : (
                        <Menu className={scrolled ? 'text-brand-black' : 'text-white'} />
                    )}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {[
                        { name: '買取アイテム', path: '#' },
                        { name: '買取の流れ', path: '#' },
                        { name: 'よくある質問', path: '#' },
                        { name: '会社概要', path: '/company' }
                    ].map((item) => (
                        <a 
                            key={item.name} 
                            href={item.path}
                            onClick={(e) => {
                                setMobileMenuOpen(false);
                                if (item.path !== '#') {
                                    e.preventDefault();
                                    navigate(item.path);
                                }
                            }}
                            className="text-2xl font-serif font-bold text-brand-black"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-4 w-64">
                        <a href="https://lin.ee/XfikMs1" target="_blank" rel="noopener noreferrer">
                            <Button variant="gold" fullWidth>LINE査定</Button>
                        </a>
                        <Button variant="outline" fullWidth>
                            <Phone size={16} className="mr-2" />
                            電話問い合わせ
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};