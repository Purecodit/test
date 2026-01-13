"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ReportFooter = () => {
    return (
        <footer className="mt-auto bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
            <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-accent-purple to-brand-400"></div>

            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Image src="/img/logo.webp" alt="Logo" width={40} height={40} className="rounded-full border-2 border-white/10" />
                            <div>
                                <h3 className="text-lg font-bold text-white">GN School ERP</h3>
                                <p className="text-xs text-slate-400">v2.5 • Enterprise</p>
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Premium educational management platform serving excellence since 1998.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                            <i className="fas fa-graduation-cap text-emerald-400 text-sm"></i>
                            <span className="text-xs text-emerald-300 font-medium">CBSE affiliated</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/report" className="text-sm text-slate-300 hover:text-brand-300 transition-colors flex items-center gap-2 group">
                                <i className="fas fa-chevron-right text-[10px] text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Dashboard
                            </Link></li>
                            <li><Link href="#" className="text-sm text-slate-300 hover:text-brand-300 transition-colors flex items-center gap-2 group">
                                <i className="fas fa-chevron-right text-[10px] text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Staff Directory
                            </Link></li>
                            <li><Link href="#" className="text-sm text-slate-300 hover:text-brand-300 transition-colors flex items-center gap-2 group">
                                <i className="fas fa-chevron-right text-[10px] text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                                Academic Calendar
                            </Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-sm text-slate-300 hover:text-brand-300 transition-colors flex items-center gap-2">
                                <i className="fas fa-headset text-brand-400 text-xs"></i>
                                IT Helpdesk: 4022
                            </Link></li>
                            <li><Link href="mailto:helpdesk@gurunanakschool.edu" className="text-sm text-slate-300 hover:text-brand-300 transition-colors flex items-center gap-2">
                                <i className="fas fa-envelope text-brand-400 text-xs"></i>
                                Email Support
                            </Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">System Status</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                                <div className="relative">
                                    <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <div className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">All Systems Operational</p>
                                    <p className="text-xs text-slate-400">Uptime: 99.8%</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Link href="/" className="flex-1 bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 text-brand-300 hover:text-white text-sm font-medium py-2.5 rounded-lg text-center transition-all group">
                                    <i className="fas fa-home mr-2"></i> Website
                                </Link>
                                <Link href="#" className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-sm font-medium py-2.5 rounded-lg text-center transition-all">
                                    <i className="fas fa-users mr-2"></i> Staff
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Guru Nanak School Management. All rights reserved.
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fab fa-facebook-f text-sm"></i></Link>
                            <Link href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><i className="fab fa-whatsapp text-sm"></i></Link>
                            <Link href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><i className="fab fa-instagram text-sm"></i></Link>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
                            <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ReportFooter;
