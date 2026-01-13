"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MandatoryDisclosure() {
    return (
        <main className="bg-light-ivory text-charcoal min-h-screen">
            <Navigation />

            <section className="py-24 pt-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy-blue mb-12 heading-font">Mandatory Disclosure</h1>

                    <div className="space-y-12 text-lg text-charcoal/70 leading-relaxed font-light">
                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">General Information</h2>
                            <div className="bg-white overflow-hidden rounded-[2.5rem] border border-warm-gray shadow-premium">
                                <table className="w-full text-left">
                                    <tbody className="divide-y divide-warm-gray">
                                        {[
                                            ["Name of the School", "Guru Nanak School"],
                                            ["Affiliation Number", "1234567"],
                                            ["School Code", "12345"],
                                            ["Complete Address", "Pharal, Kaithal-136021, Haryana"],
                                            ["Principal Name & Qualification", "Dr. Vikram Sharma, PhD (Education)"],
                                            ["School Email ID", "info@gurunanakschool.edu.in"],
                                            ["Phone Number", "+919350202103"]
                                        ].map(([label, value], i) => (
                                            <tr key={i} className="hover:bg-warm-gray/10 transition-colors">
                                                <td className="py-6 px-8 font-bold text-navy-blue w-1/3">{label}</td>
                                                <td className="py-6 px-8 text-charcoal/60">{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Documents and Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { t: "Affiliation Letter", l: "/docs/affiliation.pdf" },
                                    { t: "Trust/Society Registration", l: "/docs/registration.pdf" },
                                    { t: "No Objection Certificate (NOC)", l: "/docs/noc.pdf" },
                                    { t: "Recognition Certificate", l: "/docs/recognition.pdf" },
                                    { t: "Building Safety Certificate", l: "/docs/building-safety.pdf" },
                                    { t: "Fire Safety Certificate", l: "/docs/fire-safety.pdf" }
                                ].map((doc, i) => (
                                    <a key={i} href={doc.l} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white rounded-3xl border border-warm-gray hover:border-premium-gold hover:shadow-premium transition-all group">
                                        <div className="w-12 h-12 bg-deep-teal/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-deep-teal group-hover:text-white transition-colors">
                                            <i className="fas fa-file-pdf text-xl"></i>
                                        </div>
                                        <span className="font-bold text-navy-blue">{doc.t}</span>
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-blue mb-6">Staff (Teaching)</h2>
                            <div className="bg-navy-blue p-10 rounded-[2.5rem] text-white space-y-4 font-light">
                                <div className="flex justify-between border-b border-white/10 pb-4">
                                    <span>Total Number of Teachers</span>
                                    <span className="font-bold">45</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-4">
                                    <span>PGT Teachers</span>
                                    <span className="font-bold">12</span>
                                </div>
                                <div className="flex justify-between border-b border-white/10 pb-4">
                                    <span>TGT Teachers</span>
                                    <span className="font-bold">15</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>PRT Teachers</span>
                                    <span className="font-bold">18</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
