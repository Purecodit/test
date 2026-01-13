"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CurriculumPage() {
    const [activeTab, setActiveTab] = useState('foundation');

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

    const tabData = {
        foundation: {
            title: "Foundation Stage",
            level: "Nursery to Grade 5",
            desc: "Building strong basics through fun learning and language skills.",
            subjects: ["English Literacy", "Hindi Expression", "Conceptual Math", "Enviro-Science", "Creative Arts"],
            color: "bg-premium-gold"
        },
        middle: {
            title: "Middle School",
            level: "Grade 6 to 8",
            desc: "Moving to thinking and analysis with focus on Science, Technology, Engineering, and Math.",
            subjects: ["Advanced Science", "Algebraic Thinking", "Global History", "Digital Literacy", "Foreign Languages"],
            color: "bg-deep-teal"
        },
        secondary: {
            title: "Secondary Stage",
            level: "Grade 9 to 10",
            desc: "Serious preparation for board exams and early career planning.",
            subjects: ["Standardized Sciences", "Social Dynamics", "High-Level Math", "Vocational Skills", "Portfolio Building"],
            color: "bg-navy-blue"
        },
        senior: {
            title: "Senior Secondary",
            level: "Grade 11 to 12",
            desc: "Special subject streams for college entrance and career preparation.",
            subjects: ["Medical/Non-Medical", "Commerce & Finance", "Humanities & Liberal Arts", "Psychology", "Advanced Tech"],
            color: "bg-charcoal"
        }
    };

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Curriculum Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-microscope mr-2"></i>Our Courses
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            Complete CBSE Learning
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl leading-relaxed font-light">
                            Our courses are more than just lessons; they're designed to prepare students for the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* philosophy */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1 scroll-fade-in">
                            <h2 className="text-4xl font-bold text-navy-blue mb-8 heading-font">Our Learning Plan</h2>
                            <p className="text-lg text-charcoal/60 leading-relaxed font-light">
                                We've updated traditional CBSE courses to include modern skills: Computer Thinking, Emotional Intelligence, and Sustainability.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 scroll-fade-in">
                            {[
                                { t: "National Standards", d: "100% following NEP 2020 and CBSE guidelines.", icon: "fa-passport" },
                                { t: "Tech Skills", d: "Coding and robotics from Grade 3 onwards.", icon: "fa-code-branch" },
                                { t: "Complete Growth", d: "Mental wellness activities in daily schedules.", icon: "fa-brain" },
                                { t: "Global Learning", d: "International examples in Social Sciences.", icon: "fa-globe-asia" }
                            ].map((feat, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-warm-gray shadow-premium hover:shadow-premium-lg transition-all">
                                    <div className="w-12 h-12 bg-light-ivory rounded-xl flex items-center justify-center mb-6">
                                        <i className={`fas ${feat.icon} text-deep-teal`}></i>
                                    </div>
                                    <h4 className="text-xl font-bold text-navy-blue mb-2">{feat.t}</h4>
                                    <p className="text-sm text-charcoal/50 leading-relaxed">{feat.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages Tabs */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 scroll-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 heading-font">Learning Stages</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-20 scroll-fade-in">
                        {Object.keys(tabData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === key ? 'bg-navy-blue text-white shadow-premium-lg scale-105' : 'bg-white text-navy-blue/40 hover:text-navy-blue hover:bg-white/80'}`}
                            >
                                {key} Stage
                            </button>
                        ))}
                    </div>

                    <div className="max-w-6xl mx-auto scroll-fade-in">
                        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-premium-lg flex flex-col lg:flex-row gap-16 relative overflow-hidden">
                            <div className="lg:w-1/2 relative z-10">
                                <div className={`inline-block text-[0.6rem] font-black uppercase tracking-[0.3em] mb-4 text-white px-4 py-2 rounded-full ${tabData[activeTab as keyof typeof tabData].color}`}>
                                    {tabData[activeTab as keyof typeof tabData].level}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-navy-blue mb-8 heading-font">{tabData[activeTab as keyof typeof tabData].title}</h3>
                                <p className="text-xl text-charcoal/60 leading-relaxed font-light mb-10">
                                    {tabData[activeTab as keyof typeof tabData].desc}
                                </p>
                                <button className="gradient-gold text-navy-blue px-8 py-4 rounded-xl font-bold shadow-premium hover:shadow-gold-glow hover-lift">
                                    Download Syllabus Archive
                                </button>
                            </div>
                            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                {tabData[activeTab as keyof typeof tabData].subjects.map((sub, idx) => (
                                    <div key={idx} className="bg-light-ivory p-6 rounded-2xl border border-warm-gray flex items-center group hover:bg-white transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-premium-gold mr-4 group-hover:scale-150 transition-transform"></div>
                                        <span className="text-sm font-bold text-navy-blue">{sub}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute top-0 right-0 opacity-5 -mr-20 -mt-20">
                                <i className="fas fa-graduation-cap text-[30rem] text-navy-blue"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assessment */}
            <section className="py-24 bg-navy-blue text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 heading-font">How We Measure Progress</h2>
                        <p className="text-white/40 font-light">Moving beyond simple Pass/Fail to measure multiple skills and abilities.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { val: "30%", t: "Group Projects", d: "Checking teamwork and group skills.", i: "fa-users" },
                            { val: "40%", t: "Problem Solving", d: "Testing ability to solve real-world problems.", i: "fa-puzzle-piece" },
                            { val: "30%", t: "Written Tests", d: "Standard tests for national benchmarks.", i: "fa-file-signature" }
                        ].map((metric, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-center">
                                <div className="text-5xl font-black text-premium-gold mb-6 heading-font">{metric.val}</div>
                                <h4 className="text-xl font-bold mb-4">{metric.t}</h4>
                                <p className="text-sm text-white/30 font-light leading-relaxed">{metric.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-premium-gold opacity-5 rounded-full blur-[10rem]"></div>
            </section>

            <Footer />
        </main>
    );
}
