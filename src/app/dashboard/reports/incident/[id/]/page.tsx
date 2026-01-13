import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DirectorReview from '@/components/dashboard/DirectorReview';

export default async function IncidentDetailPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { id } = await params;

    const { data: incident } = await supabase
        .from('incident_reports')
        .select('*')
        .eq('id', id)
        .single();

    if (!incident) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/reports/incident" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Incident Detail</h2>
                        <p className="text-sm text-slate-500 font-medium">Report Ref: {incident.id.slice(0, 8).toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <i className="fas fa-print"></i> Print PDF
                    </button>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                {/* Banner */}
                <div className={`px-8 py-6 flex items-center justify-between ${incident.severity === 'Critical' ? 'bg-rose-600 text-white' :
                    incident.severity === 'High' ? 'bg-orange-500 text-white' :
                        'bg-slate-900 text-white'
                    }`}>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-xl backdrop-blur-md">
                            <i className="fas fa-exclamation-circle text-white"></i>
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Incident Classification</span>
                            <h3 className="text-xl font-bold leading-none mt-0.5">{incident.incident_type}</h3>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 block">Severity Level</span>
                        <span className="text-lg font-black">{incident.severity}</span>
                    </div>
                </div>

                <div className="p-8 space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Reporter Information</span>
                            <p className="text-slate-900 font-bold">{incident.reporter_name}</p>
                            <p className="text-xs text-slate-500 font-medium mt-1">{incident.reporter_role}</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Date & Time</span>
                            <p className="text-slate-900 font-bold">{new Date(incident.incident_date).toLocaleDateString()}</p>
                            <p className="text-xs text-slate-500 font-medium mt-1">{incident.incident_time}</p>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Location</span>
                            <p className="text-slate-900 font-bold">{incident.location}</p>
                            <p className="text-xs text-slate-500 font-medium mt-1 tracking-tight">Verified Campus Point</p>
                        </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Detailed Description</span>
                        <div className="bg-slate-50 rounded-2xl p-6 text-slate-700 leading-relaxed font-medium">
                            {incident.description}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                            <div className="flex items-center gap-3 mb-4 text-emerald-700">
                                <i className="fas fa-bolt-lightning"></i>
                                <span className="text-xs font-black uppercase tracking-wider">Immediate Actions Taken</span>
                            </div>
                            <p className="text-sm font-semibold text-emerald-900 leading-relaxed">
                                {incident.immediate_action}
                            </p>
                        </div>
                        <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                            <div className="flex items-center gap-3 mb-4 text-brand-700">
                                <i className="fas fa-users-viewfinder"></i>
                                <span className="text-xs font-black uppercase tracking-wider">Witness Testimony</span>
                            </div>
                            <p className="text-sm font-semibold text-brand-900 leading-relaxed">
                                {incident.witnesses || "No witnesses listed on file."}
                            </p>
                        </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            <i className="fas fa-clock"></i> Logged at: {new Date(incident.created_at).toLocaleString()}
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm ${incident.is_emergency ? 'bg-rose-50 text-rose-600 border border-rose-100' : 'bg-slate-100 text-slate-500'
                            }`}>
                            <i className="fas fa-life-ring"></i> Emergency: {incident.is_emergency ? 'YES' : 'NO'}
                        </div>
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm ${incident.follow_up_required ? 'bg-amber-50 text-amber-600 border border-amber-100' : 'bg-slate-100 text-slate-500'
                            }`}>
                            <i className="fas fa-calendar-check"></i> Follow-up: {incident.follow_up_required ? 'REQUIRED' : 'NOT REQUIRED'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Director Review Component */}
            <DirectorReview
                table="incident_reports"
                id={incident.id}
                initialStatus={incident.submission_status}
                initialNotes={incident.director_notes}
            />
        </div>
    );
}
