"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DirectorReviewProps {
    table: string;
    id: string;
    initialStatus?: string;
    initialNotes?: string;
}

export default function DirectorReview({ table, id, initialStatus, initialNotes }: DirectorReviewProps) {
    const [notes, setNotes] = useState(initialNotes || '');
    const [status, setStatus] = useState(initialStatus || 'pending');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const router = useRouter();

    const handleSave = async () => {
        setLoading(true);
        setMessage(null);
        try {
            const response = await fetch('/api/reports', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ table, id, status, notes }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to save review.');
            }

            setMessage({ type: 'success', text: 'Review saved successfully!' });
            router.refresh(); // Re-fetches data on the current page
        } catch (error: any) {
            setMessage({ type: 'error', text: error.message || 'Failed to save review.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-900 rounded-[2rem] p-8 shadow-2xl text-white">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                <i className="fas fa-user-tie text-brand-400"></i>
                Director's Official Review
            </h3>

            <div className="space-y-6">
                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                        Processing Status
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {['pending', 'reviewed', 'resolved', 'flagged'].map((s) => (
                            <button
                                key={s}
                                onClick={() => setStatus(s)}
                                className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${status === s
                                        ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">
                        Director's Notes & Instructions
                    </label>
                    <textarea
                        className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 text-sm text-slate-300 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                        placeholder="Add director's notes or instructions here..."
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                </div>

                {message && (
                    <div className={`p-4 rounded-xl text-xs font-bold flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                        }`}>
                        <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                        {message.text}
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="sr-only" />
                            <div className="w-5 h-5 rounded border border-slate-700 bg-slate-800 flex items-center justify-center text-[10px] text-brand-400 group-hover:border-brand-500 transition-colors">
                                <i className="fas fa-check opacity-0 group-hover:opacity-100"></i>
                            </div>
                            <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200">Notify Reporter</span>
                        </label>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="px-8 py-3 bg-brand-600 rounded-xl text-xs font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading && <i className="fas fa-spinner fa-spin"></i>}
                        Save Review
                    </button>
                </div>
            </div>
        </div>
    );
}
