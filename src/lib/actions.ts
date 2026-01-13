"use server";

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function submitTeacherReport(formData: FormData) {
    const supabase = await createClient();
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase
        .from('teacher_reports')
        .insert([data]);

    if (error) throw error;
    return { success: true };
}

export async function submitIncidentReport(formData: FormData) {
    const supabase = await createClient();
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase
        .from('incident_reports')
        .insert([data]);

    if (error) throw error;
    return { success: true };
}

export async function submitTransportReport(formData: FormData) {
    const supabase = await createClient();
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase
        .from('transport_reports')
        .insert([data]);

    if (error) throw error;
    return { success: true };
}

export async function submitPrincipalReport(formData: FormData) {
    const supabase = await createClient();
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase
        .from('principal_reports')
        .insert([data]);

    if (error) throw error;
    return { success: true };
}

export async function submitAdminReport(formData: FormData) {
    const supabase = await createClient();
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase
        .from('admin_reports')
        .insert([data]);

    if (error) throw error;
    return { success: true };
}

export async function signOut() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    redirect('/login');
}
