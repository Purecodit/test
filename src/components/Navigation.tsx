"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="bg-navy-blue text-white py-2 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-premium-gold opacity-10 rounded-full"></div>
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-deep-teal opacity-10 rounded-full"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-6 mb-2 md:mb-0">
                            <div className="flex items-center bg-premium-gold/20 px-4 py-1 rounded-full">
                                <span className="w-2 h-2 bg-premium-gold rounded-full mr-2 notification-pulse"></span>
                                <span className="text-sm font-medium">Admissions Open </span>
                            </div>
                            <div className="hidden lg:flex items-center">
                                <i className="far fa-calendar-star text-premium-gold mr-2"></i>
                                <span className="text-sm">Last Date: 31 March </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex items-center">
                                <i className="fas fa-phone-volume text-premium-gold mr-2"></i>
                                <span className="text-sm font-medium">+919350202103, +91 9813202103</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link href="#" aria-label="Facebook" className="text-white hover:text-premium-gold transition"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#" aria-label="Instagram" className="text-white hover:text-premium-gold transition"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" aria-label="LinkedIn" className="text-white hover:text-premium-gold transition"><i className="fab fa-linkedin-in"></i></Link>
                                <Link href="#" aria-label="YouTube" className="text-white hover:text-premium-gold transition"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className={`${isSticky ? 'sticky-nav' : 'bg-white'} shadow-premium py-4 sticky top-0 z-50 border-b border-warm-gray transition-all`}>
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center space-x-4">
                            <div className="relative">
                                <Image src="/img/logo.webp" alt="Guru Nanak School Logo" width={48} height={48} className="w-12 h-12 object-contain" />
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-premium-gold rounded-full flex items-center justify-center">
                                    <i className="fas fa-star text-xs text-navy-blue"></i>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-navy-blue heading-font">Guru Nanak School</h1>
                                <p className="text-sm text-deep-teal font-medium">CBSE Affiliated</p>
                            </div>
                        </Link>

                        <div className="hidden xl:flex items-center space-x-2">
                            <Link href="/" className="px-5 py-3 rounded-xl font-medium text-navy-blue hover:bg-warm-gray transition">Home</Link>
                            <Link href="/about" className="px-5 py-3 rounded-xl font-medium text-charcoal hover:bg-warm-gray transition">About</Link>
                            <div className="relative group">
                                <Link href="/academics" className="px-5 py-3 rounded-xl font-medium text-charcoal hover:bg-warm-gray transition flex items-center">
                                    Academics <i className="fas fa-chevron-down ml-2 text-xs"></i>
                                </Link>
                                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-premium-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <Link href="/curriculum" className="block py-3 px-4 hover:bg-warm-gray rounded-xl mb-2">Curriculum</Link>
                                    <Link href="/academics" className="block py-3 px-4 hover:bg-warm-gray rounded-xl mb-2">Academics</Link>
                                    <Link href="/examination" className="block py-3 px-4 hover:bg-warm-gray rounded-xl mb-2">Examination</Link>
                                    <Link href="/tour" className="block py-3 px-4 hover:bg-warm-gray rounded-xl">School Tour</Link>
                                </div>
                            </div>
                            <Link href="/admissions" className="px-5 py-3 rounded-xl font-medium text-charcoal hover:bg-warm-gray transition">Admissions</Link>
                            <Link href="/facilities" className="px-5 py-3 rounded-xl font-medium text-charcoal hover:bg-warm-gray transition">Facilities</Link>
                            <Link href="/gallery" className="px-5 py-3 rounded-xl font-medium text-charcoal hover:bg-warm-gray transition">Gallery</Link>
                            <Link href="/contact" className="px-5 py-3 rounded-xl font-medium text-charcoal hover:bg-warm-gray transition">Contact</Link>
                            <Link href="/apply" className="ml-4 gradient-gold text-navy-blue px-6 py-3 rounded-xl font-semibold shadow-premium hover:shadow-gold-glow hover-lift">
                                <i className="fas fa-edit mr-2"></i>Apply Now
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="xl:hidden text-navy-blue p-3 rounded-xl bg-warm-gray" aria-label="Toggle mobile menu"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="xl:hidden mt-4 bg-white rounded-2xl shadow-premium-lg p-6">
                            <div className="flex flex-col space-y-3">
                                <Link href="/" className="py-4 px-6 bg-warm-gray rounded-xl font-medium text-navy-blue">Home</Link>
                                <Link href="/about" className="py-4 px-6 rounded-xl font-medium text-charcoal hover:bg-warm-gray">About</Link>
                                <Link href="/academics" className="py-4 px-6 rounded-xl font-medium text-charcoal hover:bg-warm-gray">Academics</Link>
                                <Link href="/admissions" className="py-4 px-6 rounded-xl font-medium text-charcoal hover:bg-warm-gray">Admissions</Link>
                                <Link href="/facilities" className="py-4 px-6 rounded-xl font-medium text-charcoal hover:bg-warm-gray">Facilities</Link>
                                <Link href="/gallery" className="py-4 px-6 rounded-xl font-medium text-charcoal hover:bg-warm-gray">Gallery</Link>
                                <Link href="/contact" className="py-4 px-6 rounded-xl font-medium text-charcoal hover:bg-warm-gray">Contact</Link>
                                <Link href="/apply" className="mt-4 gradient-gold text-navy-blue py-4 rounded-xl font-semibold text-center shadow-premium">
                                    Apply for Admission
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navigation;
