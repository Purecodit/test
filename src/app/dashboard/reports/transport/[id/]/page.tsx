import React from 'react';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import DirectorReview from '@/components/dashboard/DirectorReview';

export default async function TransportDetailPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { id } = await params;

    const { data: report } = await supabase
        .from('transport_reports')
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
                    <Link href="/dashboard/reports/transport" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-600 transition-all">
                        <i className="fas fa-arrow-left text-sm"></i>
                    </Link>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Logistics & Services Detail</h2>
                        <p className="text-sm text-slate-500 font-medium">Route: {report.route_id} • Manager: {report.route_manager}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2">
                        <i className="fas fa-print"></i> Print PDF
                    </button>
                    <button className="px-6 py-2.5 bg-amber-600 text-white rounded-xl text-xs font-bold hover:bg-amber-700 transition-all flex items-center gap-2 shadow-lg shadow-amber-600/20">
                        <i className="fas fa-clipboard-check"></i> Quick Verify
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-amber-600 px-8 py-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-xl backdrop-blur-md border border-white/30">
                            <i className="fas fa-bus"></i>
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Vehicle Operations</span>
                            <h3 className="text-xl font-bold mt-0.5">{report.vehicle_number}</h3>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 block">Fuel Consumption</span>
                        <span className="text-lg font-black">{report.fuel_consumed} Liters</span>
                    </div>
                </div>

                <div className="p-8 space-y-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">Distance</span>
                            <p className="text-xl font-black text-slate-900">{report.distance_covered || 0} KM</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">Service Status</span>
                            <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase ${report.vehicle_status === 'Optimal' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                                }`}>{report.vehicle_status || 'Optimal'}</span>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">Staff Cleaning</span>
                            <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase ${report.is_cleaning_done ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-400'
                                }`}>{report.is_cleaning_done ? 'COMPLETED' : 'PENDING'}</span>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-2">Water Service</span>
                            <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase ${report.is_water_service_done ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-400'
                                }`}>{report.is_water_service_done ? 'COMPLETED' : 'PENDING'}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <i className="fas fa-oil-can text-amber-500"></i> Logistical Notes
                            </h4>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-sm font-medium text-slate-700 leading-relaxed shadow-sm">
                                {report.logistics_notes || report.incidents_on_route || "No significant transport issues reported."}
                            </div>
                        </section>
                        <section>
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <i className="fas fa-broom text-sky-500"></i> Sanitation & Facility
                            </h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100">
                                    <span className="text-[9px] font-bold text-sky-600 uppercase block mb-1">Campus Staff Present</span>
                                    <p className="text-sm text-slate-700 font-bold">{report.cleaning_staff_count || 0} Personnel Logged</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">Facility Observations</span>
                                    <p className="text-xs text-slate-600 font-medium italic">"{report.cleaning_remarks || report.cleaning_status || "Standard cleaning procedures followed."}"</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
                        <div className="absolute left-0 bottom-0 p-4 opacity-5">
                            <i className="fas fa-gas-pump text-7xl text-white"></i>
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-white font-bold text-lg mb-1">Expense Summary</h4>
                            <p className="text-slate-500 text-xs font-medium uppercase tracking-widest">Calculated based on fuel consumption: {report.fuel_consumed || 0}L</p>
                        </div>
                        <div className="relative z-10 text-right">
                            <span className="text-brand-400 text-4xl font-black">₹ {(Number(report.fuel_consumed || 0) * 94).toLocaleString()}</span>
                            <span className="text-[9px] font-bold text-slate-500 block uppercase mt-1 tracking-widest">Approx. Fuel Cost (@₹94/L)</span>
                        </div>
                    </div>
                </div>
            </div>

            <DirectorReview
                table="transport_reports"
                id={report.id}
                initialStatus={report.submission_status}
                initialNotes={report.director_notes}
            />
        </div>
    );
}
