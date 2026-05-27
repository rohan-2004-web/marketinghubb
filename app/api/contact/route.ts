import { NextRequest, NextResponse } from 'next/server';
import { readSubmissions, writeSubmissions, type Submission } from '../../../lib/submissions';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    console.log('📨 Contact API called');
    const rawBody = await request.text();
    console.log('📦 Raw request body:', rawBody);

    let body: Partial<Submission>;
    try {
      body = JSON.parse(rawBody || '{}');
    } catch (parseError) {
      console.error('❌ Failed to parse request body:', parseError);
      return NextResponse.json(
        {
          error: 'Invalid JSON payload.',
          details:
            parseError instanceof Error
              ? parseError.message
              : 'Unable to parse request body.',
        },
        { status: 400 }
      );
    }

    const { name, email, phone, service, company, message, agree } = body;

    console.log('Data received:', { name, email, phone, service, company, agree });

    // Require core contact fields; `service` is optional now and may be provided as `company` instead
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone and message are required.' },
        { status: 400 }
      );
    }

    const submission: Submission = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service: (service || company || '').toString().trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const submissions = await readSubmissions();
    submissions.unshift(submission);
    await writeSubmissions(submissions);

    return NextResponse.json(
      { success: true, submission },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Contact API Error:', error);
    return NextResponse.json(
      {
        error: 'Unable to save submission',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
