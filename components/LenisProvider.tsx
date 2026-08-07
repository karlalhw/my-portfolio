"use client";

import Lenis from "lenis";
import { useEffect } from "react";

// Module-level singleton — one instance, always accessible
let lenis: Lenis | null = null;

function init() {
  if (lenis) return;
  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    duration: 1.6,
  });
  let rafId: number;
  const loop = (time: number) => {
    lenis!.raf(time);
    rafId = requestAnimationFrame(loop);
  };
  rafId = requestAnimationFrame(loop);
  // keep rafId in closure — no cleanup needed for a page-lifetime singleton
  void rafId;
}

export function scrollToEl(id: string) {
  const el = document.getElementById(id);
  if (!el || !lenis) return;
  lenis.scrollTo(el, { offset: -64 });
}

export function scrollToTop() {
  lenis?.scrollTo(0);
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    init();
  }, []);

  return <>{children}</>;
}
