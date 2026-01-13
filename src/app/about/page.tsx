"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
    useEffect(() => {
        const scrollElements = document.querySelectorAll('.scroll-fade-in');
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / 1.25) {
                    el.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', handleScrollAnimation);
        handleScrollAnimation();
        return () => window.removeEventListener('scroll', handleScrollAnimation);
    }, []);

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* About Hero Banner */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Campus Overview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-history mr-2"></i>Established 1998
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            The Guru Nanak Legacy
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed font-light">
                            Over 25 years of great education and growth in Pharal, Haryana.
                        </p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 scroll-fade-in">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-premium-gold/10 rounded-full blur-3xl"></div>
                                <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-premium-lg border-8 border-white">
                                    <Image
                                        src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Vintage Campus"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 scroll-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-8 heading-font">Our Journey</h2>
                            <p className="text-lg text-charcoal/70 mb-10 leading-relaxed font-light">
                                From a single building to a large modern campus, our growth has been guided by one goal: to provide excellent education that is affordable and value-based.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { yr: "1998", t: "Foundation", d: "Started with 120 students." },
                                    { yr: "2005", t: "CBSE Recognition", d: "Official CBSE affiliation achieved." },
                                    { yr: "2015", t: "New Campus", d: "Opening of the modern 12-acre campus." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="text-3xl font-black text-premium-gold heading-font opacity-30 group-hover:opacity-100 transition-opacity">{item.yr}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-navy-blue mb-1">{item.t}</h4>
                                            <p className="text-sm text-charcoal/50 leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Cards */}
            <section className="py-24 bg-navy-blue relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { t: "The Vision", d: "To be a top school known for great education.", icon: "fa-eye" },
                            { t: "The Mission", d: "Building leaders who balance technology with humanity.", icon: "fa-bullseye" },
                            { t: "The Values", d: "Honesty, Strength, and Respect for All.", icon: "fa-universal-access" }
                        ].map((item, i) => (
                            <div key={i} className="scroll-fade-in group">
                                <div className="bg-white/5 backdrop-blur-md p-12 rounded-[3.5rem] border border-white/10 h-full hover:bg-white/10 transition-all duration-500">
                                    <div className="w-16 h-16 rounded-2xl bg-premium-gold flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                                        <i className={`fas ${item.icon} text-2xl text-navy-blue`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-premium-gold mb-6 heading-font">{item.t}</h3>
                                    <p className="text-white/60 leading-relaxed font-light">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-deep-teal opacity-10 rounded-full blur-3xl"></div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-light-ivory">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 scroll-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 heading-font">Our Leadership Team</h2>
                        <p className="text-charcoal/60 max-w-2xl mx-auto font-light">Our school is led by experienced educators and administrators.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Dr. Vikram Sharma", role: "Principal", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            { name: "Mrs. Anjali Kapoor", role: "Head of Academics", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                            { name: "Mr. Rajesh Verma", role: "Director of Ops", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                        ].map((lead, i) => (
                            <div key={i} className="scroll-fade-in group">
                                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500">
                                    <Image
                                        src={lead.img}
                                        alt={lead.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <h3 className="text-white text-2xl font-bold mb-1 heading-font">{lead.name}</h3>
                                        <p className="text-premium-gold text-sm font-black uppercase tracking-widest">{lead.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure Highlight */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-warm-gray/30 rounded-[4rem] p-12 md:p-24 scroll-fade-in">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-8 heading-font">Beyond the Books</h2>
                                <p className="text-lg text-charcoal/70 mb-10 leading-relaxed font-light">
                                    Our facilities are designed for learning and growth. From a 25,000-book Digital Library to a large Sports Arena, every space helps students perform their best.
                                </p>
                                <button className="gradient-teal text-white px-10 py-5 rounded-2xl font-bold hover-lift shadow-premium">
                                    Virtual Campus Tour
                                </button>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-2 gap-8">
                                {[
                                    { t: "60+", d: "Smart Classes", i: "fa-laptop" },
                                    { t: "12", d: "Acre Campus", i: "fa-map" },
                                    { t: "5000", d: "Alumni", i: "fa-user-graduate" },
                                    { t: "100%", d: "Results", i: "fa-star" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white p-8 rounded-3xl shadow-premium text-center">
                                        <div className="text-3xl font-black text-deep-teal mb-2 heading-font">{stat.t}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-charcoal/40">{stat.d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
