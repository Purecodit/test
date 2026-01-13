"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
    useEffect(() => {
        const scrollElements = document.querySelectorAll('.scroll-fade-in');
        const elementInView = (el: Element, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };
        const displayScrollElement = (element: Element) => {
            element.classList.add('visible');
        };
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                }
            });
        };
        window.addEventListener('scroll', handleScrollAnimation);
        // Initial check
        handleScrollAnimation();
        return () => window.removeEventListener('scroll', handleScrollAnimation);
    }, []);

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 gradient-overlay z-10"></div>
                    <Image
                        src="/img/hero2.webp"
                        alt="Guru Nanak School Campus"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <div className="max-w-4xl scroll-fade-in">
                        <div className="inline-block mb-8">
                            <span className="bg-premium-gold/20 text-premium-gold px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider">
                                <i className="fas fa-award mr-2"></i>Ranked #1 in Pharal
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 heading-font leading-tight">
                            Excellence in Education <span className="text-premium-gold">Since 1998</span>
                        </h1>
                        <p className="text-xl text-white/90 mb-12 max-w-3xl leading-relaxed">
                            A top CBSE school in Pharal, Haryana helping students grow in studies, character, and life skills from Nursery to Class 12.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/tour" className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl text-lg font-bold shadow-premium hover:shadow-gold-glow hover-lift">
                                <i className="fas fa-calendar-check mr-3"></i>Schedule Campus Tour
                            </Link>
                            <Link href="/prospectus.pdf" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/30 transition">
                                <i className="fas fa-download mr-3"></i>Download Prospectus
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <div className="flex flex-col items-center">
                        <span className="text-sm mb-2">Explore More</span>
                        <i className="fas fa-chevron-down text-2xl"></i>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-navy-blue text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-premium-gold stat-number">25+</div>
                            <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-premium-gold stat-number">98.2%</div>
                            <div className="text-sm uppercase tracking-wider">Board Results 2023</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-premium-gold stat-number">15:1</div>
                            <div className="text-sm uppercase tracking-wider">Student-Teacher Ratio</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold mb-2 text-premium-gold stat-number">1500+</div>
                            <div className="text-sm uppercase tracking-wider">Satisfied Alumni</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Info Cards */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-premium hover-lift border border-warm-gray">
                            <div className="w-16 h-16 gradient-teal rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-user-graduate text-2xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-3">Nursery to 12th</h3>
                            <p className="text-charcoal/70">Full education from Nursery to Class 12 with Science, Commerce & Humanities options.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-premium hover-lift border border-warm-gray">
                            <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-certificate text-2xl text-navy-blue"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-3">CBSE Affiliation</h3>
                            <p className="text-charcoal/70">Officially recognized by CBSE, New Delhi (Affiliation No. 1234567).</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-premium hover-lift border border-warm-gray">
                            <div className="w-16 h-16 gradient-sage rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-globe text-2xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-3">Modern Curriculum</h3>
                            <p className="text-charcoal/70">International teaching methods that help students think clearly and solve problems.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-premium hover-lift border border-warm-gray">
                            <div className="w-16 h-16 gradient-teal rounded-2xl flex items-center justify-center mb-6">
                                <i className="fas fa-home text-2xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-bold text-navy-blue mb-3">Smart Classrooms</h3>
                            <p className="text-charcoal/70">Modern classrooms with digital screens and online learning tools for better education.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Principal */}
            <section className="py-20 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-2/5 mb-12 lg:mb-0 lg:pr-12">
                            <div className="relative">
                                <div className="rounded-3xl shadow-premium-lg overflow-hidden relative h-[400px] w-full">
                                    <Image
                                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=2067&q=80"
                                        alt="Principal Dr. Vikram Sharma"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-premium">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-premium-gold mb-1">Dr. Vikram Sharma</div>
                                        <div className="text-navy-blue font-semibold">Principal</div>
                                        <div className="text-sm text-charcoal/70 mt-2">PhD in Education, 25+ Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/5 scroll-fade-in">
                            <div className="inline-block mb-6">
                                <span className="bg-deep-teal/10 text-deep-teal px-5 py-2 rounded-full font-semibold text-sm uppercase">
                                    About Our School
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-8 heading-font">Building Future Leaders with Quality & Values</h2>
                            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                                Started in 1998, Guru Nanak School provides excellent education in Pharal, Haryana. We focus on building curiosity, creativity, and strong moral values in our students.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-premium-gold mt-1 mr-3 text-xl"></i>
                                    <div>
                                        <h3 className="font-bold text-navy-blue mb-1">Complete Development</h3>
                                        <p className="text-charcoal/70 text-sm">Strong academics plus sports, arts, and good character.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-premium-gold mt-1 mr-3 text-xl"></i>
                                    <div>
                                        <h3 className="font-bold text-navy-blue mb-1">Expert Teachers</h3>
                                        <p className="text-charcoal/70 text-sm">Well-qualified teachers with great training and experience.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className="inline-flex items-center text-deep-teal font-semibold text-lg hover:text-navy-blue group">
                                Explore Our Legacy <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Framework Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/10 text-premium-gold px-5 py-2 rounded-full font-semibold text-sm uppercase">
                                Academic Framework
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 heading-font">Our Learning Stages</h2>
                        <p className="text-lg text-charcoal/80">Our courses are designed to help students learn and grow at every stage of their education.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "01", stage: "Foundation Years", years: "Nursery - Grade 5", desc: "Fun learning activities focused on reading, numbers, and social skills.", icon: "fa-baby", features: ["Montessori Method", "Language Learning", "Creative Activities"], link: "/curriculum#foundation" },
                            { step: "02", stage: "Middle School", years: "Grade 6 - 8", desc: "Subject-focused learning with projects, thinking skills, and leadership training.", icon: "fa-book-reader", features: ["Science & Technology", "Research Projects", "Computer Skills"], highlight: true, link: "/curriculum#middle-school" },
                            { step: "03", stage: "Senior Secondary", years: "Grade 9 - 12", desc: "Stream selection with board exam preparation and career guidance.", icon: "fa-graduation-cap", features: ["Science/Commerce/Arts", "Exam Preparation", "College Applications"], link: "/curriculum#senior-secondary" }
                        ].map((path, i) => (
                            <div key={i} className={`p-10 rounded-[3rem] shadow-premium hover-lift border border-warm-gray relative ${path.highlight ? 'bg-white' : 'bg-warm-gray/10'}`}>
                                {path.highlight && (
                                    <div className="absolute -top-4 right-8 bg-premium-gold text-navy-blue px-6 py-2 rounded-full font-bold text-sm">
                                        Complete Focus
                                    </div>
                                )}
                                <div className="text-6xl font-black text-navy-blue/5 mb-8 heading-font">{path.step}</div>
                                <h3 className="text-2xl font-bold text-navy-blue mb-2">{path.stage}</h3>
                                <div className="text-deep-teal font-semibold mb-6">{path.years}</div>
                                <p className="text-charcoal/60 mb-8 text-sm leading-relaxed">{path.desc}</p>
                                <ul className="space-y-4 mb-10">
                                    {path.features.map((feat, fi) => (
                                        <li key={fi} className="flex items-center text-sm font-medium text-charcoal/80">
                                            <i className="fas fa-check-circle text-premium-gold mr-3"></i> {feat}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={path.link} className="text-deep-teal font-bold hover:text-navy-blue transition-colors flex items-center">
                                    Explore Curriculum <i className="fas fa-chevron-right ml-2 text-xs"></i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-gradient-to-br from-navy-blue to-deep-teal text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-gold rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold text-sm uppercase">
                                Our Philosophy
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-font">Mission & Vision</h2>
                        <p className="text-lg text-white/70">The values and goals that guide our teaching and shape our school.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 hover-lift">
                            <div className="w-20 h-20 bg-premium-gold/20 rounded-3xl flex items-center justify-center mb-8">
                                <i className="fas fa-bullseye text-3xl text-premium-gold"></i>
                            </div>
                            <h3 className="text-3xl font-bold mb-6 heading-font">Our Mission</h3>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                To give students a great education that helps them learn, grow, and succeed in a changing world.
                            </p>
                            <ul className="space-y-4">
                                {["Help students think clearly", "Welcome everyone equally", "Build responsible citizens"].map((item, i) => (
                                    <li key={i} className="flex items-center text-white/90">
                                        <i className="fas fa-check-circle text-premium-gold mr-4"></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 hover-lift">
                            <div className="w-20 h-20 bg-premium-gold/20 rounded-3xl flex items-center justify-center mb-8">
                                <i className="fas fa-eye text-3xl text-premium-gold"></i>
                            </div>
                            <h3 className="text-3xl font-bold mb-6 heading-font">Our Vision</h3>
                            <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                To be known as a top school that sets high standards in education, innovation, and character building.
                            </p>
                            <ul className="space-y-4">
                                {["New teaching methods", "Eco-friendly practices", "Leadership training"].map((item, i) => (
                                    <li key={i} className="flex items-center text-white/90">
                                        <i className="fas fa-check-circle text-premium-gold mr-4"></i> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Facilities Showcase */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 scroll-fade-in">
                            <div className="inline-block mb-6">
                                <span className="bg-deep-teal/10 text-deep-teal px-5 py-2 rounded-full font-semibold text-sm uppercase">
                                    World-Class Infrastructure
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-8 heading-font">Great Learning Spaces</h2>
                            <p className="text-lg text-charcoal/60 mb-12 leading-relaxed">
                                Modern facilities built to help students learn, create, and grow. From science labs to sports fields.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { t: "Science Labs", d: "Latest equipment for physics, chemistry, and biology experiments.", icon: "fa-microscope", color: "gold" },
                                    { t: "Technology Center", d: "Robotics, 3D printing, and computer labs for tech learning.", icon: "fa-laptop-code", color: "teal" },
                                    { t: "Sports Facilities", d: "Expert coaches and great facilities for all indoor and outdoor sports.", icon: "fa-swimming-pool", color: "sage" }
                                ].map((fac, i) => (
                                    <div key={i} className="flex items-start group">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 transition-transform group-hover:scale-110 ${fac.color === 'gold' ? 'bg-premium-gold/10 text-premium-gold' : fac.color === 'teal' ? 'bg-deep-teal/10 text-deep-teal' : 'bg-soft-sage/10 text-soft-sage'}`}>
                                            <i className={`fas ${fac.icon} text-2xl`}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-navy-blue mb-1">{fac.t}</h3>
                                            <p className="text-charcoal/50 text-sm">{fac.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12">
                                <Link href="/facilities" className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl font-bold hover-lift shadow-premium inline-block">
                                    View All Facilities
                                </Link>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6 pt-12">
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-premium h-64 relative">
                                        <Image src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800&q=80" alt="Library" fill className="object-cover" />
                                    </div>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-premium h-80 relative">
                                        <Image src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80" alt="Classroom" fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-premium h-80 relative">
                                        <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Art Room" fill className="object-cover" />
                                    </div>
                                    <div className="rounded-[2.5rem] overflow-hidden shadow-premium h-64 relative">
                                        <Image src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" alt="Sports" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-premium-lg border-8 border-light-ivory">
                                <span className="text-3xl font-black text-premium-gold heading-font">GNS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-warm-gray/30">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-in">
                        <div className="inline-block mb-6">
                            <span className="bg-premium-gold/10 text-premium-gold px-5 py-2 rounded-full font-semibold text-sm uppercase">
                                Community Voice
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6 heading-font">What Our Community Says</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Mrs. Anjali Mehta", role: "Parent of Grade 10 Student", text: "The personalized attention my daughter receives is exceptional. The teachers go beyond curriculum to ensure holistic development.", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&h=200&q=80" },
                            { name: "Mr. Rajesh Khanna", role: "Alumni (Batch 2010)", text: "Guru Nanak School laid the foundation for my career at IIT Delhi. The values and discipline I learned here continue to guide me.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80" },
                            { name: "Dr. Priya Singh", role: "Parent of Grade 7 & 5", text: "The balance between academics and extracurriculars is perfect. Both my children have flourished in this nurturing environment.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80" }
                        ].map((t, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-premium hover-lift border border-warm-gray">
                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden relative mr-4">
                                        <Image src={t.img} alt={t.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-blue">{t.name}</h4>
                                        <p className="text-deep-teal text-xs font-medium">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-charcoal/60 italic leading-relaxed">"{t.text}"</p>
                                <div className="flex mt-6 text-premium-gold text-xs">
                                    {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star mr-1"></i>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Highlights */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16 px-4">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold text-navy-blue mb-4 heading-font">Campus Life Highlights</h2>
                            <p className="text-charcoal/50">Experience the vibrant daily life and achievements of our students.</p>
                        </div>
                        <Link href="/gallery" className="hidden md:flex items-center text-deep-teal font-bold hover:text-navy-blue transition-colors">
                            Complete Gallery <i className="fas fa-arrow-right ml-3"></i>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", t: "Cultural Fest", span: "md:col-span-2" },
                            { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80", t: "Science Fair" },
                            { src: "https://images.unsplash.com/photo-1519861531473-920034658307?auto=format&fit=crop&w=800&q=80", t: "Sports Day" },
                            { src: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?auto=format&fit=crop&w=800&q=80", t: "Interactive Study" },
                            { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80", t: "Lab Innovation" },
                            { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80", t: "Graduation", span: "md:col-span-2" }
                        ].map((img, i) => (
                            <div key={i} className={`rounded-3xl overflow-hidden shadow-premium h-64 relative group cursor-pointer ${img.span || ''}`}>
                                <Image src={img.src} alt={img.t} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                    <h4 className="text-white font-bold text-lg">{img.t}</h4>
                                    <p className="text-white/60 text-xs">2023 Showcase</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced CTA Section */}
            <section className="py-24 bg-gradient-to-r from-navy-blue to-deep-teal text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 heading-font">Begin the Journey to <span className="text-premium-gold italic">Potential</span></h2>
                    <p className="text-xl mb-16 max-w-3xl mx-auto text-white/80">Join the Guru Nanak School family for the 2024-25 academic session. Admissions open for Nursery to Grade 12.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
                        {[
                            { n: "01", t: "Inquire", d: "Digital or physical inquiry about our programs.", i: "fa-info-circle" },
                            { n: "02", t: "Orientation", d: "Personal tour and pedagogical briefing.", i: "fa-compass" },
                            { n: "03", t: "Enrollment", d: "Seamless induction into our academic ecosystem.", i: "fa-user-check" }
                        ].map((step, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform">
                                    <i className={`fas ${step.i} text-2xl text-premium-gold`}></i>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{step.t}</h4>
                                <p className="text-white/50 text-sm font-light">{step.d}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/tour" className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl text-lg font-bold shadow-premium hover:shadow-gold-glow hover-lift">
                            Book Campus Tour
                        </Link>
                        <Link href="/apply" className="bg-white text-navy-blue px-10 py-5 rounded-2xl text-lg font-bold shadow-premium hover:shadow-premium-lg hover-lift">
                            Apply Online Now
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            {/* WhatsApp Float */}
            <a href="https://wa.me/919350202103" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 gradient-teal text-white p-5 rounded-3xl shadow-premium-lg hover:shadow-premium hover-lift z-50">
                <div className="flex items-center">
                    <i className="fab fa-whatsapp text-2xl mr-3"></i>
                    <div className="text-left">
                        <div className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Admissions 2024</div>
                        <div className="text-sm font-bold">Chat with Office</div>
                    </div>
                </div>
            </a>
        </main>
    );
}
