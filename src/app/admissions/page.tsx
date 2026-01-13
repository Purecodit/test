"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AdmissionsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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

            {/* Admissions Hero */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="/img/hero2.webp"
                        alt="Admissions Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-widest border border-premium-gold/30">
                                <i className="fas fa-sparkles mr-2"></i>New Session 2024-25
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 heading-font leading-tight">
                            The Gateway to <br /><span className="text-premium-gold italic">Potential</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl leading-relaxed font-light">
                            Welcoming bright students and supportive parents to join our tradition of great education and strong values.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl text-lg font-bold shadow-premium hover:shadow-gold-glow hover-lift">
                                Apply for Admission
                            </button>
                            <button className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition">
                                Fee Structure
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 scroll-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 heading-font">Admission Steps</h2>
                        <p className="text-charcoal/40 font-light">Five simple steps to join Guru Nanak School.</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { step: "01", t: "Registration", d: "Start the process online or at our school office. Submit your documents here.", icon: "fa-door-open" },
                            { step: "02", t: "School Tour", d: "Visit our school to see our teaching methods, facilities, and culture.", icon: "fa-compass" },
                            { step: "03", t: "Assessment", d: "Simple test to find the right grade level for your child.", icon: "fa-puzzle-piece" },
                            { step: "04", t: "Meeting", d: "Discussion between parents, students, and our admissions team.", icon: "fa-comments" },
                            { step: "05", t: "Welcome", d: "Official joining with welcome kit and school system setup.", icon: "fa-user-check" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white group p-10 rounded-[3rem] border border-warm-gray shadow-premium hover:shadow-premium-lg transition-all flex flex-col md:flex-row gap-10 items-center scroll-fade-in">
                                <div className="text-6xl font-black text-light-ivory group-hover:text-premium-gold/20 transition-colors heading-font">{item.step}</div>
                                <div className="w-16 h-16 bg-navy-blue/5 rounded-2xl flex items-center justify-center text-navy-blue">
                                    <i className={`fas ${item.icon} text-2xl`}></i>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold text-navy-blue mb-2">{item.t}</h4>
                                    <p className="text-charcoal/50 font-light text-sm leading-relaxed">{item.d}</p>
                                </div>
                                <button className="w-12 h-12 rounded-full border border-warm-gray flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <i className="fas fa-chevron-right text-xs text-premium-gold"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Dates Table */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-navy-blue rounded-[4rem] overflow-hidden shadow-premium-lg scroll-fade-in">
                        <div className="p-16">
                            <h2 className="text-3xl font-bold text-white mb-12 heading-font">Important Dates 2024-25</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { date: "Jan 15", event: "Applications Open", i: "fa-calendar-check" },
                                    { date: "Mar 31", event: "Registration Close", i: "fa-times-circle" },
                                    { date: "Apr 15", event: "Scholarship Test", i: "fa-medal" },
                                    { date: "May 01", event: "Session Begins", i: "fa-graduation-cap" }
                                ].map((milestone, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center hover:bg-white/10 transition-colors">
                                        <div className="text-premium-gold text-2xl mb-6"><i className={`fas ${milestone.i}`}></i></div>
                                        <div className="text-3xl font-black text-white mb-2 heading-font">{milestone.date}</div>
                                        <div className="text-[10px] uppercase font-black tracking-widest text-white/30">{milestone.event}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-24 scroll-fade-in">
                        <h2 className="text-4xl font-bold text-navy-blue mb-6 heading-font">Common Questions</h2>
                        <p className="text-charcoal/40 font-light">Answers to frequently asked questions about admissions.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "What is the age criteria for Nursery?", a: "The child must be 3+ years as of March 31, 2024. Original birth certificate is mandatory for verification." },
                            { q: "Is there a scholarship program?", a: "Yes, we offer up to 100% fee waiver for students scoring 95%+ in entrance tests and national-level sports achievers." },
                            { q: "What documents are required?", a: "Birth Certificate, Aadhaar Card, Transfer Certificate, 4 Passport Photos, and Previous Grade Marks Card." },
                            { q: "Do you have boarding facilities?", a: "Yes, we have modern hostel facilities for Grade 4 and above students." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-light-ivory rounded-3xl border border-warm-gray overflow-hidden scroll-fade-in">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-8 text-left flex justify-between items-center group"
                                >
                                    <span className="text-lg font-bold text-navy-blue">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full border border-navy-blue/10 flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-180 bg-navy-blue text-white' : ''}`}>
                                        <i className="fas fa-chevron-down text-[10px]"></i>
                                    </div>
                                </button>
                                {openFaq === i && (
                                    <div className="px-8 pb-8 text-charcoal/60 font-light leading-relaxed animate-fade-in">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
