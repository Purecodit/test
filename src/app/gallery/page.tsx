"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState('all');

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

    const categories = [
        { id: 'all', name: 'All', icon: 'fa-border-all' },
        { id: 'campus', name: 'Campus', icon: 'fa-school' },
        { id: 'academic', name: 'Academic', icon: 'fa-book' },
        { id: 'sports', name: 'Sports', icon: 'fa-running' },
        { id: 'events', name: 'Events', icon: 'fa-calendar-star' }
    ];

    const galleryItems = [
        { category: 'campus', title: 'Main Wing', desc: 'Architecture of excellence', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'academic', title: 'Chemistry Lab', desc: 'Practical discovery', image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'sports', title: 'Athletics Day', desc: 'Power and speed', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'events', title: 'Annual Fest', desc: 'Cultural vibrance', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'campus', title: 'The Library', desc: 'Sanctuary of silence', image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'academic', title: 'Robotics Lab', desc: 'Building the future', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'sports', title: 'Basketball Court', desc: 'Focus and team spirit', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { category: 'events', title: 'Graduation', desc: 'New beginnings', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
    ];

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* Hero Gallery Section */}
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Gallery Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <div className="max-w-4xl mx-auto scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-camera-retro mr-2"></i>Visual Narrative
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 heading-font leading-tight">
                            Memories in Motion
                        </h1>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A curated look into the life, culture, and achievements of our students across every corner of the campus.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Filters */}
            <section className="py-12 sticky top-20 z-40 bg-white shadow-premium">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all flex items-center ${activeFilter === cat.id
                                        ? 'gradient-gold text-navy-blue shadow-gold-glow'
                                        : 'bg-warm-gray text-charcoal/60 hover:bg-warm-gray/80'
                                    }`}
                            >
                                <i className={`fas ${cat.icon} mr-3`}></i>
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredItems.map((item, idx) => (
                            <div key={idx} className="group scroll-fade-in relative aspect-square rounded-[2rem] overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/90 via-navy-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <span className="text-premium-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</span>
                                    <h3 className="text-white text-2xl font-bold heading-font mb-2">{item.title}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform">{item.desc}</p>
                                </div>
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all">
                                    <i className="fas fa-expand text-white"></i>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="py-40 text-center">
                            <i className="fas fa-images text-6xl text-warm-gray mb-6"></i>
                            <p className="text-xl text-charcoal/40">No memories found in this category yet.</p>
                        </div>
                    )}

                    <div className="mt-20 text-center scroll-fade-in">
                        <button className="gradient-teal text-white px-12 py-5 rounded-2xl font-bold text-lg hover-lift shadow-premium">
                            Explore Archive (2020-2024)
                        </button>
                    </div>
                </div>
            </section>

            {/* Video Highlights */}
            <section className="py-24 bg-navy-blue relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 scroll-fade-in text-white">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 heading-font text-premium-gold">Video Chronicles</h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Beyond still frames, experience the dynamic spirit of Guru Nanak School through our cinematic event highlights and student life features.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Virtual Tour 2024", time: "4:20", views: "12k" },
                                    { title: "Annual Day Highlights", time: "8:45", views: "25k" },
                                    { title: "Sports Week Kinetic", time: "3:15", views: "8k" }
                                ].map((vid, i) => (
                                    <div key={i} className="flex items-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition group cursor-pointer">
                                        <div className="w-14 h-14 rounded-2xl bg-premium-gold flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                                            <i className="fas fa-play text-navy-blue"></i>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-lg">{vid.title}</h4>
                                            <span className="text-xs text-white/40 uppercase tracking-widest">{vid.time} • {vid.views} Views</span>
                                        </div>
                                        <i className="fas fa-chevron-right text-white/20"></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 scroll-fade-in">
                            <div className="relative group cursor-pointer">
                                <div className="absolute inset-0 bg-premium-gold/20 rounded-[3rem] blur-2xl group-hover:bg-premium-gold/30 transition-colors"></div>
                                <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 group-hover:scale-[1.02] transition-transform">
                                    <Image
                                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Featured Video"
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-premium-gold flex items-center justify-center shadow-gold-glow group-hover:scale-125 transition-transform">
                                            <i className="fas fa-play text-2xl text-navy-blue ml-1"></i>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8">
                                        <div className="bg-premium-gold text-navy-blue px-4 py-1 rounded-full text-xs font-black uppercase mb-2">Featured</div>
                                        <h3 className="text-white text-2xl font-bold">Life at Guru Nanak School</h3>
                                    </div>
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
