import { promises as fs } from 'fs';
import path from 'path';

const submissionsFile = path.join(process.cwd(), 'data', 'submissions.json');

export interface Submission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export async function readSubmissions(): Promise<Submission[]> {
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
  await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), 'utf-8');
}
