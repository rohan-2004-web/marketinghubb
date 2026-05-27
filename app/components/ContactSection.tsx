'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const MotionDiv = dynamic(
  () => import('framer-motion').then((m) => m.motion.div),
  { ssr: false }
);

const MotionForm = dynamic(
  () => import('framer-motion').then((m) => m.motion.form),
  { ssr: false }
);

const MotionButton = dynamic(
  () => import('framer-motion').then((m) => m.motion.button),
  { ssr: false }
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    emailjs.init('psSOH3HTpdmSvFGd-');
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatusMessage('');

    if (!formData.phone) {
      setStatusMessage('Please enter your phone number.');
      return;
    }

    if (!formData.service) {
      setStatusMessage(
        'Please select the service you are interested in.'
      );
      return;
    }

    setIsSubmitting(true);

    let saved = false;
    let emailSent = false;
    let emailErrorMessage = '';

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const errorMessage =
          errorData?.error || 'Unable to save submission to the server.';
        throw new Error(errorMessage);
      }

      saved = true;

      try {
        await emailjs.send(
          'service_hiqb728',
          'template_icw1cii',
          {
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
          }
        );
        emailSent = true;
      } catch (emailError) {
        console.error('EmailJS Error:', emailError);
        emailErrorMessage =
          emailError instanceof Error
            ? emailError.message
            : 'Email delivery failed.';
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      if (emailSent) {
        setStatusMessage('Message sent successfully and saved ✅');
      } else {
        setStatusMessage(
          `Saved successfully, but email delivery failed. ${emailErrorMessage}`
        );
      }
    } catch (error) {
      console.error('Contact Form Error:', error);
      setStatusMessage(
        error instanceof Error
          ? `${error.message} ❌`
          : 'Failed to send message ❌'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to boost your digital presence? Get in touch with us today.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <MotionDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-gradient-to-br from-[#f0f6ff] to-[#e4f0ff] p-6 border border-[#c8dcf9] shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a3c72] mb-4">
              Visit Us in Mahmoorganj
            </h3>

            <p className="text-[#2d4f7f] mb-6">
              <strong>Address:</strong> Mahmoorganj, Varanasi 221010
            </p>

            <p className="text-[#2d4f7f] mb-2">
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+917307260253"
                className="text-[#3473d2] hover:text-[#1f55ad]"
              >
                7307260253

              </a>
            </p>

            <p className="text-[#2d4f7f] mb-6">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:saurabhcgoubey200@gmail.com"
                className="text-[#3473d2] hover:text-[#1f55ad]"
              >
                saurabhcgoubey200@gmail.com
              </a>
            </p>

            <div className="w-full h-64 rounded-xl overflow-hidden border border-[#bfd6fb] shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.78990688837!2d82.994147!3d25.304663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c93a2cd05b97d%3A0x438f84d8228e28cc!2sMahmoorganj%2C%20Varanasi%2C%20Uttar%20Pradesh%20221010!5e0!3m2!1sen!2sin!4v1723290957411!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </MotionDiv>

          <MotionForm
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl bg-white border border-[#e7eefb] p-6 shadow-lg"
          >

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Interested Service
              </label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="PPC Advertising">PPC Advertising</option>
                <option value="Website Development">Website Development</option>
                <option value="Local Business Marketing">Local Business Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project..."
              />
            </div>

            {statusMessage && (
              <p className="text-sm text-center text-slate-700 mb-2">
                {statusMessage}
              </p>
            )}

            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </MotionButton>

          </MotionForm>
        </div>
      </div>
    </section>
  );
}