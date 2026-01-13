"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            <section className="py-24 pt-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-12 heading-font">Privacy Policy</h1>

                    <div className="space-y-12 text-lg text-charcoal/70 leading-relaxed font-light">
                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Introduction</h2>
                            <p>
                                At Guru Nanak School, we protect the privacy and security of our students, parents, and staff. This Privacy Policy explains how we collect, use, and protect personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Data Collection</h2>
                            <p>
                                We collect information needed for school management, student safety, and communication. This includes:
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-3">
                                <li>Identity information (names, IDs)</li>
                                <li>Contact details (phone, email, address)</li>
                                <li>Academic and health records</li>
                                <li>Financial information for fee processing</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Usage of Information</h2>
                            <p>
                                Collected data is used solely for:
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-3">
                                <li>Providing educational services</li>
                                <li>Ensuring student welfare and security</li>
                                <li>Processing admissions and fees</li>
                                <li>Required reporting to education boards</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Data Security</h2>
                            <p>
                                We use standard security measures to prevent unauthorized access or changes to personal data. Only authorized staff can access sensitive information.
                            </p>
                        </section>

                        <section className="bg-white p-10 rounded-[2.5rem] border border-warm-gray shadow-premium">
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Contact Us</h2>
                            <p className="mb-4">If you have any questions regarding our privacy practices, please contact us at:</p>
                            <div className="font-bold text-deep-teal">
                                info@gurunanakschool.edu.in
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
