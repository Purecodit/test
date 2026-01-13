import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

async function getAdminReports() {
    const supabase = await createClient();
    const { data } = await supabase
        .from('admin_reports')
        .select('*')
        .order('created_at', { ascending: false });
    return data || [];
}

export default async function AdminReportsPage() {
    const reports = await getAdminReports();

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/reports" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Admin Operations</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">General Office & Resource Inventory Monitoring</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-teal-50/50 border-b border-teal-100/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-teal-600 uppercase tracking-widest">Admin Staff</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-teal-600 uppercase tracking-widest">Department</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-teal-600 uppercase tracking-widest">Tasks Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-teal-600 uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-teal-600 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-teal-50/10 transition-colors group text-sm font-medium">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-slate-900 font-bold">{report.admin_name}</span>
                                            <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{report.employee_id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold uppercase border border-slate-200">{report.department}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Completed</span>
                                                <span className="text-emerald-600 font-black">{report.tasks_completed}</span>
                                            </div>
                                            <div className="h-6 w-px bg-slate-100"></div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pending</span>
                                                <span className="text-rose-500 font-black">{report.pending_tasks}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${report.submission_status === 'pending' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                                report.submission_status === 'resolved' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                                                    report.submission_status === 'flagged' ? 'bg-rose-50 text-rose-600 border border-rose-100' :
                                                        'bg-sky-50 text-sky-600 border border-sky-100' // reviewed
                                            }`}>
                                            {report.submission_status || 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <Link
                                            href={`/dashboard/reports/admin/${report.id}`}
                                            className="px-4 py-2 bg-teal-50 text-teal-600 rounded-lg text-xs font-bold hover:bg-teal-600 hover:text-white transition-all shadow-sm"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {reports.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-16 h-16 bg-teal-50 text-teal-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            <i className="fas fa-building-circle-check"></i>
                        </div>
                        <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">No Administrative Reports Filed</h4>
                    </div>
                )}
            </div>
        </div>
    );
}
