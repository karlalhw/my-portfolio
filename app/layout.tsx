// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { 
  Github,
  Mail,
  Linkedin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Karla's Portfolio",
  description: "Full-stack developer portfolio - Hong Kong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {/* Navbar */}
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                KLHW
              </Link>

              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Page content */}
        {children}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p className="mb-4">© {new Date().getFullYear()} Karla Leung.</p>
            <div className="flex justify-center gap-10 md:gap-12">
              <a
                href="mailto:hello@karlalhw.com"
                className="hover:text-blue-600 transition-colors"
                aria-label="Email me"
              >
                <Mail size={28} strokeWidth={1.5} className="hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/karlalhw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={28} strokeWidth={1.5} className="hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/karlalhw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={28} strokeWidth={1.5} className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}