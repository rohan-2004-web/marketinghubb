import { NextRequest, NextResponse } from 'next/server';
import { addSubmission } from '@/lib/submissions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Add submission
    const submission = await addSubmission({
      name,
      email,
      phone,
      service: service || 'general',
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        submission,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process form' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
