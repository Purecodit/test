"use client";

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Sitemap() {
    const pages = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Admissions", path: "/admissions" },
                { name: "Apply Now", path: "/apply" },
                { name: "Contact Us", path: "/contact" },
            ]
        },
        {
            title: "Academics & Life",
            links: [
                { name: "Academics Overview", path: "/academics" },
                { name: "Curriculum Details", path: "/curriculum" },
                { name: "Examination Guide", path: "/examination" },
                { name: "School Tour", path: "/tour" },
                { name: "Facilities", path: "/facilities" },
                { name: "Gallery", path: "/gallery" },
            ]
        },
        {
            title: "Portal & Administration",
            links: [
                { name: "Public Reports", path: "/report" },
                { name: "Director Dashboard", path: "/dashboard" },
                { name: "Staff Login", path: "/login" },
            ]
        },
        {
            title: "Legal & Information",
            links: [
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Mandatory Disclosure", path: "/disclosure" },
            ]
        }
    ];

    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            <section className="py-24 pt-32">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-12 heading-font">Site Directory</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {pages.map((section, si) => (
                            <div key={si} className="bg-white p-10 rounded-[3rem] border border-warm-gray shadow-premium hover-lift">
                                <h3 className="text-2xl font-bold text-navy-blue mb-8 flex items-center">
                                    <span className="w-2 h-8 bg-premium-gold rounded-full mr-4"></span>
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link, li) => (
                                        <li key={li}>
                                            <Link href={link.path} className="text-charcoal/60 hover:text-deep-teal transition-colors flex items-center group">
                                                <i className="fas fa-arrow-right text-[10px] mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-12 bg-navy-blue rounded-[3rem] text-white text-center">
                        <h2 className="text-3xl font-bold mb-4 heading-font">Still can't find what you're looking for?</h2>
                        <p className="mb-8 opacity-70">Our support team is here to help you navigate our facilities and services.</p>
                        <Link href="/contact" className="gradient-gold text-navy-blue px-10 py-5 rounded-2xl font-bold hover:shadow-gold-glow shadow-premium inline-block">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
