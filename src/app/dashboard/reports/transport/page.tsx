import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

async function getTransportReports() {
    const supabase = await createClient();
    const { data } = await supabase
        .from('transport_reports')
        .select('*')
        .order('created_at', { ascending: false });
    return data || [];
}

export default async function TransportReportsPage() {
    const reports = await getTransportReports();

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/reports" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Logistics & Services</h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">Vehicle Logs, Routes, and Facility Maintenance</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-amber-50/50 border-b border-amber-100/50">
                                <th className="px-6 py-4 text-[10px] font-bold text-amber-600 uppercase tracking-widest">Route / Vehicle</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-amber-600 uppercase tracking-widest">Manager</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-amber-600 uppercase tracking-widest text-center">Fuel</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-amber-600 uppercase tracking-widest text-center">Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold text-amber-600 uppercase tracking-widest text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-amber-50/10 transition-colors group text-sm font-medium">
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col">
                                            <span className="text-slate-900 font-bold">Route: {report.route_id}</span>
                                            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{report.vehicle_number}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-slate-700 font-bold">{report.route_manager}</span>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <i className="fas fa-gas-pump text-amber-500 text-[10px]"></i>
                                            <span className="text-slate-900 font-black">{report.fuel_consumed || 0}L</span>
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
                                            href={`/dashboard/reports/transport/${report.id}`}
                                            className="px-4 py-2 bg-amber-50 text-amber-600 rounded-lg text-xs font-bold hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                                        >
                                            View Logs
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {reports.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="w-16 h-16 bg-amber-50 text-amber-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                            <i className="fas fa-truck-front"></i>
                        </div>
                        <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wide">No Logistics Data Reported</h4>
                    </div>
                )}
            </div>
        </div>
    );
}
