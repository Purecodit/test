"use client";

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            <section className="min-h-[80vh] flex items-center relative overflow-hidden">
                {/* Background 404 text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                    <span className="text-[40vw] font-black heading-font">404</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-12">
                            <div className="w-32 h-32 bg-premium-gold/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-premium-gold/20 animate-bounce">
                                <i className="fas fa-search-location text-4xl text-premium-gold"></i>
                            </div>
                            <span className="bg-navy-blue text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-premium">
                                Perception Error
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-8xl font-bold text-navy-blue mb-8 heading-font leading-tight">
                            Page <br /><span className="text-deep-teal italic">Went AWOL</span>
                        </h1>

                        <p className="text-xl text-charcoal/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                            The coordinates you've entered lead to a void. It's possible this page is currently in a deep-research sabbatical.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="/" className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl text-lg font-bold shadow-premium hover:shadow-gold-glow hover-lift">
                                Back to Base
                            </Link>
                            <Link href="/contact" className="bg-navy-blue text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-premium hover:shadow-premium-lg hover-lift">
                                Report Void
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-bold text-navy-blue heading-font">Try These Portals Instead</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: "Admissions", d: "Start the journey.", link: "/admissions", i: "fa-user-plus" },
                            { name: "Academics", d: "Learn the core.", link: "/academics", i: "fa-book-reader" },
                            { name: "Explore", d: "View the campus.", link: "/tour", i: "fa-vr-cardboard" }
                        ].map((portal, i) => (
                            <Link key={i} href={portal.link} className="bg-white p-10 rounded-[3rem] border border-warm-gray shadow-premium hover:shadow-premium-lg transition-all group">
                                <div className="text-deep-teal text-xl mb-6 group-hover:scale-110 transition-transform"><i className={`fas ${portal.i}`}></i></div>
                                <h4 className="text-lg font-bold text-navy-blue mb-2">{portal.name}</h4>
                                <p className="text-xs text-charcoal/40 font-light">{portal.d}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
