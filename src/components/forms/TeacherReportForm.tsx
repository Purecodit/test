"use client";

import React, { useState } from 'react';
import { submitTeacherReport } from '@/lib/actions';

const TeacherReportForm = () => {
    const [isTestConducted, setIsTestConducted] = useState(false);
    const [hasDisciplineIssues, setHasDisciplineIssues] = useState(false);
    const [hasComplaints, setHasComplaints] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);

        try {
            await submitTeacherReport(formData);
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
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fas fa-check"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Report Submitted Successfully!</h2>
                <p className="text-slate-600 mb-8 text-lg">Your weekly class report has been logged in the central ERP database.</p>
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
            {/* Module 1: Teacher & Class Metadata */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-user-tie mr-3"></i>1. Teacher & Class Metadata</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Teacher Name <span className="text-rose-500">*</span>
                        </label>
                        <input type="text" name="teacher_name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                        <input type="text" name="employee_id" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Class / Grade <span className="text-rose-500">*</span>
                        </label>
                        <select name="class_grade" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition">
                            <option value="">Select Class</option>
                            {['Nursery', 'KG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map(c => (
                                <option key={c} value={c}>{c === 'KG' || c === 'Nursery' ? c : `Grade ${c}`}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                        <input type="text" name="section" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Academic Session</label>
                        <input type="text" name="academic_session" placeholder="e.g. 2024-25" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Week Start Date <span className="text-rose-500">*</span>
                        </label>
                        <input type="date" name="week_start_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Week End Date <span className="text-rose-500">*</span>
                        </label>
                        <input type="date" name="week_end_date" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition" />
                    </div>
                </div>
            </section>

            {/* Module 2: Attendance Intelligence */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-user-check mr-3"></i>2. Attendance Intelligence</h2>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Enrolled Students</label>
                        <input type="number" name="total_enrolled" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Avg Attendance %</label>
                        <input type="number" name="avg_attendance" step="0.1" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Below 75% Attendance</label>
                        <input type="number" name="low_attendance_students" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Attendance Trend</label>
                        <select name="attendance_trend" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500">
                            <option value="">Select Trend</option>
                            <option value="Improving">Improving</option>
                            <option value="Stable">Stable</option>
                            <option value="Declining">Declining</option>
                        </select>
                    </div>
                </div>
                <div className="px-6 pb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Attendance Issues</label>
                    <textarea name="attendance_issues" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500" placeholder="Note any patterns..."></textarea>
                </div>
            </section>

            {/* Module 3: Syllabus Progress */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-tasks mr-3"></i>3. Syllabus Progress</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject(s) Covered</label>
                        <textarea name="subjects_covered" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Planned Syllabus</label>
                            <textarea name="planned_syllabus" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Actual Completed</label>
                            <textarea name="actual_syllabus" rows={2} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"></textarea>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Completion Status</label>
                        <select name="completion_status" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 transition">
                            <option value="">Select Status</option>
                            <option value="Completed">Completed</option>
                            <option value="Partially Completed">Partially Completed</option>
                            <option value="Delayed">Delayed</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Module 4: Assessment */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-clipboard-check mr-3"></i>4. Assessment Module</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Was Any Class Test Conducted? <span className="text-rose-500">*</span>
                        </label>
                        <div className="flex p-1 bg-gray-100 rounded-lg w-fit">
                            <button
                                type="button"
                                onClick={() => setIsTestConducted(true)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${isTestConducted ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-700'}`}
                            >Yes</button>
                            <button
                                type="button"
                                onClick={() => setIsTestConducted(false)}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${!isTestConducted ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-700'}`}
                            >No</button>
                            <input type="hidden" name="test_conducted" value={isTestConducted ? 'Yes' : 'No'} />
                        </div>
                    </div>

                    {isTestConducted && (
                        <div className="space-y-6 border-t pt-6 animate-fadeIn">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Test Type</label>
                                    <select name="test_type" className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                                        <option value="">Select Type</option>
                                        <option value="Class Test">Class Test</option>
                                        <option value="Unit Test">Unit Test</option>
                                        <option value="Oral Test">Oral Test</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
                                    <input type="text" name="subject_name" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Avg Score (%)</label>
                                    <input type="number" name="avg_score" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Students Below Passing</label>
                                    <input type="number" name="below_passing" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Module 5: Discipline */}
            <section className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4">
                    <h2 className="text-xl font-bold"><i className="fas fa-balance-scale mr-3"></i>5. Discipline & Behaviour</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Any Discipline Issues?</label>
                        <div className="flex p-1 bg-gray-100 rounded-lg w-fit">
                            <button type="button" onClick={() => setHasDisciplineIssues(true)} className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${hasDisciplineIssues ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-700'}`}>Yes</button>
                            <button type="button" onClick={() => setHasDisciplineIssues(false)} className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${!hasDisciplineIssues ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-700'}`}>No</button>
                            <input type="hidden" name="discipline_issues" value={hasDisciplineIssues ? 'Yes' : 'No'} />
                        </div>
                    </div>
                    {hasDisciplineIssues && (
                        <div className="space-y-6 border-t pt-6 animate-fadeIn">
                            <textarea name="issue_description" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-lg" placeholder="Describe the issue..."></textarea>
                        </div>
                    )}
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
                    Submit Weekly Report
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

export default TeacherReportForm;
