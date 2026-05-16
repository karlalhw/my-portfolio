'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function PortraitCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const PARTICLE_COUNT = 45;
    const MAX_DIST = 110;

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }));

    const handleResize = () => {
      w = container.offsetWidth;
      h = container.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = '#070710';
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.35;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        grad.addColorStop(0, 'rgba(236, 72, 153, 0.6)');
        grad.addColorStop(0.4, 'rgba(168, 85, 247, 0.2)');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 180, 230, 0.95)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameId = requestAnimationFrame(draw);
    };

    animFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative w-full h-full rounded-lg overflow-hidden"
      style={{
        boxShadow:
          '0 0 0 1px rgba(139, 92, 246, 0.6), 0 0 16px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.15)',
      }}
    >
      {/* Particle network background — always visible */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Hover background glow — only on hover */}
      <div
        className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(168, 85, 247, 0.35) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)',
        }}
      />

      {/* Portrait image */}
      <div className="relative w-full h-full" style={{ minHeight: '400px' }}>
        <Image
          src="/images/karla-portrait-nobg-clean.png"
          alt="Karla"
          fill
          className="object-cover object-top z-10"
          style={{ position: 'absolute' }}
          priority
        />
      </div>

      {/* Purple mono overlay — fades out on hover, no hue-rotate interpolation */}
      <div
        className="absolute inset-0 z-[15] opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: '#0B0416', mixBlendMode: 'color' }}
      />

      {/* Bottom fade to transparent */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          height: '35%',
          background: 'linear-gradient(to top, #0a0a0f 0%, rgba(10,10,15,0.7) 50%, transparent 100%)',
        }}
      />
    </div>
  );
}
