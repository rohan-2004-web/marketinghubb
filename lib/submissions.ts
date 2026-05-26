import { promises as fs } from 'fs';
import path from 'path';

// Use absolute path to data folder
const storageRoot = path.join(process.cwd(), 'data');
const submissionsFile = path.join(storageRoot, 'submissions.json');

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
    console.log('📁 Storage path:', storageRoot);
    await fs.mkdir(storageRoot, { recursive: true });
    console.log('✅ Directory ready:', storageRoot);
  } catch (error) {
    console.error('❌ Error creating directory:', error);
    throw error;
  }
}

async function ensureSubmissionsFile() {
  try {
    await fs.access(submissionsFile);
    console.log('✅ Submissions file exists');
  } catch {
    console.log('📝 Creating submissions file:', submissionsFile);
    await fs.writeFile(submissionsFile, JSON.stringify([], null, 2), 'utf-8');
    console.log('✅ Submissions file created');
  }
}

export async function readSubmissions(): Promise<Submission[]> {
  try {
    await ensureStorageDirectory();
    await ensureSubmissionsFile();

    console.log('📂 Reading from:', submissionsFile);
    const fileContent = await fs.readFile(submissionsFile, 'utf-8');
    const data = JSON.parse(fileContent) as Submission[];
    console.log('✅ Read', data.length, 'submissions');
    return data;
  } catch (error) {
    console.error('❌ Error reading submissions:', error);
    throw error;
  }
}

export async function writeSubmissions(submissions: Submission[]) {
  try {
    await ensureStorageDirectory();
    
    console.log('💾 Writing', submissions.length, 'submissions to:', submissionsFile);
    const content = JSON.stringify(submissions, null, 2);
    await fs.writeFile(submissionsFile, content, 'utf-8');
    
    // Verify write
    const verify = await fs.readFile(submissionsFile, 'utf-8');
    const verifyCount = JSON.parse(verify).length;
    console.log('✅ Successfully wrote', verifyCount, 'submissions');
  } catch (error) {
    console.error('❌ Error writing submissions:', error);
    throw error;
  }
}
