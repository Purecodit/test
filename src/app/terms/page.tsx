"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsOfService() {
    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            <section className="py-24 pt-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-12 heading-font">Terms of Service</h1>

                    <div className="space-y-12 text-lg text-charcoal/70 leading-relaxed font-light">
                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Agreement to Terms</h2>
                            <p>
                                By using the Guru Nanak School website, you agree to these Terms of Service. If you don't agree, please don't use the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Code of Conduct</h2>
                            <p>
                                Users must use our website respectfully and legally. You cannot:
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-3">
                                <li>Try to hack or break into the site</li>
                                <li>Upload harmful content</li>
                                <li>Give false information in forms</li>
                                <li>Use our content for business purposes</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Intellectual Property</h2>
                            <p>
                                All content on this website—including logos, images, text, and software—belongs to Guru Nanak School or its partners. You cannot use it without permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Disclaimer</h2>
                            <p>
                                We try to keep information accurate, but it is provided "as is" and may change without notice. Guru Nanak School is not responsible for errors.
                            </p>
                        </section>

                        <section className="bg-navy-blue p-10 rounded-[2.5rem] text-white shadow-premium">
                            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                            <p className="font-light opacity-80">
                                These terms are governed by the laws of India, specifically under the jurisdiction of Haryana.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
