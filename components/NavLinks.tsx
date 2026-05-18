'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const cls = "text-purple-400 hover:text-purple-200 transition text-sm tracking-widest uppercase font-mono";
const mobileCls = "text-purple-400 hover:text-purple-200 transition text-sm tracking-widest uppercase font-mono py-2 block w-full text-center";

function AnchorLink({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || '/';
    const hash = href.slice(hashIndex + 1);

    if (pathname === path) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className ?? cls}>
      {children}
    </a>
  );
}

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center justify-center gap-10">
        <li className="flex items-center gap-1">
          <a
            href="/"
            className={cls}
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Home
          </a>
          <ChevronDown size={12} className="text-purple-400 mt-0.5" />
        </li>
        <li><AnchorLink href="/#skills">Skills</AnchorLink></li>
        <li><Link href="/projects" className={cls}>Projects</Link></li>
        <li><Link href="/about" className={cls}>About Me</Link></li>
        <li><Link href="/contact" className={cls}>Contact</Link></li>
      </ul>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-center">
        <button
          onClick={() => setOpen(!open)}
          className="text-purple-400 hover:text-purple-200 transition p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-purple-900/20 py-4 z-50">
          <ul className="flex flex-col items-center gap-1">
            <li>
              <a
                href="/"
                className={mobileCls}
                onClick={(e) => {
                  close();
                  if (pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                Home
              </a>
            </li>
            <li><AnchorLink href="/#skills" className={mobileCls} onClick={close}>Skills</AnchorLink></li>
            <li><Link href="/projects" className={mobileCls} onClick={close}>Projects</Link></li>
            <li><Link href="/about" className={mobileCls} onClick={close}>About Me</Link></li>
            <li><Link href="/contact" className={mobileCls} onClick={close}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}
