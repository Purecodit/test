"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
        router.refresh();
    };

    const menuItems = [
        { name: 'Overview', icon: 'fas fa-chart-pie', href: '/dashboard' },
        { name: 'Recent Reports', icon: 'fas fa-clock', href: '/dashboard/reports' },
        { name: 'Teacher Files', icon: 'fas fa-chalkboard-user', href: '/dashboard/reports/teacher' },
        { name: 'Incident Logs', icon: 'fas fa-exclamation-triangle', href: '/dashboard/reports/incident' },
        { name: 'Logistics', icon: 'fas fa-bus', href: '/dashboard/reports/transport' },
        { name: 'Principal Briefs', icon: 'fas fa-user-shield', href: '/dashboard/reports/principal' },
        { name: 'Admin Ops', icon: 'fas fa-briefcase', href: '/dashboard/reports/admin' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex overflow-hidden">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 text-slate-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col h-full">
                    {/* Brand */}
                    <div className="p-6 flex items-center gap-4">
                        <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
                            <i className="fas fa-graduation-cap text-white text-xl"></i>
                        </div>
                        <div>
                            <h2 className="text-white font-bold tracking-tight">ERP Dashboard</h2>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Directorate</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow p-4 space-y-2 mt-4 overflow-y-auto">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${pathname === item.href
                                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                                    : 'hover:bg-slate-800 hover:text-white'
                                    }`}
                            >
                                <i className={`${item.icon} w-5 text-center`}></i>
                                <span className="text-sm font-semibold">{item.name}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* User Section */}
                    <div className="p-4 mt-auto border-t border-slate-800">
                        <div className="bg-slate-800/50 rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 font-bold">
                                D
                            </div>
                            <div className="flex-grow overflow-hidden">
                                <p className="text-xs font-bold text-white truncate">Director</p>
                                <p className="text-[10px] text-slate-500 truncate lowercase">director@school.edu</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-slate-500 hover:text-rose-500 transition-colors"
                            >
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow relative flex flex-col min-h-screen overflow-y-auto">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 flex items-center justify-between sticky top-0 z-40">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-600 text-xl">
                        <i className={`fas ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    <Image src="/img/logo.webp" alt="Logo" width={32} height={32} />
                    <div className="w-8"></div>
                </header>

                {/* Desktop Top Nav */}
                <header className="hidden lg:flex bg-white/70 backdrop-blur-md border-b border-slate-200 h-20 items-center justify-between px-8 sticky top-0 z-40">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Welcome back, Director</h1>
                        <p className="text-xs text-slate-500 font-medium">Here's what's happening today.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <button className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all flex items-center justify-center">
                                <i className="far fa-bell"></i>
                                <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
                            </button>
                        </div>
                        <div className="h-8 w-px bg-slate-200 mx-2"></div>
                        <Link href="/" className="text-xs font-bold text-slate-600 hover:text-brand-600 uppercase tracking-wider">
                            Visit School Site <i className="fas fa-external-link-alt ml-1"></i>
                        </Link>
                    </div>
                </header>

                {/* Content Area */}
                <div className="p-4 lg:p-8 flex-grow">
                    {children}
                </div>
            </main>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}
