"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* Contact Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Contact Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="max-w-4xl mx-auto scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-headset mr-2"></i>Global Hub
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            Connect With Us
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                            Whether you're a prospective parent or a curious visitor, we're here to provide the insights you need.
                        </p>
                    </div>
                </div>
            </section>

            {/* Direct Channels */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { channel: "Corporate Voice", val: "+91 93502 02103", icon: "fa-phone-volume", color: "bg-premium-gold" },
                            { channel: "Digital Registry", val: "info@gurunanakschool.edu.in", icon: "fa-envelope-open-text", color: "bg-deep-teal" },
                            { channel: "Physical Campus", val: "Pharal, Kaithal, Haryana", icon: "fa-map-location-dot", color: "bg-navy-blue" }
                        ].map((item, i) => (
                            <div key={i} className="scroll-fade-in group">
                                <div className="bg-white p-12 rounded-[3.5rem] shadow-premium hover:shadow-premium-lg transition-all border border-warm-gray text-center h-full">
                                    <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform`}>
                                        <i className={`fas ${item.icon} text-3xl text-white`}></i>
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 mb-4">{item.channel}</div>
                                    <div className="text-xl font-bold text-navy-blue leading-relaxed">{item.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Message Forge */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                        {/* Form */}
                        <div className="lg:w-3/5 scroll-fade-in">
                            <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-premium-lg border border-warm-gray relative overflow-hidden">
                                {isSubmitted ? (
                                    <div className="text-center py-20">
                                        <div className="w-20 h-20 bg-deep-teal rounded-full flex items-center justify-center mx-auto mb-8">
                                            <i className="fas fa-paper-plane text-white text-2xl"></i>
                                        </div>
                                        <h3 className="text-3xl font-bold text-navy-blue mb-4 heading-font">Message Transmitted</h3>
                                        <p className="text-charcoal/60">We'll get back to you within 24 standard business hours.</p>
                                        <button onClick={() => setIsSubmitted(false)} className="mt-10 text-deep-teal font-bold hover:underline">Send another message</button>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-4xl font-bold text-navy-blue mb-10 heading-font">Inquiry Portal</h2>
                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <input required type="text" placeholder="Identity" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                                <input required type="email" placeholder="Email Channel" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                            </div>
                                            <select className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 appearance-none focus:ring-2 focus:ring-premium-gold outline-none transition-all text-charcoal/60">
                                                <option>Department: Admissions</option>
                                                <option>Department: Administration</option>
                                                <option>Department: Career Hub</option>
                                                <option>Department: Media Relations</option>
                                            </select>
                                            <textarea required rows={5} placeholder="Compose your query..." className="w-full bg-light-ivory border-none rounded-[2rem] py-6 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all resize-none"></textarea>
                                            <button type="submit" className="w-full gradient-gold text-navy-blue py-6 rounded-3xl font-black text-lg uppercase tracking-widest shadow-premium hover:shadow-gold-glow hover-lift transition-all">
                                                Finalize Emission
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Schedule & Map Sidebar */}
                        <div className="lg:w-2/5 space-y-12">
                            <div className="scroll-fade-in">
                                <h3 className="text-2xl font-bold text-navy-blue mb-8 heading-font">Standard Operating Hours</h3>
                                <div className="bg-white p-10 rounded-[3rem] border border-warm-gray shadow-premium">
                                    <div className="space-y-6">
                                        {[
                                            { d: "Mon - Fri", t: "08:00 AM - 02:30 PM" },
                                            { d: "Saturday", t: "08:00 AM - 12:30 PM" },
                                            { d: "Sunday", t: "Closed (Rest Loop)" }
                                        ].map((slot, i) => (
                                            <div key={i} className="flex justify-between items-center pb-6 border-b border-warm-gray last:border-0 last:pb-0">
                                                <span className="text-charcoal/60 font-medium">{slot.d}</span>
                                                <span className="text-navy-blue font-black text-sm">{slot.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="scroll-fade-in relative group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 to-transparent z-10 rounded-[4rem]"></div>
                                <Image
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Map Placeholder"
                                    width={800}
                                    height={400}
                                    className="rounded-[4rem] group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-10">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30">
                                        <i className="fas fa-location-arrow text-white"></i>
                                    </div>
                                    <h4 className="text-white text-2xl font-bold mb-2">Locate the Campus</h4>
                                    <p className="text-white/60 text-sm font-light">Interactive Navigation Interface</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
