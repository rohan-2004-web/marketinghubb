'use client';

import { useState, useEffect } from 'react';

const serviceOptions = [
  { value: 'seo', label: 'SEO Optimization' },
  { value: 'smm', label: 'Social Media Marketing' },
  { value: 'ppc', label: 'PPC Advertising' },
  { value: 'website', label: 'Website Design' },
  { value: 'graphic', label: 'Graphic Design' },
  { value: 'email', label: 'Email Marketing' },
  { value: 'other', label: 'Other' },
];

interface FloatingContactFormProps {
  isFloating?: boolean;
}

export default function FloatingContactForm({ isFloating = false }: FloatingContactFormProps) {
  const [isOpen, setIsOpen] = useState(!isFloating);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('seo');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isFloating) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isFloating]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, service, message: `Service interest: ${service}` }),
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus('error');
        setError(data.error || 'Unable to submit form.');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setService('seo');

      setTimeout(() => {
        if (isFloating) setIsOpen(false);
        setStatus('idle');
      }, 3000);
    } catch (submitError) {
      setStatus('error');
      setError('Unable to submit. Please try again.');
    }
  }

  if (isFloating && !isOpen) {
    return null;
  }

  if (isFloating) {
    return (
      <div className="fixed bottom-4 right-4 z-50 max-w-sm">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex justify-between items-center rounded-t-2xl">
            <h3 className="font-bold">Quick Contact</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded"
            >
              ✕
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="tel"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-green-600 text-center">✓ Sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    );
  }

  // Non-floating version for contact page
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Send us a message</h2>
          <p className="text-slate-600 mb-8">Fill out the form and our team will connect with you about your chosen service.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Contact number</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 12345 67890"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Service</span>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-3 text-white font-semibold shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Submit Request'}
              </button>
              {status === 'success' && <p className="text-sm text-emerald-600">✓ Your message has been sent successfully.</p>}
              {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
