"use server";

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateReportStatus(
    table: string,
    id: string,
    status: string,
    notes?: string
) {
    const supabase = await createClient();

    const { error } = await supabase
        .from(table)
        .update({
            submission_status: status,
            director_notes: notes,
        })
        .eq('id', id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath(`/dashboard/reports/${table.replace('_reports', '')}/${id}`);
    revalidatePath(`/dashboard/reports/${table.replace('_reports', '')}`);
    revalidatePath('/dashboard/reports');
    revalidatePath('/dashboard');

    return { success: true };
}
