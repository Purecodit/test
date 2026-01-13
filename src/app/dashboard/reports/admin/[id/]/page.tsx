import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DirectorReview from '@/components/dashboard/DirectorReview';

export default async function AdminDetailPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { id } = await params;

    const { data: report } = await supabase
        .from('admin_reports')
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
                    <Link href="/dashboard/reports/admin" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Admin Operations Detail</h2>
                        <p className="text-sm text-slate-500 font-medium">{report.department} • {report.admin_name}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <i className="fas fa-print"></i> Print PDF
                    </button>
                    <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-all flex items-center gap-2 shadow-lg shadow-teal-600/20">
                        <i className="fas fa-check"></i> File Acknowledged
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-teal-600 px-8 py-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-xl backdrop-blur-md border border-white/30">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Departmental Operations</span>
                            <h3 className="text-xl font-bold mt-0.5">{report.department}</h3>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 block">Efficiency Rate</span>
                        <span className="text-lg font-black">{Math.round((report.tasks_completed / (report.tasks_completed + report.pending_tasks)) * 100)}%</span>
                    </div>
                </div>

                <div className="p-8 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Tasks Completed</span>
                            <p className="text-3xl font-black text-slate-900">{report.tasks_completed}</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Pending Items</span>
                            <p className="text-3xl font-black text-rose-500">{report.pending_tasks}</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Fee Collections</span>
                            <p className="text-3xl font-black text-emerald-600">₹{Number(report.fee_collections).toLocaleString()}</p>
                        </div>
                    </div>

                    <section className="space-y-6">
                        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-4 bg-teal-500 rounded-full"></span>
                            Weekly Accomplishments
                        </h4>
                        <div className="bg-teal-50/30 rounded-2xl p-6 border border-teal-100 text-slate-700 font-medium leading-relaxed">
                            {report.major_accomplishments}
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Challenges Faced</h4>
                            <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 text-sm font-bold text-rose-900">
                                {report.challenges_faced || "No critical challenges reported."}
                            </div>
                        </section>
                        <section>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Office Supplies</h4>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
                                <span className="text-sm font-bold text-slate-700">{report.office_supplies_status}</span>
                                <div className={`w-3 h-3 rounded-full ${report.office_supplies_status === 'Adequate' ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]' : 'bg-amber-500'}`}></div>
                            </div>
                        </section>
                    </div>

                    <div className="h-px bg-slate-100" />

                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-black uppercase tracking-widest">
                        <div className="flex items-center gap-4">
                            <span>System Availability: <span className="text-emerald-500">{report.system_availability}</span></span>
                            <span>•</span>
                            <span>Notes: {report.notes || "N/A"}</span>
                        </div>
                        <span>UID: {report.employee_id || "GNS-ADMIN"}</span>
                    </div>
                </div>
            </div>

            <DirectorReview
                table="admin_reports"
                id={report.id}
                initialStatus={report.submission_status}
                initialNotes={report.director_notes}
            />
        </div>
    );
}
