"use client";

import React from 'react';
import ReportNavbar from '@/components/ReportNavbar';
import ReportFooter from '@/components/ReportFooter';
import AdminReportForm from '@/components/forms/AdminReportForm';

export default function AdminReportPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <ReportNavbar />

            <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
                {/* Form Header */}
                <header className="mb-8 animate-slide-up">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center">
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full flex items-center justify-center mr-4 shadow-sm border border-violet-200">
                                <i className="fas fa-id-card text-violet-600 text-2xl"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                                    Administrative Staff <span className="text-violet-600">Weekly Report</span>
                                </h1>
                                <p className="text-slate-500 mt-1 font-medium">Operations & Management Portal</p>
                            </div>
                        </div>
                        {/* Badge */}
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center">
                                    <i className="fas fa-user-tie text-violet-600"></i>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-700">Admin Dept</p>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Excellence Division</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-violet-50/80 backdrop-blur-md border-l-4 border-violet-500 rounded-r-xl shadow-sm">
                        <p className="text-sm text-slate-700 flex items-center">
                            <i className="fas fa-info-circle text-violet-600 mr-2 text-lg"></i>
                            <span><strong>OPERATIONS TRACKING:</strong> This report tracks administrative efficiency and office management. Required fields marked with <span className="text-rose-500">*</span>.</span>
                        </p>
                    </div>
                </header>

                <AdminReportForm />
            </div>

            <ReportFooter />
        </div>
    );
}
