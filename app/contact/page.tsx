'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden mt-16">
      {/* Glassy background overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-red-100 mb-6 sm:mb-8 px-4">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="mt-1 px-4 block w-full rounded-xl bg-white/5 border-white/20 text-white placeholder-red-200 shadow-lg text-sm sm:text-base outline-none py-3"
                />
                {errors.name && (
                  <p className="mt-1 text-xs sm:text-sm text-red-300">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="mt-1 block w-full rounded-xl bg-white/5 border-white/20 text-white placeholder-red-200 shadow-lg text-sm sm:text-base outline-none py-3 px-4"
                />
                {errors.email && (
                  <p className="mt-1 text-xs sm:text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className="mt-1 block w-full rounded-xl bg-white/5 border-white/20 text-white placeholder-red-200 shadow-lg  text-sm sm:text-base outline-none py-3 px-4"
              />
              {errors.subject && (
                <p className="mt-1 text-xs sm:text-sm text-red-300">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Message is required' })}
                className="mt-1 block w-full rounded-xl bg-white/5 border-white/20 text-white placeholder-red-200 shadow-lg  text-sm sm:text-base outline-none py-3 px-4"
              />
              {errors.message && (
                <p className="mt-1 text-xs sm:text-sm text-red-300">{errors.message.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-xl shadow-lg text-sm sm:text-base font-medium text-white bg-red-600/80 hover:bg-red-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 transition-all duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-sm sm:text-base text-green-300 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm sm:text-base text-red-300 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <div className="backdrop-blur-xl bg-white/10 shadow-2xl rounded-2xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-base sm:text-lg font-medium text-white mb-2">Email</h3>
            <p className="text-sm sm:text-base text-red-100 break-words">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com'}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 shadow-2xl rounded-2xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-base sm:text-lg font-medium text-white mb-2">Phone</h3>
            <p className="text-sm sm:text-base text-red-100">{process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (555) 123-4567'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;