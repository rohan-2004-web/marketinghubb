import { NextRequest, NextResponse } from 'next/server';
import { readSubmissions, writeSubmissions, Submission } from '../../../lib/submissions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body || {};

    console.log('📨 Received submission:', { name, email, phone, service, message });

    if (!name || !email || !phone || !service || !message) {
      console.warn('⚠️ Validation failed - Missing required fields');
      return NextResponse.json({ error: 'Name, email, phone, service, and message are required.' }, { status: 400 });
    }

    const newSubmission: Submission = {
      id: crypto.randomUUID(),
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      service: String(service).trim(),
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    console.log('✅ Creating submission:', newSubmission.id);
    
    const submissions = await readSubmissions();
    console.log('📋 Current submissions count:', submissions.length);
    
    submissions.unshift(newSubmission);
    await writeSubmissions(submissions);
    
    console.log('💾 Submission saved successfully. Total submissions:', submissions.length);
    return NextResponse.json({ success: true, submission: newSubmission }, { status: 201 });
  } catch (error) {
    console.error('❌ Error saving submission:', error);
    return NextResponse.json({ 
      error: 'Unable to save submission.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
