'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const cls = "text-purple-400 hover:text-purple-200 transition text-sm tracking-widest uppercase font-mono";

function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex) || '/';
    const hash = href.slice(hashIndex + 1);

    // Already on the target page — scroll without navigating
    if (pathname === path) {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    // On a different page — let Next.js navigate, then scroll on arrival
    // (handled by useEffect in page if needed, or browser default)
  };

  return (
    <a href={href} onClick={handleClick} className={cls}>
      {children}
    </a>
  );
}

export default function NavLinks() {
  return (
    <ul className="flex items-center justify-center gap-10">
      <li className="flex items-center gap-1">
        <Link href="/" className={cls}>Home</Link>
        <ChevronDown size={12} className="text-purple-400 mt-0.5" />
      </li>
      <li>
        <AnchorLink href="/#skills">Skills</AnchorLink>
      </li>
      <li>
        <Link href="/projects" className={cls}>Projects</Link>
      </li>
      <li>
        <Link href="/about" className={cls}>Experience</Link>
      </li>
      <li>
        <Link href="/contact" className={cls}>Contact</Link>
      </li>
    </ul>
  );
}
