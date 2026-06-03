import { NextRequest, NextResponse } from 'next/server';
import { readSubmissions } from '@/lib/submissions';

export async function GET() {
  try {
    const submissions = await readSubmissions();
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      { error: 'Failed to read submissions' },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
