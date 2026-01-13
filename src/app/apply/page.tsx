"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ApplyPage() {
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSubmitted) {
        return (
            <main className="bg-light-ivory text-charcoal min-h-screen">
                <Navigation />
                <section className="py-40 flex items-center justify-center container mx-auto px-6">
                    <div className="max-w-2xl bg-white p-16 rounded-[4rem] shadow-premium-lg border border-warm-gray text-center scroll-fade-in visible">
                        <div className="w-24 h-24 bg-deep-teal rounded-full flex items-center justify-center mx-auto mb-10 shadow-premium animate-bounce">
                            <i className="fas fa-check text-white text-3xl"></i>
                        </div>
                        <h1 className="text-4xl font-bold text-navy-blue mb-6 heading-font">Application Received</h1>
                        <p className="text-xl text-charcoal/60 mb-12 font-light leading-relaxed">
                            Thank you for choosing Guru Nanak School. Our admissions board will review your application and contact you via email within 3-5 business days.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/" className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl font-bold shadow-premium hover-lift">
                                Return Home
                            </Link>
                            <Link href="/tour" className="gradient-teal text-white px-10 py-5 rounded-2xl font-bold shadow-premium hover-lift">
                                Book a Tour
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        );
    }

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* Apply Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Admission Form Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="max-w-4xl mx-auto scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-user-plus mr-2"></i>New Enrollment
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            Admission Portal
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                            Take the first step towards a future of excellence. Complete your application for the 2025 academic session.
                        </p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                        {/* Form Area */}
                        <div className="lg:col-span-2 scroll-fade-in">
                            <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-premium-lg border border-warm-gray">
                                <h2 className="text-3xl font-bold text-navy-blue mb-12 heading-font">Student Persona</h2>
                                <form onSubmit={handleSubmit} className="space-y-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Student Full Name</label>
                                            <input required type="text" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Grade Applying For</label>
                                            <select required className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 appearance-none focus:ring-2 focus:ring-premium-gold outline-none transition-all text-charcoal/60">
                                                <option value="">Select Level</option>
                                                <option>Pre-Nursery</option>
                                                <option>Nursery / KG</option>
                                                <option>Primary (1-5)</option>
                                                <option>Middle (6-8)</option>
                                                <option>Secondary (9-12)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-bold text-navy-blue mb-12 pt-12 heading-font">Guardianship</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4 text-deep-teal">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Father's Name</label>
                                            <input required type="text" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Mother's Name</label>
                                            <input required type="text" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Primary Email</label>
                                            <input required type="email" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Mobile Number</label>
                                            <input required type="tel" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-8">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Residential Address</label>
                                        <textarea required rows={4} className="w-full bg-light-ivory border-none rounded-[2rem] py-6 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all resize-none"></textarea>
                                    </div>

                                    <div className="pt-12">
                                        <button type="submit" className="w-full gradient-gold text-navy-blue py-6 rounded-3xl font-black text-lg uppercase tracking-widest shadow-premium hover:shadow-gold-glow hover-lift transition-all">
                                            Submit Formal Application
                                        </button>
                                        <p className="text-center text-xs text-charcoal/40 mt-6 mt-6 leading-relaxed">
                                            By submitting, you agree to our admission policies and data privacy terms. A processing fee may be required during the physical interaction phase.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-12">
                            <div className="bg-navy-blue text-white p-12 rounded-[3.5rem] shadow-premium-lg scroll-fade-in relative overflow-hidden">
                                <h3 className="text-2xl font-bold mb-8 heading-font text-premium-gold">Next Steps</h3>
                                <div className="space-y-8 relative z-10">
                                    {[
                                        { s: "01", t: "Review", d: "Board reviews academic history." },
                                        { s: "02", t: "Interview", d: "Student-parent interaction." },
                                        { s: "03", t: "Verification", d: "Document authentications." },
                                        { s: "04", t: "Enrollment", d: "Formal seat allotment." }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="text-3xl font-black text-white/10 heading-font">{step.s}</div>
                                            <div>
                                                <h4 className="font-bold text-sm uppercase tracking-widest mb-1">{step.t}</h4>
                                                <p className="text-xs text-white/50">{step.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                            </div>

                            <div className="bg-light-ivory p-10 rounded-[3.5rem] border border-warm-gray scroll-fade-in">
                                <h4 className="text-lg font-bold text-navy-blue mb-6">Required Papers</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Original Birth Certificate",
                                        "Report Card (Last 2 Years)",
                                        "Transfer Certificate (TC)",
                                        "Valid ID of Parents"
                                    ].map((doc, i) => (
                                        <li key={i} className="flex items-center text-xs text-charcoal/60 font-medium">
                                            <div className="w-6 h-6 rounded-lg bg-deep-teal/10 flex items-center justify-center mr-4">
                                                <i className="fas fa-check text-[10px] text-deep-teal"></i>
                                            </div>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
