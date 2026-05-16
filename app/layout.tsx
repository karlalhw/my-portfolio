// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Github, Mail, Linkedin } from "lucide-react";
import NavLinks from "@/components/NavLinks";
import NetworkBackground from "@/components/NetworkBackground";

export const metadata: Metadata = {
  title: "Karla Leung — Web3 Developer",
  description: "Web3 Full-Stack Developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-slate-200 min-h-screen">
        <NetworkBackground />

        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-900/20">
          <nav className="container mx-auto px-6 py-5">
            <NavLinks />
          </nav>
        </header>

        {/* Page content */}
        <div className="relative z-10">
          {children}
        </div>

        <footer className="relative z-10 border-t border-purple-900/20 py-8">
          <div className="container mx-auto px-4 text-center text-slate-500 font-mono">
            <p className="mb-4 text-sm">© {new Date().getFullYear()} Karla Leung.</p>
            <div className="flex justify-center gap-10">
              <a
                href="mailto:hello@karlalhw.com"
                className="hover:text-purple-400 transition-colors"
                aria-label="Email me"
              >
                <Mail size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://linkedin.com/in/karlalhw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/karlalhw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
