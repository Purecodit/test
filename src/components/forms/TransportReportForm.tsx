"use client";

import React, { useState } from 'react';
import { submitTransportReport } from '@/lib/actions';

const TransportReportForm = () => {
    const [serviceType, setServiceType] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await submitTransportReport(formData);
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
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fas fa-check"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Report Submitted Successfully!</h2>
                <p className="text-slate-600 mb-8 text-lg">Your operations report has been logged in the central ERP database.</p>
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
            {/* Module 1: Staff & Dept */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-user-hard-hat mr-3"></i>1. Staff & Service Department</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Staff Name <span className="text-rose-500">*</span>
                        </label>
                        <input type="text" name="staff_name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Service Type <span className="text-rose-500">*</span>
                        </label>
                        <select
                            name="service_type"
                            required
                            onChange={(e) => setServiceType(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition"
                        >
                            <option value="">Select Service</option>
                            <option value="Transport">Transport (Driver/Attendant)</option>
                            <option value="Cleaning">Cleaning (Housekeeping)</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID <span className="text-rose-500">*</span></label>
                        <input type="text" name="employee_id" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Week Start Date <span className="text-rose-500">*</span></label>
                        <input type="date" name="week_start_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                </div>
            </section>

            {/* Transport Section (Conditional) */}
            {(serviceType === 'Transport' || serviceType === 'Other') && (
                <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden animate-fadeIn">
                    <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-4">
                        <h2 className="text-xl font-bold"><i className="fas fa-bus mr-3"></i>Transport Services</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number</label>
                            <input type="text" name="vehicle_number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Route Number</label>
                            <input type="text" name="route_number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Consumed (L)</label>
                            <input type="number" name="fuel_consumed" step="0.1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Issues</label>
                            <input type="number" name="maintenance_issues" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" />
                        </div>
                    </div>
                    <div className="px-6 pb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Details</label>
                        <textarea name="maintenance_details" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"></textarea>
                    </div>
                </section>
            )}

            {/* Cleaning Section (Conditional) */}
            {(serviceType === 'Cleaning' || serviceType === 'Other') && (
                <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden animate-fadeIn">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4">
                        <h2 className="text-xl font-bold"><i className="fas fa-broom mr-3"></i>Cleaning & Hygiene Services</h2>
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Cleaning Quality</label>
                            <div className="flex gap-4">
                                {['Excellent', 'Good', 'Average', 'Poor'].map((q) => (
                                    <label key={q} className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="cleaning_quality" value={q} className="text-emerald-500 focus:ring-emerald-500" />
                                        <span className="text-sm font-medium text-gray-700">{q}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Supplies Needed</label>
                                <textarea name="supplies_needed" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition" placeholder="List items..."></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Infrastructure Issues</label>
                                <textarea name="infrastructure_issues" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 transition" placeholder="Broken furniture, leaks..."></textarea>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* General Description */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="p-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">General Remarks / Other Observations</label>
                    <textarea name="remarks" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition"></textarea>
                </div>
            </section>

            {/* Submission */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-paper-plane mr-2"></i>}
                    Submit Transport/Cleaning Report
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

export default TransportReportForm;
