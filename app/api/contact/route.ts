import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  createdAt: string;
}

const dataDir = path.join(process.cwd(), 'data');
const submissionsFile = path.join(dataDir, 'submissions.json');

async function ensureDir() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }
}

async function readSubmissions(): Promise<Submission[]> {
  try {
    await ensureDir();
    const content = await fs.readFile(submissionsFile, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.log('Creating new submissions file');
    return [];
  }
}

async function writeSubmissions(submissions: Submission[]) {
  try {
    await ensureDir();
    await fs.writeFile(
      submissionsFile,
      JSON.stringify(submissions, null, 2),
      'utf-8'
    );
    console.log('✅ Saved', submissions.length, 'submissions');
  } catch (error) {
    console.error('Write error:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('📨 API called');
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('Data received:', { name, email, phone, service });

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const submission: Submission = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: service.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    console.log('📝 New submission:', submission.id);

    const submissions = await readSubmissions();
    console.log('📋 Current count:', submissions.length);

    submissions.unshift(submission);

    await writeSubmissions(submissions);

    console.log('✅ Saved successfully');

    return NextResponse.json(
      { success: true, submission },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      {
        error: 'Unable to save submission',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
