"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/dashboard');
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/5 rounded-full blur-[120px]"></div>

            <div className="w-full max-w-md relative animate-slide-up">
                {/* Logo Area */}
                <div className="text-center mb-8">
                    <div className="inline-block relative mb-4">
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-purple rounded-full blur opacity-25"></div>
                        <Image
                            src="/img/logo.webp"
                            alt="Logo"
                            width={80}
                            height={80}
                            className="relative rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Director <span className="text-brand-600">Portal</span></h1>
                    <p className="text-slate-500 mt-2 font-medium">Secure School Management ERP</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm flex items-center gap-3 animate-shake">
                                <i className="fas fa-exclamation-circle text-lg"></i>
                                <span>{error}</span>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Work Email</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-500 text-slate-400 transition-colors">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="name@school.edu"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2 ml-1">
                                <label className="text-sm font-bold text-slate-700">Security Key</label>
                                <a href="#" className="text-[11px] font-bold text-brand-600 hover:text-brand-700 uppercase tracking-wider">Forgot?</a>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-500 text-slate-400 transition-colors">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg transition-all transform hover:translate-y-[-2px] active:translate-y-[0px] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {loading ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                <>
                                    <span>Access Dashboard</span>
                                    <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer Info */}
                <div className="text-center mt-8">
                    <p className="text-slate-400 text-xs font-medium">
                        Guru Nanak School Management ERP <br />
                        <span className="opacity-70 mt-1 block">Authorized Personnel Only</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
