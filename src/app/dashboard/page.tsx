'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import DashboardCharts from '@/components/dashboard/DashboardCharts';

export const dynamic = 'force-dynamic';

interface Stats {
  teacher: number;
  incident: number;
  transport: number;
  principal: number;
  admin: number;
  total: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const supabase = createClient();
        
        const [
          { count: teacherCount = 0 },
          { count: incidentCount = 0 },
          { count: transportCount = 0 },
          { count: principalCount = 0 },
          { count: adminCount = 0 }
        ] = await Promise.all([
          supabase.from('teacher_reports').select('*', { count: 'exact', head: true }),
          supabase.from('incident_reports').select('*', { count: 'exact', head: true }),
          supabase.from('transport_reports').select('*', { count: 'exact', head: true }),
          supabase.from('principal_reports').select('*', { count: 'exact', head: true }),
          supabase.from('admin_reports').select('*', { count: 'exact', head: true })
        ]);

        const newStats = {
          teacher: teacherCount || 0,
          incident: incidentCount || 0,
          transport: transportCount || 0,
          principal: principalCount || 0,
          admin: adminCount || 0,
          total: (teacherCount || 0) + (incidentCount || 0) + (transportCount || 0) + 
                 (principalCount || 0) + (adminCount || 0)
        };

        setStats(newStats);
      } catch (err) {
        console.error('Error loading stats:', err);
        setError('Failed to load dashboard data. Please check your configuration and try again.');
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="p-6 text-center">
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-lg">
          <h3 className="text-lg font-medium">Error Loading Dashboard</h3>
          <p className="mt-2">{error}</p>
          <p className="mt-2 text-sm">
            Please make sure you have set up the required environment variables in your Vercel project settings.
          </p>
        </div>
      </div>
    );
  }

  // Show dashboard content
  if (!stats) {
    return null;
  }

  const chartData = [
    { name: 'Teacher', value: stats.teacher, color: '#0ea5e9' },
    { name: 'Incident', value: stats.incident, color: '#f43f5e' },
    { name: 'Transport', value: stats.transport, color: '#f59e0b' },
    { name: 'Principal', value: stats.principal, color: '#a855f7' },
    { name: 'Admin', value: stats.admin, color: '#14b8a6' },
  ].filter(d => d.value > 0);

  const cards = [
    { name: 'Teacher Reports', count: stats.teacher, icon: 'fas fa-chalkboard-user', color: 'sky', link: '/dashboard/reports/teacher' },
    { name: 'Incidents', count: stats.incident, icon: 'fas fa-exclamation-triangle', color: 'rose', link: '/dashboard/reports/incident' },
    { name: 'Logistics/Cleaning', count: stats.transport, icon: 'fas fa-bus', color: 'amber', link: '/dashboard/reports/transport' },
    { name: 'Executive Briefs', count: stats.principal, icon: 'fas fa-user-shield', color: 'purple', link: '/dashboard/reports/principal' },
    { name: 'Admin Operations', count: stats.admin, icon: 'fas fa-briefcase', color: 'teal', link: '/dashboard/reports/admin' },
  ];

    return (
        <div className="space-y-12 animate-fade-in pb-12">
            {/* Header / Hero */}
            <div className="bg-gradient-to-br from-brand-600 to-indigo-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-brand-500/20">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <i className="fas fa-university text-[12rem] -rotate-12 translate-x-8 translate-y-[-16px]"></i>
                </div>
                <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-white/20">
                        Directorate Management Portal
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">System Oversight</h2>
                    <p className="text-brand-100 max-w-xl font-semibold text-lg leading-relaxed">
                        Monitoring academic excellence and operational efficiency across all departments.
                        You have <span className="text-white border-b-2 border-brand-400">{stats.total} total reports</span> requiring your strategic review.
                    </p>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {cards.map((card) => (
                    <div key={card.name} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all transform hover:translate-y-[-8px] group relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-10 -mr-8 -mt-8 ${card.color === 'sky' ? 'bg-sky-500' :
                                card.color === 'rose' ? 'bg-rose-500' :
                                    card.color === 'amber' ? 'bg-amber-500' :
                                        card.color === 'purple' ? 'bg-purple-500' : 'bg-teal-500'
                            }`}></div>

                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all group-hover:scale-110 ${card.color === 'sky' ? 'bg-sky-50 text-sky-600' :
                            card.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                                card.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                                    card.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                                        'bg-teal-50 text-teal-600'
                            }`}>
                            <i className={card.icon}></i>
                        </div>
                        <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.15em] mb-2">{card.name}</h3>
                        <div className="flex items-end justify-between">
                            <span className="text-4xl font-black text-slate-900 leading-none">{card.count}</span>
                            <a href={card.link} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all shadow-sm">
                                <i className="fas fa-arrow-right text-xs"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Visual Analytics Section */}
            <DashboardCharts data={chartData} />

            {/* Critical Feed */}
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">System High-Alerts</h3>
                        <p className="text-sm text-slate-500 font-medium">Critical issues requiring immediate director intervention</p>
                    </div>
                    <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-slate-200 transition-all">Clear All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-6 p-6 bg-rose-50/50 rounded-3xl border border-rose-100 items-start group hover:bg-rose-50 transition-colors">
                        <div className="w-14 h-14 bg-rose-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-rose-200 animate-pulse-slow">
                            <i className="fas fa-exclamation-triangle"></i>
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Campus Safety</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">10m ago</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 leading-tight">Gymnasium Ceiling Leak</h4>
                            <p className="text-sm text-slate-600 font-medium mt-1">Maintenance required immediately to prevent electrical hazard.</p>
                            <div className="flex gap-3 mt-4">
                                <button className="px-4 py-2 bg-rose-600 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-rose-600/20">Dispatch Maintenance</button>
                                <button className="px-4 py-2 bg-white text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-200">View Details</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 p-6 bg-amber-50/50 rounded-3xl border border-amber-100 items-start group hover:bg-amber-50 transition-colors">
                        <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-amber-200">
                            <i className="fas fa-bus-alt"></i>
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Transport Alert</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">2h ago</span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 leading-tight">Route B-4 Engine Overheat</h4>
                            <p className="text-sm text-slate-600 font-medium mt-1">Bus #4522 stopped. Replacement dispatched. Parent notifications sent.</p>
                            <div className="flex gap-3 mt-4">
                                <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-amber-600/20">Track Replacement</button>
                                <button className="px-4 py-2 bg-white text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-200">Close Alert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
