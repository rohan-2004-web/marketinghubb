import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';

const storageRoot = process.env.SUBMISSIONS_STORAGE_PATH || path.join(process.cwd(), 'data');
const submissionsFile = path.join(storageRoot, 'submissions.json');
const seedFile = path.join(process.cwd(), 'data', 'submissions.json');

export interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  createdAt: string;
}

async function ensureStorageDirectory() {
  try {
    console.log('📁 Ensuring directory exists:', storageRoot);
    await fs.mkdir(storageRoot, { recursive: true });
    console.log('✅ Directory ready');
  } catch (error) {
    console.error('❌ Error creating directory:', error);
    throw error;
  }
}

async function seedSubmissions() {
  try {
    console.log('🌱 Checking if submissions file exists...');
    await fs.access(submissionsFile);
    console.log('✅ Submissions file exists');
    return;
  } catch {
    console.log('📄 Submissions file not found, trying to seed...');
    try {
      await fs.access(seedFile);
      console.log('📋 Found seed file, copying...');
      const seedContents = await fs.readFile(seedFile, 'utf-8');
      await fs.writeFile(submissionsFile, seedContents, 'utf-8');
      console.log('✅ Seeded with data');
      return;
    } catch {
      console.log('📝 Creating empty submissions file');
      await fs.writeFile(submissionsFile, '[]', 'utf-8');
      console.log('✅ Empty file created');
    }
  }
}

export async function readSubmissions(): Promise<Submission[]> {
  await ensureStorageDirectory();
  await seedSubmissions();

  try {
    console.log('📂 Reading from:', submissionsFile);
    const file = await fs.readFile(submissionsFile, 'utf-8');
    const data = JSON.parse(file) as Submission[];
    console.log('✅ Read submissions:', data.length);
    return data;
  } catch (error) {
    console.error('❌ Error reading submissions:', error);
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log('📝 Creating new submissions file');
      await fs.writeFile(submissionsFile, '[]', 'utf-8');
      return [];
    }
    throw error;
  }
}

export async function writeSubmissions(submissions: Submission[]) {
  await ensureStorageDirectory();
  try {
    console.log('💾 Writing', submissions.length, 'submissions to:', submissionsFile);
    const content = JSON.stringify(submissions, null, 2);
    await fs.writeFile(submissionsFile, content, 'utf-8');
    console.log('✅ Successfully wrote submissions');
  } catch (error) {
    console.error('❌ Error writing submissions:', error);
    throw error;
  }
}
