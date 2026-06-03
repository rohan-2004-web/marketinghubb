'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterService, setFilterService] = useState('all');
  const router = useRouter();

  useEffect(() => {
    // Check if logged in
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('adminAuth');
      if (!isAuth) {
        router.push('/admin-login');
        return;
      }
    }

    fetchSubmissions();
  }, [router]);

  async function fetchSubmissions() {
    try {
      const response = await fetch('/api/submissions');
      const data = await response.json();
      if (Array.isArray(data)) {
        setSubmissions(data);
      }
      setLoading(false);
    } catch (err) {
      setError('Failed to load submissions');
      setLoading(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin-login');
  };

  const filteredSubmissions = filterService === 'all' 
    ? submissions 
    : submissions.filter(s => s.service === filterService);

  const services = ['all', ...new Set(submissions.map(s => s.service))];

  return (
    <div className="min-h-screen pt-16 bg-slate-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-blue-100 mt-1">Contact Form Submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-slate-600 text-sm">Total Submissions</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{submissions.length}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-slate-600 text-sm">This Month</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {submissions.filter(s => {
                const submissionDate = new Date(s.createdAt);
                const now = new Date();
                return submissionDate.getMonth() === now.getMonth() && 
                       submissionDate.getFullYear() === now.getFullYear();
              }).length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-slate-600 text-sm">Today</p>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {submissions.filter(s => {
                const submissionDate = new Date(s.createdAt).toDateString();
                const today = new Date().toDateString();
                return submissionDate === today;
              }).length}
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-slate-600 text-sm">Refresh</p>
            <button
              onClick={fetchSubmissions}
              className="mt-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              ↻ Reload Data
            </button>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-lg p-4 shadow mb-6">
          <label className="text-sm font-medium text-slate-700">Filter by Service:</label>
          <select
            value={filterService}
            onChange={(e) => setFilterService(e.target.value)}
            className="mt-2 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {services.map(service => (
              <option key={service} value={service}>
                {service === 'all' ? 'All Services' : service}
              </option>
            ))}
          </select>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-600">Loading submissions...</div>
          ) : error ? (
            <div className="p-8 text-center text-red-600">{error}</div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="p-8 text-center text-slate-600">No submissions found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Phone</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Service</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredSubmissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{submission.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <a href={`mailto:${submission.email}`} className="text-blue-600 hover:underline">
                          {submission.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        <a href={`tel:${submission.phone}`} className="text-blue-600 hover:underline">
                          {submission.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {submission.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {new Date(submission.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 truncate max-w-xs">
                        {submission.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-600 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}
