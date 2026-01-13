"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReportNavbar from '@/components/ReportNavbar';
import ReportFooter from '@/components/ReportFooter';
import TeacherReportForm from '@/components/forms/TeacherReportForm';

export default function TeacherReportPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ReportNavbar />

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
                {/* Form Header */}
                <header className="mb-8 animate-slide-up">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center">
                            <Image src="/img/logo.webp" alt="Logo" width={56} height={56} className="h-14 w-auto mr-4 shadow-sm rounded-full" />
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                    Smart Weekly <span className="text-brand-600">Class Report</span>
                                </h1>
                                <p className="text-slate-500 mt-1 font-medium">Academic Performance & Operations Portal</p>
                            </div>
                        </div>
                        {/* Badge */}
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent-teal/10 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-chalkboard-teacher text-accent-teal"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-700">Academic Dept</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Faculty Division</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Alert */}
                    <div className="mt-6 p-4 bg-white/60 backdrop-blur-md border-l-4 border-brand-500 rounded-r-xl shadow-sm">
                        <p className="text-sm text-slate-600 flex items-center">
                            <i className="fas fa-info-circle text-brand-500 mr-2 text-lg"></i>
                            <span><strong>REPORTING PROTOCOL:</strong> All reports are logged in the central ERP database. Required fields marked with <span className="text-rose-500">*</span>.</span>
                        </p>
                    </div>
                </header>

                <TeacherReportForm />
            </div>

            <ReportFooter />
        </div>
    );
}
