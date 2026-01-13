import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { table, id, status, notes } = await request.json();

    if (!table || !id || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from(table)
      .update({
        submission_status: status,
        director_notes: notes,
      })
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error.message);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API route error:', error.message);
    return NextResponse.json({ error: 'Failed to update report status.' }, { status: 500 });
  }
}
