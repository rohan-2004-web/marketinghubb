'use client';

import { useEffect, useState } from 'react';

const ADMIN_EMAIL = 'saurabhcgoubey200@gmail.com';
const ADMIN_PASSWORD = 'saurabh@2004';

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  useEffect(() => {
    if (!loggedIn) return;

    async function loadSubmissions() {
      setLoading(true);
      try {
        const response = await fetch('/api/submissions');
        if (!response.ok) {
          throw new Error('Unable to load submissions');
        }
        const data = await response.json();
        setSubmissions(data);
      } catch {
        setError('Could not fetch submissions.');
      } finally {
        setLoading(false);
      }
    }

    loadSubmissions();

    // Auto-refresh submissions every 5 seconds
    const interval = setInterval(loadSubmissions, 5000);
    return () => clearInterval(interval);
  }, [loggedIn]);

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Admin Panel</h1>
        <p className="text-slate-600 mb-8">
          Enter the admin password to view contact form submissions.
        </p>

        {!loggedIn ? (
          <form onSubmit={handleLogin} className="space-y-4 max-w-md">
            <div>
              <label htmlFor="admin-email" className="block text-sm font-medium text-slate-700 mb-2">
                Admin Email
              </label>
              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="saurabhcgoubey200@gmail.com"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="block text-sm font-medium text-slate-700 mb-2">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white shadow-sm hover:bg-blue-700"
            >
              Unlock Admin Panel
            </button>
          </form>
        ) : (
          <section className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Contact Form Submissions</h2>
                <p className="text-sm text-slate-500">Showing the latest messages received from users.</p>
              </div>
              <button
                onClick={() => {
                  setLoggedIn(false);
                  setPassword('');
                  setSubmissions([]);
                }}
                className="rounded-xl border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50"
              >
                Log out
              </button>
            </div>

            {loading ? (
              <p className="text-slate-600">Loading submissions...</p>
            ) : submissions.length === 0 ? (
              <p className="text-slate-600">No submissions have been received yet.</p>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <div key={submission.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{submission.name}</p>
                        <p className="text-sm text-slate-500">{submission.email}</p>
                        <p className="text-sm text-slate-500">{submission.phone}</p>
                        {submission.service ? (
                          <p className="text-sm text-slate-500">Service: {submission.service}</p>
                        ) : null}
                      </div>
                      <p className="text-sm text-slate-500">{new Date(submission.createdAt).toLocaleString()}</p>
                    </div>
                    <p className="mt-4 text-slate-700 whitespace-pre-line">{submission.message}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
