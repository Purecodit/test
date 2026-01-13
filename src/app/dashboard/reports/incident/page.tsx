import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

async function getIncidentReports() {
    const supabase = await createClient();
    const { data } = await supabase
        .from('incident_reports')
        .select('*')
        .order('created_at', { ascending: false });
    return data || [];
}

export default async function IncidentReportsPage() {
    const reports = await getIncidentReports();

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/reports" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Incident Logs</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">Safety & Emergency Response Monitoring</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 px-4 py-2 rounded-2xl">
                    <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-rose-700 uppercase tracking-widest">Live Monitoring Active</span>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-rose-50/50 border-b border-rose-100/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-rose-600 uppercase tracking-widest">Severity</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-rose-600 uppercase tracking-widest">Incident</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-rose-600 uppercase tracking-widest text-center">Date</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-rose-600 uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-rose-600 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-rose-50/10 transition-colors group text-sm font-medium">
                                    <td className="px-6 py-5">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${report.severity === 'Critical' ? 'bg-rose-600 text-white' :
                                            report.severity === 'High' ? 'bg-orange-500 text-white' :
                                                report.severity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                                                    'bg-slate-100 text-slate-600'
                                            }`}>
                                            {report.severity}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-slate-900 font-bold">{report.incident_type}</span>
                                            <span className="text-slate-400 text-[10px] font-bold uppercase"><i className="fas fa-map-marker-alt mr-1"></i> {report.location}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex flex-col">
                                            <span className="text-slate-700 font-bold">{new Date(report.incident_date).toLocaleDateString()}</span>
                                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{report.incident_time}</span>
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
                                            href={`/dashboard/reports/incident/${report.id}`}
                                            className="px-4 py-2 bg-rose-50 text-rose-600 rounded-lg text-xs font-bold hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                                        >
                                            View Alert
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {reports.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            <i className="fas fa-shield-halved"></i>
                        </div>
                        <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">Safe School: No Incidents Reported</h4>
                    </div>
                )}
            </div>
        </div>
    );
}
