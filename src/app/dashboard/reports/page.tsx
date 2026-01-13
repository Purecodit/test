import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

async function getAllReports() {
    const supabase = await createClient();

    // Fetch all reports from all tables and combine them
    // This is a bit complex in SQL, for now let's fetch them separately and merge
    // In a real app, you might want a 'reports' union view

    const [
        { data: teacher },
        { data: incident },
        { data: transport },
        { data: principal },
        { data: admin }
    ] = await Promise.all([
        supabase.from('teacher_reports').select('*').order('created_at', { ascending: false }).limit(10),
        supabase.from('incident_reports').select('*').order('created_at', { ascending: false }).limit(10),
        supabase.from('transport_reports').select('*').order('created_at', { ascending: false }).limit(10),
        supabase.from('principal_reports').select('*').order('created_at', { ascending: false }).limit(10),
        supabase.from('admin_reports').select('*').order('created_at', { ascending: false }).limit(10)
    ]);

    const allReports = [
        ...(teacher || []).map(r => ({ ...r, type: 'Teacher', icon: 'fas fa-chalkboard-user', color: 'sky' })),
        ...(incident || []).map(r => ({ ...r, type: 'Incident', icon: 'fas fa-exclamation-triangle', color: 'rose' })),
        ...(transport || []).map(r => ({ ...r, type: 'Transport', icon: 'fas fa-bus', color: 'amber' })),
        ...(principal || []).map(r => ({ ...r, type: 'Principal', icon: 'fas fa-user-shield', color: 'purple' })),
        ...(admin || []).map(r => ({ ...r, type: 'Admin', icon: 'fas fa-briefcase', color: 'teal' }))
    ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return allReports;
}

export default async function ReportsHistoryPage() {
    const reports = await getAllReports();

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Recent Submissions</h2>
                    <p className="text-sm text-slate-500 font-medium mt-1">Real-time feed across all school departments.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <i className="fas fa-filter"></i> Filter
                    </button>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                        <i className="fas fa-download"></i> Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Report Type</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Submitted By</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date / Time</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm ${report.color === 'sky' ? 'bg-sky-50 text-sky-600' :
                                                report.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                                                    report.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                                                        report.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                                                            'bg-teal-50 text-teal-600'
                                                }`}>
                                                <i className={report.icon}></i>
                                            </div>
                                            <span className="font-bold text-slate-700 text-sm">{report.type}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-semibold text-slate-600">
                                            {report.teacher_name || report.reporter_name || report.principal_name || report.admin_name || report.route_manager || 'Unknown'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-700">{new Date(report.created_at).toLocaleDateString()}</span>
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">{new Date(report.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${report.submission_status === 'pending' || !report.submission_status ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                report.submission_status === 'resolved' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                    report.submission_status === 'flagged' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                                                        'bg-sky-50 text-sky-600 border-sky-100' // reviewed
                                            }`}>
                                            {report.submission_status || 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <Link
                                            href={`/dashboard/reports/${report.type.toLowerCase()}/${report.id}`}
                                            className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-brand-600 hover:text-white transition-all transform group-active:scale-95 shadow-sm"
                                        >
                                            Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {reports.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            <i className="fas fa-inbox"></i>
                        </div>
                        <h4 className="text-slate-900 font-bold">No reports found</h4>
                        <p className="text-slate-400 text-sm font-medium">When staff submit forms, they will appear here.</p>
                    </div>
                )}

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Showing {reports.length} Recent Submissions</span>
                    <div className="flex gap-2">
                        <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-colors cursor-not-allowed">
                            <i className="fas fa-chevron-left text-xs"></i>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-colors cursor-not-allowed">
                            <i className="fas fa-chevron-right text-xs"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
