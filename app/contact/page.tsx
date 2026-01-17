// app/contact/page.tsx
"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { 
  Github,
  Phone,
  Linkedin
} from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<{ success?: boolean; error?: string; message?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setStatus(null);
    const result = await sendEmail(formData);
    setStatus(result);
    setIsLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
              Send a Message
            </h2>

            <form action={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="subject"
                placeholder="Subject (optional)"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={8}
                required
                className="w-full px-5 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              />

              <button
                type="submit"
                disabled={isLoading || status?.success}
                className={`w-full py-4 rounded-full font-medium transition shadow-md hover:shadow-lg
                  ${isLoading ? "bg-blue-400 cursor-wait opacity-70" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
              >
                {isLoading ? "Sending..." : status?.success ? "Message Sent!" : "Send Message"}
              </button>

              {status?.success && (
                <p className="text-green-600 font-medium mt-4 text-center">{status.message}</p>
              )}
              {status?.error && (
                <p className="text-red-600 font-medium mt-4 text-center">{status.error}</p>
              )}
            </form>
          </div>

          {/* Right: Info & quick links */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">
              Other Ways to Reach Me
            </h2>

            <ul className="space-y-6 text-lg">
              <li className="flex items-center gap-4">
                <Phone size={28} className="text-blue-600" />
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+85253059287" className="text-blue-600 hover:underline">
                    +852 5305 9287
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Linkedin size={28} className="text-blue-600" />
                <div>
                  <strong>LinkedIn:</strong><br />
                  <a
                    href="https://linkedin.com/in/karlalhw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/karlalhw
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Github size={28} className="text-blue-600" />
                <div>
                  <strong>GitHub:</strong><br />
                  <a
                    href="https://github.com/karlalhw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    github.com/karlalhw
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-10 text-gray-600 dark:text-gray-300">
              Usually reply within 24–48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}