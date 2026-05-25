import { NextRequest, NextResponse } from 'next/server';
import { readSubmissions, writeSubmissions, Submission } from '../../../lib/submissions';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const newSubmission: Submission = {
    id: crypto.randomUUID(),
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const submissions = await readSubmissions();
    submissions.unshift(newSubmission);
    await writeSubmissions(submissions);
    return NextResponse.json({ success: true, submission: newSubmission }, { status: 201 });
  } catch (error) {
    console.error('Unable to save submission', error);
    return NextResponse.json({ error: 'Unable to save submission.' }, { status: 500 });
  }
}
