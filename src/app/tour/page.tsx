"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TourPage() {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

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

    const timeSlots = [
        "09:30 AM", "10:30 AM", "11:30 AM", "01:30 PM", "02:30 PM", "03:30 PM"
    ];

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* Tour Hero Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Campus Garden"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="max-w-4xl mx-auto scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-map-marked-alt mr-2"></i>Personalized Experience
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            Book A Campus Visit
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Experience the energy, culture, and innovation of Guru Nanak School firsthand with a guided personal tour.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tour Value Props */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Meet the Leadership", desc: "Interact directly with our Principal and Academic Heads to understand our vision.", icon: "fa-handshake" },
                            { title: "Explore Facilities", desc: "Visit our labs, sports arenas, and creative studios in real-time operation.", icon: "fa-school" },
                            { title: "Live Classes", desc: "Observe our unique teaching methodologies and student engagement during active sessions.", icon: "fa-chalkboard-teacher" }
                        ].map((prop, i) => (
                            <div key={i} className="scroll-fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="bg-white p-12 rounded-[3.5rem] shadow-premium hover:shadow-premium-lg transition-all border border-warm-gray text-center h-full group">
                                    <div className="w-20 h-20 rounded-3xl bg-light-ivory flex items-center justify-center mx-auto mb-10 group-hover:bg-premium-gold transition-colors duration-500">
                                        <i className={`fas ${prop.icon} text-3xl text-deep-teal group-hover:text-white transition-colors`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-blue mb-6">{prop.title}</h3>
                                    <p className="text-charcoal/60 leading-relaxed font-light">{prop.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Integration Section */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                        {/* Booking Form */}
                        <div className="lg:w-2/3 scroll-fade-in">
                            <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-premium-lg border border-warm-gray">
                                <h2 className="text-4xl font-bold text-navy-blue mb-10 heading-font">Select Your Slot</h2>
                                <form className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Parent Name</label>
                                            <input type="text" placeholder="Full Name" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Phone Number</label>
                                            <input type="tel" placeholder="+91 0000 000000" className="w-full bg-light-ivory border-none rounded-2xl py-5 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all" />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Preferred Time</label>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    type="button"
                                                    onClick={() => setSelectedTime(slot)}
                                                    className={`py-4 px-6 rounded-2xl font-bold text-sm transition-all border ${selectedTime === slot
                                                            ? 'gradient-teal text-white border-transparent shadow-premium'
                                                            : 'bg-white border-warm-gray text-charcoal/60 hover:border-deep-teal'
                                                        }`}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/40 ml-2">Special Request</label>
                                        <textarea rows={4} placeholder="Anything specific you'd like to see?" className="w-full bg-light-ivory border-none rounded-[2rem] py-6 px-8 focus:ring-2 focus:ring-premium-gold outline-none transition-all resize-none"></textarea>
                                    </div>

                                    <button type="submit" className="w-full gradient-gold text-navy-blue py-6 rounded-3xl font-black text-lg uppercase tracking-widest shadow-premium hover:shadow-gold-glow hover-lift transition-all">
                                        Confirm Tour Request
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="lg:w-1/3 space-y-12">
                            <div className="scroll-fade-in">
                                <h3 className="text-2xl font-bold text-navy-blue mb-8 heading-font">Tour Protocol</h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "Duration", val: "90 Minutes", icon: "fa-clock" },
                                        { title: "Participants", val: "Max 4 per family", icon: "fa-users" },
                                        { title: "Availability", val: "Mon - Sat", icon: "fa-calendar-check" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center p-6 bg-white rounded-3xl border border-warm-gray">
                                            <div className="w-12 h-12 rounded-2xl bg-light-ivory flex items-center justify-center mr-6 text-deep-teal">
                                                <i className={`fas ${item.icon}`}></i>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase text-charcoal/40 mb-1">{item.title}</div>
                                                <div className="font-bold text-navy-blue">{item.val}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-navy-blue text-white p-10 rounded-[3rem] shadow-premium-lg scroll-fade-in relative overflow-hidden">
                                <h4 className="text-xl font-bold mb-4 relative z-10 text-premium-gold">Express Visit?</h4>
                                <p className="text-sm text-white/60 mb-8 relative z-10 leading-relaxed">
                                    Need to visit urgently? Call our admissions office directly for same-day priority tours.
                                </p>
                                <a href="tel:+919350202103" className="block text-2xl font-bold text-white relative z-10 hover:text-premium-gold transition-colors">
                                    +91 93502 02103
                                </a>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Virtual 360 CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden shadow-premium-lg scroll-fade-in">
                        <Image
                            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                            alt="360 Tour Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-navy-blue/60 flex flex-col items-center justify-center text-center p-12">
                            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/30 animate-pulse">
                                <i className="fas fa-vr-cardboard text-4xl text-white"></i>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 heading-font">360° Virtual Experience</h2>
                            <p className="text-xl text-white/80 max-w-2xl mb-10 font-light">
                                Explore our corridors, labs, and fields from anywhere in the world with our high-definition interactive tour.
                            </p>
                            <button className="gradient-gold text-navy-blue px-12 py-5 rounded-2xl font-bold text-lg hover-lift">
                                Launch Virtual Tour
                            </button>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-deep-teal/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
            </section>

            <Footer />
        </main>
    );
}
