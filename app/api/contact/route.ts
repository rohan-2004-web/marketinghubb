import { NextRequest, NextResponse } from 'next/server';
import { readSubmissions, writeSubmissions, Submission } from '../../../lib/submissions';

export async function POST(request: NextRequest) {
  console.log('🔵 POST /api/contact called');
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body || {};

    console.log('📨 Received data:', { name, email, phone, service, message: message?.substring(0, 20) + '...' });

    // Validation
    if (!name || !email || !phone || !service || !message) {
      console.warn('⚠️ Validation failed');
      return NextResponse.json(
        { error: 'Name, email, phone, service, and message are required.' }, 
        { status: 400 }
      );
    }

    // Create submission
    const newSubmission: Submission = {
      id: crypto.randomUUID(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      service: String(service).trim(),
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    console.log('✏️ Created submission object:', newSubmission.id);
    
    // Read existing submissions
    const submissions = await readSubmissions();
    console.log('📋 Read', submissions.length, 'existing submissions');
    
    // Add new submission
    submissions.unshift(newSubmission);
    console.log('➕ Added new submission, total now:', submissions.length);
    
    // Write submissions
    await writeSubmissions(submissions);
    console.log('✅ Successfully saved submission');
    
    return NextResponse.json({ 
      success: true, 
      submission: newSubmission,
      totalCount: submissions.length 
    }, { status: 201 });
  } catch (error) {
    console.error('❌ Error in POST /api/contact:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ 
      error: 'Unable to save submission.',
      details: errorMessage
    }, { status: 500 });
  }
}
