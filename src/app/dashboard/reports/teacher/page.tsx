import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

async function getTeacherReports() {
    const supabase = await createClient();
    const { data } = await supabase
        .from('teacher_reports')
        .select('*')
        .order('created_at', { ascending: false });
    return data || [];
}

export default async function TeacherReportsPage() {
    const reports = await getTeacherReports();

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/reports" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Teacher's Reports</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">Academic & Classroom Monitoring Logs</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-sky-50/50 border-b border-sky-100/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-sky-600 uppercase tracking-widest">Teacher Info</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-sky-600 uppercase tracking-widest">Grade / Section</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-sky-600 uppercase tracking-widest">Attendance</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-sky-600 uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-sky-600 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-sky-50/10 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-700 text-sm">{report.teacher_name}</span>
                                            <span className="text-[10px] text-slate-400 font-bold tracking-wider">ID: {report.employee_id}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-bold mr-2 uppercase">{report.class_grade}</span>
                                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-bold uppercase">{report.section}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm font-bold ${Number(report.avg_attendance) < 75 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                                {report.avg_attendance}%
                                            </span>
                                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${Number(report.avg_attendance) < 75 ? 'bg-rose-500' : 'bg-emerald-500'}`} style={{ width: `${report.avg_attendance}%` }}></div>
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
                                            href={`/dashboard/reports/teacher/${report.id}`}
                                            className="px-4 py-2 bg-sky-50 text-sky-600 rounded-lg text-xs font-bold hover:bg-sky-600 hover:text-white transition-all shadow-sm"
                                        >
                                            Review
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {reports.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-16 h-16 bg-sky-50 text-sky-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            <i className="fas fa-file-signature"></i>
                        </div>
                        <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">No Academic Reports Yet</h4>
                    </div>
                )}
            </div>
        </div>
    );
}
