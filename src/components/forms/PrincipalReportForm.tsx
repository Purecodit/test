"use client";

import React, { useState } from 'react';
import { submitPrincipalReport } from '@/lib/actions';

const PrincipalReportForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await submitPrincipalReport(formData);
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an error submitting the report. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-2xl shadow-premium p-12 text-center animate-slide-up">
                <div className="w-20 h-20 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fas fa-check"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Executive Report Submitted</h2>
                <p className="text-slate-600 mb-8 text-lg">The weekly principal's briefing has been successfully transmitted to the Board.</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl shadow-md hover:bg-brand-700 transition"
                    >
                        File Another Report
                    </button>
                    <a
                        href="/report"
                        className="px-8 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-200 transition"
                    >
                        Go to Dashboard
                    </a>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 animate-slide-up">
            {/* Module 1: Info */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-600 to-indigo-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-university mr-3"></i>1. Executive Metadata</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Principal Name <span className="text-rose-500">*</span></label>
                        <input type="text" name="principal_name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Week Start Date <span className="text-rose-500">*</span></label>
                        <input type="date" name="week_start_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Week End Date <span className="text-rose-500">*</span></label>
                        <input type="date" name="week_end_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                </div>
                <div className="px-6 pb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Executive Summary <span className="text-rose-500">*</span></label>
                    <textarea name="executive_summary" required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" placeholder="High-level overview..."></textarea>
                </div>
            </section>

            {/* Module 2: Key Metrics */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-chart-line mr-3"></i>2. Essential Metrics</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Syllabus Completion %</label>
                        <input type="number" name="syllabus_completion" step="0.1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Weekly Tests Conducted</label>
                        <input type="number" name="tests_conducted" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teacher Attendance %</label>
                        <input type="number" name="teacher_attendance" step="0.1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fee Collection %</label>
                        <input type="number" name="fee_collection" step="0.1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                </div>
            </section>

            {/* Module 3: Detailed Updates */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-edit mr-3"></i>3. Strategic Insights</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Academic Highlights</label>
                        <textarea name="academic_highlights" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Staff Updates & Morale</label>
                        <textarea name="staff_updates" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Strategic Brief</label>
                        <textarea name="strategic_brief" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="Next week's goals..."></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Action Items for Director</label>
                        <textarea name="director_action_items" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                </div>
            </section>

            {/* Submission */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-paper-plane mr-2"></i>}
                    Submit Executive Report
                </button>
                <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-8 bg-white text-slate-700 font-bold py-4 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition"
                >
                    <i className="fas fa-print mr-2"></i> Print PDF
                </button>
            </div>
        </form>
    );
};

export default PrincipalReportForm;
