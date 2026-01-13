import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DirectorReview from '@/components/dashboard/DirectorReview';

export default async function PrincipalDetailPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { id } = await params;

    const { data: report } = await supabase
        .from('principal_reports')
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
                    <Link href="/dashboard/reports/principal" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Executive Review Detail</h2>
                        <p className="text-sm text-slate-500 font-medium">Principal Office • {report.principal_name}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <i className="fas fa-print"></i> Print PDF
                    </button>
                    <button className="px-6 py-2.5 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-600/20">
                        <i className="fas fa-check"></i> Review Brief
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-purple-600 px-8 py-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-xl backdrop-blur-md border border-white/30">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Principal's Weekly Brief</span>
                            <h3 className="text-xl font-bold mt-0.5">{new Date(report.week_start_date).toLocaleDateString()} - {new Date(report.week_end_date).toLocaleDateString()}</h3>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 block">Staff Morale</span>
                        <span className="text-lg font-black italic">"{report.staff_morale}"</span>
                    </div>
                </div>

                <div className="p-8 space-y-12">
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Executive Summary</h4>
                        <p className="text-slate-700 font-medium leading-relaxed italic text-lg">
                            "{report.executive_summary}"
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] block">Syllabus Completion</span>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-black text-slate-900">{report.syllabus_completion}%</span>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${report.syllabus_completion}%` }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] block">Teacher Attendance</span>
                            <p className="text-2xl font-black text-slate-900">{report.teacher_attendance}%</p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] block">Fee Collection</span>
                            <p className="text-2xl font-black text-emerald-600">₹{Number(report.fee_collection).toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <i className="fas fa-star text-amber-500"></i> Academic Highlights
                            </h4>
                            <div className="text-sm font-medium text-slate-600 leading-relaxed">
                                {report.academic_highlights}
                            </div>
                        </section>
                        <section>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <i className="fas fa-bullseye text-rose-500"></i> Director Action Items
                            </h4>
                            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100 text-sm font-bold text-rose-900 leading-relaxed shadow-sm">
                                {report.director_action_items || "No immediate action items requested."}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <DirectorReview
                table="principal_reports"
                id={report.id}
                initialStatus={report.submission_status}
                initialNotes={report.director_notes}
            />
        </div>
    );
}
