"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AcademicsPage() {
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
        <main className="bg-light-ivory text-charcoal min-h-screen font-inter">
            <Navigation />

            {/* Academics Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Academic Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="max-w-5xl mx-auto scroll-fade-in">
                        <div className="inline-block mb-8">
                            <span className="bg-premium-gold text-navy-blue px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-premium">
                                Modern Teaching
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 heading-font leading-none">
                            Building <br /><span className="text-premium-gold italic">Bright Minds</span>
                        </h1>
                        <p className="text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                            Combining strong CBSE standards with modern, practical skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Methodology */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="scroll-fade-in">
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-10 heading-font">Our Teaching Method</h2>
                            <p className="text-xl text-charcoal/60 mb-12 font-light leading-relaxed">
                                We focus on understanding, not just memorizing. Our methods help students learn deeply and remember longer.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { t: "Hands-On Labs", d: "Physics, Chemistry, and Biology learning through real experiments and simulations.", icon: "fa-vials" },
                                    { t: "Discussion Classes", d: "Encouraging questions and debates for Humanities and Social Sciences.", icon: "fa-comments" },
                                    { t: "Computer Learning", d: "Personalized help modules powered by smart learning systems.", icon: "fa-microchip" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 items-start group">
                                        <div className="w-16 h-16 rounded-[2rem] bg-light-ivory flex items-center justify-center flex-shrink-0 group-hover:bg-premium-gold transition-colors duration-500">
                                            <i className={`fas ${item.icon} text-2xl text-deep-teal group-hover:text-navy-blue`}></i>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-navy-blue mb-2">{item.t}</h4>
                                            <p className="text-charcoal/50 text-sm leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="scroll-fade-in relative">
                            <div className="absolute -top-16 -right-16 w-64 h-64 bg-deep-teal/5 rounded-full blur-[100px]"></div>
                            <div className="relative aspect-square bg-white rounded-[5rem] shadow-premium-lg flex items-center justify-center p-12 border border-warm-gray">
                                <div className="text-center">
                                    <div className="text-[10rem] font-black text-navy-blue/5 mb-[-2rem] select-none">STEM</div>
                                    <h3 className="text-3xl font-bold text-navy-blue mb-6">Complete Curriculum</h3>
                                    <p className="text-charcoal/40 text-sm font-medium uppercase tracking-[0.2em] mb-10">Grade 1 - 12 Integrated Path</p>
                                    <div className="flex justify-center gap-4">
                                        <div className="w-12 h-1 bg-premium-gold rounded-full"></div>
                                        <div className="w-4 h-1 bg-deep-teal rounded-full"></div>
                                        <div className="w-4 h-1 bg-navy-blue rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Departments */}
            <section className="py-24 bg-navy-blue relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 scroll-fade-in">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 heading-font">Our Main Subjects</h2>
                            <p className="text-white/40 font-light">Expert teaching across three major subject areas.</p>
                        </div>
                        <button className="text-premium-gold font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 group">
                            Academic Calendar 2024 <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Science & Innovation", stats: "14 Advanced Labs", tags: ["Physics", "Bio-Tech", "AI"], color: "bg-deep-teal" },
                            { name: "Commerce & Finance", stats: "Incubation Center", tags: ["Economics", "Accounts", "Startup"], color: "bg-premium-gold" },
                            { name: "Liberal Arts", stats: "Global MUN Hub", tags: ["Psychology", "Pol-Sci", "Sociology"], color: "bg-soft-sage" }
                        ].map((dept, i) => (
                            <div key={i} className="scroll-fade-in group">
                                <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 h-full hover:bg-white/10 transition-all duration-500">
                                    <div className={`w-14 h-1.5 ${dept.color} rounded-full mb-10`}></div>
                                    <h3 className="text-3xl font-bold text-white mb-4 heading-font">{dept.name}</h3>
                                    <div className="text-premium-gold text-xs font-black uppercase tracking-widest mb-10">{dept.stats}</div>
                                    <div className="flex flex-wrap gap-2">
                                        {dept.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-white/10 text-white/60 px-4 py-2 rounded-full text-[0.65rem] font-bold uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results & Faculty */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 scroll-fade-in">
                        <div className="space-y-12">
                            <h2 className="text-4xl font-bold text-navy-blue heading-font leading-tight">Elite Faculty <br />Mentorship</h2>
                            <p className="text-lg text-charcoal/60 font-light leading-relaxed">
                                Our teachers are more than instructors; they are learning guides. 60% of our staff has master's or doctoral degrees from top universities.
                            </p>
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <div className="text-4xl font-black text-deep-teal mb-2">15:1</div>
                                    <div className="text-xs font-bold text-charcoal/30 uppercase tracking-widest">Student-Teacher Ratio</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-deep-teal mb-2">250+</div>
                                    <div className="text-xs font-bold text-charcoal/30 uppercase tracking-widest">Faculty Workshops / Yr</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light-ivory rounded-[5rem] overflow-hidden relative group">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Faculty Representative"
                                width={800}
                                height={600}
                                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-16 left-16 right-16">
                                <div className="text-white text-3xl font-bold heading-font mb-4 italic">"Real teaching means sparking curiosity in every student."</div>
                                <div className="text-premium-gold font-black text-xs uppercase tracking-widest">— Academic Council</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
