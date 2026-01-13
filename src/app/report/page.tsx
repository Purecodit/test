"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ReportNavbar from '@/components/ReportNavbar';
import ReportFooter from '@/components/ReportFooter';

const forms = [
    {
        id: 'teacher',
        title: "Teacher's Report",
        description: "Weekly filing for student attendance, syllabus progress, and classroom behavior monitoring.",
        icon: "fas fa-chalkboard-user",
        category: "Academic",
        color: "sky",
        keywords: "teacher class academic student attendance",
        href: "/report/teacher"
    },
    {
        id: 'principal',
        title: "Principal's Dashboard",
        description: "Strategic oversight, staff management reports, and campus performance metrics.",
        icon: "fas fa-user-shield",
        category: "Executive",
        color: "purple",
        keywords: "principal executive strategy staff admin",
        href: "/report/principal"
    },
    {
        id: 'incident',
        title: "Incident Report",
        description: "Log critical incidents, accidents, or safety concerns requiring immediate attention.",
        icon: "fas fa-exclamation-triangle",
        category: "Safety",
        color: "rose",
        keywords: "incident safety accident emergency report",
        href: "/report/incident"
    },
    {
        id: 'transport',
        title: "Transport & Services",
        description: "Vehicle logs, route management, and facility cleaning service reports.",
        icon: "fas fa-bus",
        category: "Logistics",
        color: "amber",
        keywords: "transport bus vehicle cleaning maintenance",
        href: "/report/transport"
    },
    {
        id: 'admin',
        title: "Admin Staff Report",
        description: "General office operations, resource inventory, and administrative updates.",
        icon: "fas fa-briefcase",
        category: "Operations",
        color: "teal",
        keywords: "admin office operations staff resources",
        href: "/report/admin"
    }
];

export default function ReportPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredForms = forms.filter(form =>
        form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        form.keywords.includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen">
            <ReportNavbar />

            <main className="flex-grow container mx-auto px-4 pt-12 pb-32 max-w-7xl">
                {/* Hero & Search */}
                <section className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        What would you like to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-purple">file today?</span>
                    </h1>

                    <p className="text-lg text-slate-500 mb-8">Select a module below to begin your weekly reporting.</p>

                    <div className="relative max-w-xl mx-auto group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <i className="fas fa-search text-slate-400 group-focus-within:text-brand-500 transition-colors"></i>
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-lg shadow-lg placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                            placeholder="Search forms (e.g., 'Teacher', 'Transport', 'Incident')..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                            <kbd className="hidden md:inline-block px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded border border-slate-200 font-sans">/</kbd>
                        </div>
                    </div>
                </section>

                {/* Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {filteredForms.map((form) => (
                        <div key={form.id} className={`custom-card group rounded-2xl p-6 flex flex-col h-full transition-all ${form.color === 'sky' ? 'hover:border-sky-500' :
                                form.color === 'purple' ? 'hover:border-purple-500' :
                                    form.color === 'rose' ? 'hover:border-rose-500' :
                                        form.color === 'amber' ? 'hover:border-amber-500' :
                                            form.color === 'teal' ? 'hover:border-teal-500' : ''
                            }`}>
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${form.color === 'sky' ? 'bg-sky-100 text-sky-600' :
                                        form.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                                            form.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                                                form.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                                                    form.color === 'teal' ? 'bg-teal-100 text-teal-600' : ''
                                    }`}>
                                    <i className={form.icon}></i>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${form.color === 'sky' ? 'bg-sky-50 text-sky-700 border-sky-100' :
                                        form.color === 'purple' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                            form.color === 'rose' ? 'bg-rose-50 text-rose-700 border-rose-100' :
                                                form.color === 'amber' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                    form.color === 'teal' ? 'bg-teal-50 text-teal-700 border-teal-100' : ''
                                    }`}>
                                    {form.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                                {form.title}
                            </h3>
                            <p className="text-slate-500 text-sm mb-6 flex-grow">
                                {form.description}
                            </p>
                            <Link
                                href={form.href}
                                className={`w-full inline-flex items-center justify-center px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:translate-y-[-2px]`}
                            >
                                Open Form <i className="fas fa-arrow-right ml-2 text-sm"></i>
                            </Link>
                        </div>
                    ))}

                    {/* Maintenance/More */}
                    <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full opacity-60 hover:opacity-100 hover:border-slate-400 transition-all cursor-not-allowed">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                            <i className="fas fa-wrench"></i>
                        </div>
                        <span className="text-sm font-medium text-slate-600">More Modules Coming Soon</span>
                    </div>
                </div>

                {/* No Results Msg */}
                {filteredForms.length === 0 && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                            <i className="fas fa-search text-slate-400 text-2xl"></i>
                        </div>
                        <h3 className="text-lg font-medium text-slate-900">No forms found</h3>
                        <p className="text-slate-500">Try searching for 'Teacher', 'Bus', or 'Safety'</p>
                    </div>
                )}
            </main>

            <ReportFooter />
        </div>
    );
}
