import { NextResponse } from 'next/server';
import { readSubmissions } from '../../../lib/submissions';

export async function GET() {
  try {
    const submissions = await readSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Unable to load submissions', error);
    return NextResponse.json({ error: 'Unable to load submissions.' }, { status: 500 });
  }
}
