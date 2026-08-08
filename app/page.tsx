"use client";

import { useEffect } from "react";
import { scrollToEl, scrollToTop } from "@/components/LenisProvider";
import Image from "next/image";

// ── SVG icons ──────────────────────────────────────────────
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconChevronUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// ── Data ────────────────────────────────────────────────────
const skills = [
  {
    name: "Front-End & UI/UX",
    sub: "React · Next.js · Tailwind · Figma",
    desc: "Responsive, accessible UIs with React, Next.js, and Tailwind CSS. Comfortable in Figma — wireframes, mockups, and translating designs into working code.",
  },
  {
    name: "Back-End Development",
    sub: "PHP · C# · ASP.NET Core · Python · SQL",
    desc: "Server-side development with PHP, C#/ASP.NET Core MVC, and Python. Database design and management with MySQL and SQL Server.",
  },
  {
    name: "Smart Contracts",
    sub: "Solidity · Foundry · OpenZeppelin",
    desc: "Writing and testing smart contracts in Solidity. Deployed ERC-20 tokens and NFT collections on Ethereum testnets using Foundry.",
  },
  {
    name: "Version Control",
    sub: "Git · GitHub",
    desc: "Branching, pull requests, and collaborative workflows. All projects publicly available on GitHub.",
  },
];

const projects = [
  {
    title: "Task Manager",
    desc: "Full-stack task manager with ASP.NET Core MVC, Entity Framework Core, and SQL Server. Create, edit, and delete tasks with status and priority tracking.",
    tags: ["C#", "ASP.NET Core MVC", "Entity Framework", "SQL Server", "Bootstrap 5"],
    image: "/images/projects/task-manager-cover.png",
    href: "https://github.com/karlalhw/task-manager",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, Next.js, and Tailwind CSS. Responsive design with animated aurora background.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/portfolio-cover.webp",
    href: "https://github.com/karlalhw/my-portfolio",
    demo: "https://karlalhw.com",
  },
  {
    title: "Bitcoin Testnet Wallet",
    desc: "Non-custodial Bitcoin testnet wallet — key generation, balance checking, transaction sending. Browser demo via Streamlit.",
    tags: ["Python", "bitcoinlib", "Streamlit", "Blockcypher API"],
    image: "/images/projects/btc-wallet-cover.webp",
    href: "https://github.com/karlalhw/btc-wallet",
    demo: "https://btc-wallet-demo.streamlit.app/",
  },
  {
    title: "Ethereum Smart Contracts",
    desc: "ERC-20 token and NFT collection deployed on Sepolia testnet. Written in Solidity with Foundry — 26 tests including fuzz tests.",
    tags: ["Solidity", "Foundry", "OpenZeppelin", "Sepolia"],
    href: "https://github.com/karlalhw/sol-erc20",
  },
];

