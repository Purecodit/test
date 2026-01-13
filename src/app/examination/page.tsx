"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ExaminationPage() {
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

            {/* Exam Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Examination Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-deep-teal/20 text-deep-teal px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-microscope mr-2"></i>Assessment Framework
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            Precision <br /><span className="text-premium-gold italic">Evaluation</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed font-light">
                            Moving beyond testing to true measurement of cognitive growth and holistic competency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 scroll-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 heading-font">The Evaluation Lifecycle</h2>
                        <p className="text-charcoal/40 font-light">A transparent, data-driven cycle of assessment and refinement.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 scroll-fade-in">
                        {[
                            { step: "01", t: "Blueprint", d: "Conceptualizing evaluation vectors for specific age groups.", icon: "fa-project-diagram" },
                            { step: "02", t: "Proctoring", d: "High-integrity examination conduct with digital monitoring.", icon: "fa-eye" },
                            { step: "03", t: "Analysis", d: "Standardized marking using a double-blind expert review system.", icon: "fa-chart-bar" },
                            { step: "04", t: "Feedback", d: "Granular PTM reports focusing on specific cognitive gaps.", icon: "fa-bullseye" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-warm-gray shadow-premium hover:shadow-premium-lg transition-all text-center group">
                                <div className="text-xs font-black text-premium-gold mb-6 tracking-widest">{item.step}</div>
                                <div className="w-16 h-16 bg-light-ivory rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-navy-blue transition-colors">
                                    <i className={`fas ${item.icon} text-2xl text-deep-teal group-hover:text-white`}></i>
                                </div>
                                <h4 className="text-xl font-bold text-navy-blue mb-4">{item.t}</h4>
                                <p className="text-sm text-charcoal/50 leading-relaxed font-light">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calendar Table */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-white rounded-[4rem] overflow-hidden shadow-premium-lg scroll-fade-in">
                        <div className="bg-navy-blue p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h2 className="text-3xl font-bold heading-font">Academic Calendar 2024-25</h2>
                                <p className="text-white/40 font-light mt-2">Synchronized with national CBSE examination timelines.</p>
                            </div>
                            <button className="bg-premium-gold text-navy-blue px-8 py-4 rounded-xl font-bold shadow-premium hover:scale-105 transition-transform flex items-center gap-3">
                                <i className="fas fa-file-pdf"></i> Download PDF
                            </button>
                        </div>
                        <div className="overflow-x-auto p-8">
                            <table className="w-full text-left">
                                <thead className="border-b border-warm-gray">
                                    <tr>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-charcoal/30">Assessment Phase</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-charcoal/30">Timeline</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-charcoal/30">Focus Group</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-charcoal/30">Weight</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-warm-gray">
                                    {[
                                        { n: "Periodic Test I", t: "July 2024", g: "Classes 1-12", w: "10%" },
                                        { n: "Half-Yearly Exams", t: "September 2024", g: "Classes 1-12", w: "30%" },
                                        { n: "Periodic Test II", t: "December 2024", g: "Classes 1-12", w: "10%" },
                                        { n: "Pre-Boards", t: "January 2025", g: "Classes 10 & 12", w: "Practice" },
                                        { n: "Annual Exams", t: "March 2025", g: "Classes 1-9 & 11", w: "50%" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-light-ivory transition-colors">
                                            <td className="p-6">
                                                <div className="font-bold text-navy-blue">{row.n}</div>
                                                <div className="text-[10px] uppercase text-deep-teal font-black mt-1">Formative Loop</div>
                                            </td>
                                            <td className="p-6 text-charcoal/60 font-light">{row.t}</td>
                                            <td className="p-6">
                                                <span className="bg-warm-gray/50 px-3 py-1 rounded-full text-[10px] font-bold text-navy-blue">{row.g}</span>
                                            </td>
                                            <td className="p-6 font-black text-navy-blue">{row.w}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="scroll-fade-in">
                            <h2 className="text-4xl font-bold text-navy-blue mb-10 heading-font leading-tight">Academic <br /><span className="text-deep-teal">Integrity Protocols</span></h2>
                            <p className="text-charcoal/60 font-light leading-relaxed mb-12">
                                We maintain zero tolerance for academic dishonesty. Our proctoring systems are designed strictly according to CBSE Bylaws (Section 12.1), ensuring a fair environment for every merit-driven student.
                            </p>
                            <div className="bg-navy-blue p-12 rounded-[4rem] text-white">
                                <h4 className="text-xl font-bold mb-8 heading-font">Board Readiness Program</h4>
                                <ul className="space-y-6">
                                    {[
                                        "OMR Sheet Simulation for Competitive Prep",
                                        "Bi-weekly Speed & Accuracy Drills",
                                        "Psychological Resilience Workshops",
                                        "Subject-Matter Expert Review Sessions"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-center text-sm font-light text-white/60">
                                            <div className="w-1.5 h-1.5 rounded-full bg-premium-gold"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="scroll-fade-in relative">
                            <div className="sticky top-32">
                                <div className="bg-light-ivory rounded-[5rem] overflow-hidden border border-warm-gray p-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1434039319360-85917487f3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Integrity"
                                        width={800}
                                        height={1000}
                                        className="rounded-[4rem] object-cover"
                                    />
                                    <div className="absolute top-12 right-12 w-24 h-24 bg-premium-gold rounded-full flex items-center justify-center shadow-premium rotate-12">
                                        <i className="fas fa-shield-alt text-3xl text-navy-blue"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-deep-teal/5 rounded-full blur-[10rem]"></div>
            </section>

            <Footer />
        </main>
    );
}
