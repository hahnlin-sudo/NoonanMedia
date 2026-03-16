'use client';

import { useState, type FormEvent } from 'react';

const PROJECT_TYPES = [
  'Studio Video',
  'Live Performance',
  'Artist Portraits',
  'Photo + Video Package',
  'Other',
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
      if (!endpoint) {
        // Fallback: mailto link
        const subject = encodeURIComponent(`Project Inquiry — ${data.projectType}`);
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nPreferred Date: ${data.date}\n\n${data.message}`
        );
        window.location.href = `mailto:hahnlinnoonan@gmail.com?subject=${subject}&body=${body}`;
        setStatus('sent');
        return;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('sent');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <p className="text-text-primary font-[200] text-2xl tracking-[-0.01em]">
          Message sent
        </p>
        <p className="mt-3 text-text-primary/50 font-[300] text-sm">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <Field label="Name" name="name" type="text" required />
      <Field label="Email" name="email" type="email" required />

      <div className="flex flex-col gap-2">
        <label className="text-text-primary/35 font-poppins font-[200] text-[11px] md:text-xs uppercase tracking-[0.08em]">
          Project Type
        </label>
        <select
          name="projectType"
          required
          className="bg-transparent border-b border-text-primary/15 focus:border-accent/50 text-text-primary font-[300] text-base pb-2 outline-none transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled selected className="bg-bg-primary">
            Select...
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-bg-primary">
              {type}
            </option>
          ))}
        </select>
      </div>

      <Field label="Preferred Date" name="date" type="text" placeholder="Flexible, March 2026, etc." />

      <div className="flex flex-col gap-2">
        <label className="text-text-primary/35 font-poppins font-[200] text-[11px] md:text-xs uppercase tracking-[0.08em]">
          Tell me about your project
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className="bg-transparent border-b border-text-primary/15 focus:border-accent/50 text-text-primary font-[300] text-base pb-2 outline-none transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-4 self-center px-12 py-3 text-text-primary font-[300] text-sm tracking-[0.08em] border border-text-primary/20 hover:border-accent/50 transition-all duration-200 cursor-pointer disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'error' && (
        <p className="text-center text-red-400/80 font-[300] text-sm">
          Something went wrong. Please try again or reach out directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-text-primary/35 font-poppins font-[200] text-[11px] md:text-xs uppercase tracking-[0.08em]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-text-primary/15 focus:border-accent/50 text-text-primary font-[300] text-base pb-2 outline-none transition-colors duration-200 placeholder:text-text-primary/20"
      />
    </div>
  );
}
