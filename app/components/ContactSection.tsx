"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setAgree(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setFeedback({ type: "error", text: "Please fill out all required fields." });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = { name, email, phone, company, message, agree };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Server error. Please try again later.");
      }

      setFeedback({ type: "success", text: "Thanks! Your message has been received." });
      resetForm();
    } catch (err) {
      console.error("Contact submit error", err);
      setFeedback({ type: "error", text: err instanceof Error ? err.message : "Submission failed." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get In Touch</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">Have a project in mind? Send us a message and we'll reply within one business day.</p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name *</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Company (optional)" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message *</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="mt-1 w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your needs" />
            </div>

            <div className="flex items-center space-x-3">
              <input id="agree" type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="agree" className="text-sm text-gray-600">I agree to be contacted regarding my inquiry.</label>
            </div>

            {feedback && (
              <div className={`p-3 rounded ${feedback.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                {feedback.text}
              </div>
            )}

            <div>
              <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-60">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