// ── Component ───────────────────────────────────────────────
function HomeInner() {

  // Scrollspy
  useEffect(() => {
    const updateNav = () => {
      const mid = window.innerHeight * 0.5;
      const sections = document.querySelectorAll<HTMLElement>(".section-anchor");
      const navItems = document.querySelectorAll<HTMLAnchorElement>(".side-nav-item");
      let current = sections[0]?.id ?? "";
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= mid) current = s.id; });
      navItems.forEach((n) => n.classList.toggle("active", n.getAttribute("href") === "#" + current));
    };
    updateNav(); // run immediately on mount so About is active on landing
    window.addEventListener("scroll", updateNav);
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  // Aurora mouse repulsion
  useEffect(() => {
    const blobs = document.querySelectorAll<HTMLElement>(".aurora-blob");
    let mX = window.innerWidth / 2, mY = window.innerHeight / 2;
    const repel = Array.from(blobs).map(() => ({ x: 0, y: 0, tx: 0, ty: 0 }));
    const onMouseMove = (e: MouseEvent) => { mX = e.clientX; mY = e.clientY; };
    document.addEventListener("mousemove", onMouseMove);
    let rafId: number;
    const loop = () => {
      blobs.forEach((blob, i) => {
        const r = blob.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = cx - mX, dy = cy - mY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 480 && dist > 1) {
          const f = (1 - dist / 480) * 32;
          repel[i].tx = (dx / dist) * f; repel[i].ty = (dy / dist) * f;
        } else { repel[i].tx = 0; repel[i].ty = 0; }
        repel[i].x += (repel[i].tx - repel[i].x) * 0.05;
        repel[i].y += (repel[i].ty - repel[i].y) * 0.05;
        blob.style.translate = `${repel[i].x.toFixed(1)}px ${repel[i].y.toFixed(1)}px`;
      });
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => { document.removeEventListener("mousemove", onMouseMove); cancelAnimationFrame(rafId); };
  }, []);

  // Back-to-top visibility + bounce at bottom
  useEffect(() => {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    const observer = new IntersectionObserver(
      ([entry]) => btn.classList.toggle("visible", entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(btn);
    const onScroll = () => {
      const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 24;
      btn.classList.toggle("at-bottom", atBottom);
    };
    window.addEventListener("scroll", onScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollToSection = (id: string) => scrollToEl(id);

  return (
    <>
      {/* Aurora */}

      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob b1" />
        <div className="aurora-blob b2" />
        <div className="aurora-blob b3" />
        <div className="aurora-blob b4" />
        <div className="aurora-blob b5" />
      </div>

      <div className="layout">

        {/* ── Sidebar ── */}
        <aside className="sidebar">
          <div>
            <h1 className="site-name">Karla<br />Leung</h1>
            <p className="site-role">Full-Stack Developer</p>
            <p className="site-tagline">
              I build full-stack web apps — e-commerce, ASP.NET backends, and blockchain tooling.
            </p>
            <nav className="side-nav">
              {[
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
              ].map(({ id, label }) => (
                <a
                  key={id}
                  className="side-nav-item"
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                >
                  <span className="nav-bar" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="socials">
            <a className="social-btn" href="https://github.com/karlalhw" target="_blank" rel="noopener noreferrer" title="GitHub">
              <IconGithub />
            </a>
            <a className="social-btn" href="https://linkedin.com/in/karlalhw" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <IconLinkedin />
            </a>
            <a className="social-btn" href="mailto:dev@karlalhw.com" title="Email">
              <IconEmail />
            </a>
          </div>
        </aside>

        {/* ── Content ── */}
        <main className="content">

          {/* About */}
          <section id="about" className="section-anchor">
            <div className="about-text">
              <p>
                Hi, I&apos;m <strong>Karla</strong> — I enjoy tinkering with projects to learn and for fun,
                and I&apos;m currently pursuing a BSc in Computer Science.
              </p>
              <p>
                It started at 16, when I built a full e-commerce website for my family&apos;s business
                from scratch — custom PHP auth, MySQL database, Stripe payments, and production
                maintenance that&apos;s still running today. Owning a live site that early shaped how I
                think about building software.
              </p>
              <p>
                These days, I work across the full stack using <strong>React</strong>,{" "}
                <strong>Next.js</strong>, and <strong>Tailwind CSS</strong> on the frontend, and{" "}
                <strong>PHP</strong> and <strong>ASP.NET Core</strong> on the backend. I also write{" "}
                <strong>Python</strong> for scripting and automation.
              </p>
              <p>
                Good code isn&apos;t enough on its own — I care just as much about intuitive UI/UX
                design, creating the right feeling and guiding users through flows they don&apos;t have
                to think about.
              </p>
              <p>
                Beyond web apps, I&apos;m drawn to financial and web3 applications. I&apos;ve deployed
                smart contracts on Ethereum testnets with <strong>Solidity</strong> and{" "}
                <strong>Foundry</strong>, and built a non-custodial Bitcoin wallet in Python.
              </p>
              <p>Currently looking for junior developer roles or internships in Hong Kong, Shenzhen, or remote.</p>
            </div>
            <button className="cta-scroll" onClick={() => scrollToSection("experience")}>
              <span className="cta-scroll-label">Explore my work</span>
              <span className="cta-scroll-arrow"><IconChevronDown /></span>
            </button>
          </section>

          {/* Experience */}
          <section id="experience" className="section-anchor">
            <p className="section-tag">Experience</p>
            <div className="exp-list">
              <a className="exp-card" href="https://flagart.co.nz" target="_blank" rel="noopener noreferrer">
                <div className="exp-date">2022 –<br />Present</div>
                <div>
                  <div className="exp-header">
                    <span className="exp-title">E-commerce Developer</span>
                    <span className="exp-arrow">↗</span>
                  </div>
                  <div className="exp-company">Flag Art NZ · Self-employed · Remote</div>
                  <div className="exp-desc">
                    Built and maintain a full e-commerce website for a small business — custom PHP
                    login/register system, MySQL database, Stripe payment integration, shipping
                    configuration, and ongoing product management. Built at 16, still running in production.
                  </div>
                  <div className="tags">
                    {["PHP", "MySQL", "JavaScript", "LiteCart", "Stripe"].map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="section-anchor">
            <p className="section-tag">Skills</p>
            <div className="skills-list">
              {skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div>
                    <div className="skill-name">{s.name}</div>
                    <div className="skill-sub">{s.sub}</div>
                  </div>
                  <div className="skill-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="section-anchor">
            <p className="section-tag">Projects</p>
            <div className="projects-list">
              {projects.map((p) => (
                <a
                  key={p.title}
                  className="project-card"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-thumb">
                    {p.image ? (
                      <Image src={p.image} alt={p.title} width={88} height={56} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <span style={{ fontSize: 9, color: "var(--acc)", opacity: 0.5, lineHeight: 1.4, padding: 4 }}>
                        No preview
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="project-header">
                      <span className="project-title">{p.title}</span>
                      <span className="project-arrow">↗</span>
                    </div>
                    <div className="project-desc">{p.desc}</div>
                    <div className="tags">
                      {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="footer-line">
              Built with Next.js &amp; Tailwind CSS — designed by Karla Leung.{" "}
              Inspired by{" "}
              <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
                brittanychiang.com
              </a>.
            </div>

            <button
              id="backToTop"
              className="back-to-top"
              onClick={() => scrollToTop()}
              title="Back to top"
            >
              <IconChevronUp />
            </button>
          </section>

        </main>
      </div>
    </>
  );
}

export default function Home() {
  return <HomeInner />;
}
