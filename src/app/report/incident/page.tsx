"use client";

import React from 'react';
import Image from 'next/image';
import ReportNavbar from '@/components/ReportNavbar';
import ReportFooter from '@/components/ReportFooter';
import IncidentReportForm from '@/components/forms/IncidentReportForm';

export default function IncidentReportPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ReportNavbar />

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
                {/* Form Header */}
                <header className="mb-8 animate-slide-up">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mr-4 shadow-sm border border-rose-200">
                                <i className="fas fa-exclamation-triangle text-rose-600 text-2xl"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                    Critical Incident <span className="text-rose-600">Reporting</span>
                                </h1>
                                <p className="text-slate-500 mt-1 font-medium">Emergency Response & Safety Documentation</p>
                            </div>
                        </div>
                        {/* Badge */}
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-rose-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-file-medical text-rose-600"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-700">Confidential</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Security Level 1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Alert */}
                    <div className="mt-6 p-4 bg-rose-50/80 backdrop-blur-md border-l-4 border-rose-500 rounded-r-xl shadow-sm flex items-start gap-3">
                        <i className="fas fa-exclamation-circle text-rose-600 mt-0.5"></i>
                        <div className="text-sm text-slate-700">
                            <strong>CRITICAL PROTOCOL:</strong> All incident reports are immediately logged and trigger alert notifications to the Principal and Safety Committee. Ensure all details are accurate. Required fields marked with <span className="text-rose-600">*</span>.
                        </div>
                    </div>
                </header>

                <IncidentReportForm />
            </div>

            <ReportFooter />
        </div>
    );
}
