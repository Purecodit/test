import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DirectorReview from '@/components/dashboard/DirectorReview';

export default async function TeacherDetailPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { id } = await params;

    const { data: report } = await supabase
        .from('teacher_reports')
        .select('*')
        .eq('id', id)
        .single();

    if (!report) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/reports/teacher" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Teacher's Report Detail</h2>
                        <p className="text-sm text-slate-500 font-medium">Ref: {report.id.slice(0, 8).toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <i className="fas fa-print"></i> Print PDF
                    </button>
                    <button className="px-6 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-bold hover:bg-sky-700 transition-all flex items-center gap-2 shadow-lg shadow-sky-600/20">
                        <i className="fas fa-check"></i> Quick Acknowledge
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-sky-600 px-8 py-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-xl backdrop-blur-md">
                            <i className="fas fa-chalkboard-user"></i>
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Academic Monitoring</span>
                            <h3 className="text-xl font-bold mt-0.5">{report.teacher_name}</h3>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 block">Grade / Section</span>
                        <span className="text-lg font-black">{report.class_grade} - {report.section}</span>
                    </div>
                </div>

                <div className="p-8 space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Avg. Attendance</span>
                            <p className={`text-2xl font-black ${Number(report.avg_attendance) < 75 ? 'text-rose-500' : 'text-sky-600'}`}>
                                {report.avg_attendance}%
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Syllabus Progress</span>
                            <p className="text-2xl font-black text-slate-900">{report.syllabus_status || report.completion_status || 0}%</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Submission Date</span>
                            <p className="text-sm font-bold text-slate-900">{new Date(report.created_at).toLocaleDateString()}</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{new Date(report.created_at).toLocaleTimeString()}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-sky-500 rounded-full"></span>
                            Classroom Observation
                        </h4>
                        <div className="bg-slate-50 rounded-2xl p-6 text-slate-700 leading-relaxed font-medium">
                            {report.classroom_observation || report.issue_description || "No specific observations recorded for this week."}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Pending Topics</h4>
                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                                    {report.pending_topics || report.delay_reason || "Syllabus is on track."}
                                </p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Support Needed</h4>
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                                <p className="text-sm font-semibold text-indigo-900 leading-relaxed">
                                    {report.resource_needs || "No additional resources requested."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DirectorReview
                table="teacher_reports"
                id={report.id}
                initialStatus={report.submission_status}
                initialNotes={report.director_notes}
            />
        </div>
    );
}
