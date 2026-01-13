"use client";

import React from 'react';
import ReportNavbar from '@/components/ReportNavbar';
import ReportFooter from '@/components/ReportFooter';
import PrincipalReportForm from '@/components/forms/PrincipalReportForm';

export default function PrincipalReportPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ReportNavbar />

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
                {/* Form Header */}
                <header className="mb-8 animate-slide-up">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-gradient-to-br from-brand-100 to-indigo-100 rounded-full flex items-center justify-center mr-4 shadow-sm border border-brand-200">
                                <i className="fas fa-university text-brand-600 text-2xl"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                    Executive <span className="text-brand-600">Weekly Report</span>
                                </h1>
                                <p className="text-slate-500 mt-1 font-medium">Weekly Leadership & Operational Insights</p>
                            </div>
                        </div>
                        {/* Badge */}
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-file-contract text-brand-600"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-700">Confidential</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Director's Eyes Only</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-brand-50/80 backdrop-blur-md border-l-4 border-brand-500 rounded-r-xl shadow-sm flex items-start gap-3">
                        <i className="fas fa-lightbulb text-brand-600 mt-0.5"></i>
                        <div className="text-sm text-slate-700">
                            <strong>EXECUTIVE BRIEF:</strong> This report synthesizes key performance metrics directly for the Board of Directors. Please ensure all strategic KPIs are updated. Required fields marked with <span className="text-rose-500">*</span>.
                        </div>
                    </div>
                </header>

                <PrincipalReportForm />
            </div>

            <ReportFooter />
        </div>
    );
}
