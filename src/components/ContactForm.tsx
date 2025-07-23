'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setNotification({ type: 'success', message: '✅ Message sent successfully!' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setNotification({ type: 'error', message: '❌ Failed to send message. Please try again later.' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: '❌ Something went wrong. Please try again later.' });
    }

    // Hide notification after 4 seconds
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="relative">
      {notification && (
        <div
          className={`absolute top-[-70px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md p-4 rounded-md shadow-lg text-white transition-all duration-500 ease-in-out
            ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'} animate-fade-in`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-left font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-left font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-left font-medium text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
