"use client";

import React, { useState } from 'react';
import { submitAdminReport } from '@/lib/actions';

const AdminReportForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await submitAdminReport(formData);
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
                <div className="w-20 h-20 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fas fa-check"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Admin Report Filed</h2>
                <p className="text-slate-600 mb-8 text-lg">Your weekly administrative operations summary has been logged.</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-violet-600 text-white font-bold rounded-xl shadow-md hover:bg-violet-700 transition"
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
            {/* Module 1: Admin Details */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-id-card mr-3"></i>1. Administrative Staff Details</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Staff Name <span className="text-rose-500">*</span></label>
                        <input type="text" name="admin_name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID <span className="text-rose-500">*</span></label>
                        <input type="text" name="employee_id" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department <span className="text-rose-500">*</span></label>
                        <select name="department" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500">
                            <option value="">Select Dept</option>
                            <option value="Administration">Administration</option>
                            <option value="Accounts">Accounts</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Admissions">Admissions</option>
                        </select>
                    </div>
                </div>
                <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Week Start Date <span className="text-rose-500">*</span></label>
                        <input type="date" name="week_start_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Week End Date <span className="text-rose-500">*</span></label>
                        <input type="date" name="week_end_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500" />
                    </div>
                </div>
            </section>

            {/* Module 2: Work Summary */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-chart-line mr-3"></i>2. Operational Performance</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tasks Completed</label>
                        <input type="number" name="tasks_completed" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pending Tasks</label>
                        <input type="number" name="pending_tasks" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fee Collections (₹)</label>
                        <input type="number" name="fee_collections" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
                <div className="px-6 pb-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Weekly Summary <span className="text-rose-500">*</span></label>
                        <textarea name="weekly_summary" required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Major Accomplishments</label>
                        <textarea name="major_accomplishments" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                </div>
            </section>

            {/* Module 3: Logistics & Tech */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-laptop-code mr-3"></i>3. Resources & Systems</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Office Supplies Status</label>
                        <select name="office_supplies_status" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                            <option value="Adequate">Adequate</option>
                            <option value="Low Stock">Low Stock</option>
                            <option value="Reorder Needed">Reorder Needed</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">System Availability</label>
                        <select name="system_availability" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                            <option value="100%">100% Up</option>
                            <option value="95-99%">95-99% Up</option>
                            <option value="Below 95%">Below 95% (Issues)</option>
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Technical/Operational Issues</label>
                        <textarea name="notes" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="Describe any roadblocks..."></textarea>
                    </div>
                </div>
            </section>

            {/* Submission */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-paper-plane mr-2"></i>}
                    Submit Admin Report
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

export default AdminReportForm;
