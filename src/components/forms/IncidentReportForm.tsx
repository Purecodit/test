"use client";

import React, { useState } from 'react';
import { submitIncidentReport } from '@/lib/actions';

const IncidentReportForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [severity, setSeverity] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        // Convert checkbox values to boolean or string if needed
        // For now, let's just use the action
        try {
            await submitIncidentReport(formData);
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
                <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fas fa-check"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Incident Logged Successfully</h2>
                <p className="text-slate-600 mb-8 text-lg">The incident has been recorded and flagged for management review.</p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-rose-600 text-white font-bold rounded-xl shadow-md hover:bg-rose-700 transition"
                    >
                        File Another Incident
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
            {/* Module 1: Basic Information */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-file-medical mr-3"></i>1. Incident Basic Information</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Reporting Person <span className="text-rose-600">*</span>
                        </label>
                        <input type="text" name="reporter_name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Designation <span className="text-rose-600">*</span>
                        </label>
                        <select name="reporter_role" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition">
                            <option value="">Select Designation</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Staff">Staff</option>
                            <option value="Principal">Principal</option>
                            <option value="Security">Security</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Incident Date <span className="text-rose-600">*</span></label>
                        <input type="date" name="incident_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Incident Time <span className="text-rose-600">*</span></label>
                        <input type="time" name="incident_time" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location <span className="text-rose-600">*</span></label>
                        <input type="text" name="location" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition" placeholder="e.g. Playground, Class 10A" />
                    </div>
                </div>
            </section>

            {/* Module 2: Classification */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-map-marker-alt mr-3"></i>2. Classification</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Incident Type <span className="text-rose-600">*</span></label>
                        <select name="incident_type" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500">
                            <option value="">Select Type</option>
                            <option value="Accident/Injury">Accident/Injury</option>
                            <option value="Bullying">Bullying</option>
                            <option value="Violence">Violence</option>
                            <option value="Medical">Medical Emergency</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Severity Level <span className="text-rose-600">*</span></label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Low', 'Medium', 'High', 'Critical'].map((level) => (
                                <label key={level} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${severity === level ? 'bg-rose-50 border-rose-500' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
                                    <input
                                        type="radio"
                                        name="severity"
                                        value={level}
                                        required
                                        onChange={(e) => setSeverity(e.target.value)}
                                        className="sr-only"
                                    />
                                    <span className="text-sm font-bold text-slate-700">{level}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Module 3: Description */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-clipboard-list mr-3"></i>3. Incident Details</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Description <span className="text-rose-600">*</span></label>
                        <textarea name="description" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500" placeholder="What happened?"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Immediate Actions Taken <span className="text-rose-600">*</span></label>
                        <textarea name="immediate_action" required rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500" placeholder="What was done immediately?"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Parties Involved</label>
                        <textarea name="involved_parties" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500" placeholder="Names of students/staff involved..."></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Witnesses</label>
                        <textarea name="witnesses" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500" placeholder="Names of witnesses..."></textarea>
                    </div>
                </div>
            </section>

            {/* Submission */}
            <div className="flex flex-col md:flex-row gap-4 pt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-grow bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-paper-plane mr-2"></i>}
                    Log Critical Incident
                </button>
                <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-8 bg-white text-slate-700 font-bold py-4 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition"
                >
                    <i className="fas fa-print mr-2"></i> Print Report
                </button>
            </div>
        </form>
    );
};

export default IncidentReportForm;
