// app/contact/page.tsx
"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { Github, Phone, Linkedin } from "lucide-react";

const inputClass =
  "w-full px-5 py-4 rounded-lg border border-purple-900/30 bg-[#0f0f18] text-slate-200 font-mono text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-purple-500/50 disabled:opacity-60 transition";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const result = await sendEmail(new FormData(e.target as HTMLFormElement));

    if (result.success) {
      setStatus({ success: true, message: result.message || "Message sent successfully!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({ success: false, message: result.message || "Failed to send message." });
    }

    setIsLoading(false);
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white font-mono">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <div>
            <h2 className="text-xl font-semibold mb-8 text-white font-mono">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isLoading}
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isLoading}
                className={inputClass}
              />
              <input
                name="subject"
                placeholder="Subject (optional)"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                disabled={isLoading}
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={8}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isLoading}
                className={`${inputClass} resize-y`}
              />

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-lg font-mono text-sm transition flex items-center justify-center gap-2 border
                  ${isLoading
                    ? "border-purple-900/30 bg-[#0f0f18] text-slate-500 cursor-not-allowed"
                    : "border-purple-900/30 bg-purple-600 hover:bg-purple-500 hover:border-purple-500/50 text-white"
                  }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status && (
                <p className={`mt-2 text-center text-sm font-mono ${status.success ? "text-green-400" : "text-red-400"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-8 text-white font-mono">
              Other Ways to Reach Me
            </h2>

            <ul className="space-y-6 text-sm font-mono text-slate-300">
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-purple-400 shrink-0" />
                <div>
                  <strong className="text-white">Phone</strong><br />
                  <a href="tel:+85253059287" className="text-purple-400 hover:text-purple-300 transition">
                    +852 5305 9287
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Linkedin size={20} className="text-purple-400 shrink-0" />
                <div>
                  <strong className="text-white">LinkedIn</strong><br />
                  <a href="https://linkedin.com/in/karlalhw" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition">
                    linkedin.com/in/karlalhw
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Github size={20} className="text-purple-400 shrink-0" />
                <div>
                  <strong className="text-white">GitHub</strong><br />
                  <a href="https://github.com/karlalhw" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition">
                    github.com/karlalhw
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-10 text-slate-500 font-mono text-xs">
              Usually reply within 24–48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
