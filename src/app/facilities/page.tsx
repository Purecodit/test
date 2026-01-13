"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function FacilitiesPage() {
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

            {/* Facilities Hero */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Facilities Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold text-navy-blue px-6 py-3 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-premium">
                                Habitat of Excellence
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 heading-font leading-tight">
                            World-Class <br /><span className="text-premium-gold italic">Infrastructure</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed font-light">
                            Synthesizing aesthetic design with functional superiority to create the ultimate learning ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { val: "25 Acres", t: "Smart Campus", i: "fa-map-marked-alt" },
                            { val: "15 Labs", t: "Research Centers", i: "fa-vial" },
                            { val: "800 Cap", t: "Hi-Tech Auditorium", i: "fa-theater-masks" },
                            { val: "Olympic", t: "Swimming Pool", i: "fa-swimmer" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-warm-gray shadow-premium hover:shadow-premium-lg transition-all scroll-fade-in text-center">
                                <div className="w-14 h-14 bg-light-ivory rounded-2xl flex items-center justify-center mx-auto mb-8">
                                    <i className={`fas ${stat.i} text-deep-teal text-xl`}></i>
                                </div>
                                <div className="text-3xl font-black text-navy-blue mb-2 heading-font">{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-charcoal/30">{stat.t}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Blocks */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {/* Block 1 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-fade-in">
                            <div className="relative aspect-video rounded-[4rem] overflow-hidden group">
                                <Image
                                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                                    alt="Smart Classroom"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-navy-blue opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-navy-blue mb-8 heading-font">The Cognitive Cloud</h3>
                                <p className="text-xl text-charcoal/60 font-light leading-relaxed mb-10">
                                    Our classrooms aren't just rooms; they're digitally-enhanced cognitive environments. Equipped with 75-inch multi-touch displays and high-fidelity acoustics.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4 text-sm font-bold text-deep-teal">
                                        <div className="w-2 h-2 rounded-full bg-premium-gold"></div>
                                        AR-Ready Panels
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-bold text-deep-teal">
                                        <div className="w-2 h-2 rounded-full bg-premium-gold"></div>
                                        Gigabit Connectivity
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-fade-in">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-4xl font-bold text-navy-blue mb-8 heading-font">Science Verticals</h3>
                                <p className="text-xl text-charcoal/60 font-light leading-relaxed mb-10">
                                    Specialized laboratories for Physics, Chemistry, and biotechnology with industry-standard safety protocols and precision instruments.
                                </p>
                                <ul className="space-y-4">
                                    {["Atomic & Molecular Modeling Kits", "Digital Spectrophotometers", "Climate-Controlled Bio-Cultivators"].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-center text-sm font-light text-charcoal/40">
                                            <i className="fas fa-check text-premium-gold"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative aspect-video rounded-[4rem] overflow-hidden order-1 lg:order-2 group">
                                <Image
                                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Labs"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports & Wellness */}
            <section className="py-24 bg-navy-blue text-white overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24 scroll-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-font">Athletic Domain</h2>
                        <p className="text-white/40 font-light">Propelling physical excellence through professional-grade arenas.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Synthetic Track", d: "400-meter all-weather pro track.", i: "fa-running" },
                            { name: "Indoor Gymnasium", d: "Multi-modal fitness center.", i: "fa-dumbbell" },
                            { name: "Skating Rink", d: "Polished hardwood arena.", i: "fa-skating" }
                        ].map((sport, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 group hover:bg-white/10 transition-all scroll-fade-in">
                                <div className="text-premium-gold text-4xl mb-10 group-hover:scale-110 transition-transform duration-500">
                                    <i className={`fas ${sport.i}`}></i>
                                </div>
                                <h4 className="text-2xl font-bold mb-4 heading-font">{sport.name}</h4>
                                <p className="text-white/30 font-light text-sm leading-relaxed">{sport.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-premium-gold opacity-5 rounded-full blur-[10rem] -mr-40 -mt-40"></div>
            </section>

            {/* Safety */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-light-ivory p-12 md:p-24 rounded-[5rem] border border-warm-gray flex flex-col lg:flex-row gap-16 items-center scroll-fade-in">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-navy-blue mb-8 heading-font">The Safety Net</h2>
                            <p className="text-xl text-charcoal/60 font-light leading-relaxed mb-10">
                                Campus-wide 300+ CCTV surveillance networked with a centralized AI monitoring hub for real-time hazard detection.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { t: "Biometric Access Control", i: "fa-fingerprint" },
                                    { t: "GPS-Tracked Transport", i: "fa-bus-alt" },
                                    { t: "24/7 Professional Medical Wing", i: "fa-heartbeat" }
                                ].map((safe, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="w-10 h-10 rounded-full bg-deep-teal/10 flex items-center justify-center text-deep-teal group-hover:bg-deep-teal group-hover:text-white transition-all">
                                            <i className={`fas ${safe.i} text-xs`}></i>
                                        </div>
                                        <span className="text-sm font-bold text-navy-blue">{safe.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1541178735422-449e63cfd61a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Medical"
                                width={600}
                                height={400}
                                className="rounded-[4rem] shadow-premium-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
