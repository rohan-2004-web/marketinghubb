import { promises as fs } from 'fs';
import os from 'os';
import path from 'path';

const storageRoot = process.env.SUBMISSIONS_STORAGE_PATH || path.join(os.tmpdir(), 'marketinghubb');
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
  await fs.mkdir(storageRoot, { recursive: true });
}

async function seedSubmissions() {
  try {
    await fs.access(submissionsFile);
    return;
  } catch {
    try {
      await fs.access(seedFile);
      const seedContents = await fs.readFile(seedFile, 'utf-8');
      await fs.writeFile(submissionsFile, seedContents, 'utf-8');
      return;
    } catch {
      await fs.writeFile(submissionsFile, '[]', 'utf-8');
    }
  }
}

export async function readSubmissions(): Promise<Submission[]> {
  await ensureStorageDirectory();
  await seedSubmissions();

  try {
    const file = await fs.readFile(submissionsFile, 'utf-8');
    return JSON.parse(file) as Submission[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.writeFile(submissionsFile, '[]', 'utf-8');
      return [];
    }
    throw error;
  }
}

export async function writeSubmissions(submissions: Submission[]) {
  await ensureStorageDirectory();
  await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), 'utf-8');
}
