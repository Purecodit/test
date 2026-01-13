"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ReportNavbar = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('en-US', {
            weekday: 'long', month: 'short', day: 'numeric'
        }));
    }, []);

    return (
        <>
            <div className="hidden md:block bg-slate-900 border-b border-slate-800 text-slate-300 py-2 px-4 text-[11px] font-medium tracking-wide relative z-50">
                <div className="container mx-auto max-w-7xl flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center hover:text-white transition-colors cursor-pointer" title="IT Helpdesk Extension">
                            <i className="fas fa-phone-alt mr-2 text-brand-500"></i> IT Support: <strong>4022</strong>
                        </span>
                        <span className="hidden sm:inline-flex items-center hover:text-white transition-colors cursor-pointer">
                            <i className="fas fa-envelope mr-2 text-brand-500"></i> helpdesk@gurunanakschool.edu
                        </span>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="flex items-center text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            System Operational
                        </span>
                        <div className="h-3 w-px bg-slate-700"></div>
                        <Link href="#" className="hover:text-brand-400 transition-colors">Staff Portal</Link>
                    </div>
                </div>
            </div>

            <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/report" className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-purple rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                <Image src="/img/logo.webp" alt="Logo" width={44} height={44} className="relative h-11 w-11 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-100" />
                            </div>
                            <div className="block">
                                <h1 className="font-bold text-slate-900 text-[13px] md:text-[15px] leading-tight group-hover:text-brand-700 transition-colors">Guru Nanak School</h1>
                                <div className="flex items-center mt-0.5">
                                    <span className="bg-brand-50 text-brand-700 text-[8px] md:text-[9px] font-bold px-1 py-0.5 md:px-1.5 rounded border border-brand-100 uppercase tracking-wider">Admin Portal</span>
                                    <span className="text-[9px] md:text-[10px] text-slate-400 ml-2 font-medium">v2.4</span>
                                </div>
                            </div>
                        </Link>

                        <div className="hidden lg:flex items-center bg-slate-50/80 rounded-full px-1.5 py-1.5 border border-slate-200/80 shadow-inner gap-1">
                            <Link href="/report" className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-full shadow-md transform hover:scale-105 transition-all">Dashboard</Link>
                            <Link href="#" className="px-5 py-2 text-xs font-medium text-slate-600 hover:text-brand-600 hover:bg-white hover:shadow-sm rounded-full transition-all">My Reports</Link>
                            <Link href="#" className="px-5 py-2 text-xs font-medium text-slate-600 hover:text-brand-600 hover:bg-white hover:shadow-sm rounded-full transition-all">Staff Directory</Link>
                            <Link href="#" className="px-5 py-2 text-xs font-medium text-slate-600 hover:text-brand-600 hover:bg-white hover:shadow-sm rounded-full transition-all">Resources</Link>
                        </div>

                        <div className="flex items-center gap-4 lg:gap-6">
                            <button className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-brand-600 hover:bg-brand-50 transition-colors">
                                <i className="fas fa-search text-sm"></i>
                            </button>

                            <button className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-brand-600 hover:bg-brand-50 transition-colors group">
                                <i className="far fa-bell text-lg"></i>
                                <span className="absolute top-1.5 right-2 h-2.5 w-2.5 bg-rose-500 rounded-full border-2 border-white group-hover:animate-pulse"></span>
                            </button>

                            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

                            <div className="flex items-center gap-3 cursor-pointer group pl-2">
                                <div className="text-right hidden sm:block leading-tight">
                                    <p className="text-xs font-bold text-slate-700 group-hover:text-brand-600 transition-colors">Staff Member</p>
                                    <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{currentDate}</span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-600 to-brand-700 text-white flex items-center justify-center shadow-lg ring-2 ring-white group-hover:ring-brand-100 transition-all overflow-hidden relative">
                                    <span className="text-xs font-bold relative z-10">SM</span>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                </div>
                                <i className="fas fa-chevron-down text-[10px] text-slate-400 group-hover:text-brand-500 transition-colors"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default ReportNavbar;
