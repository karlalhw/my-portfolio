// app/about/page.tsx
import PortraitCard from "@/components/PortraitCard";

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-white font-mono">
          About Me
        </h1>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-stretch">

          {/* Left: Portrait — matches text height only, not buttons */}
          <div className="flex flex-col mx-auto w-full max-w-md lg:max-w-none">
            <div className="flex-1">
              <PortraitCard />
            </div>
            {/* Invisible spacer matching button row height */}
            <div className="opacity-0 pointer-events-none flex flex-wrap gap-4 pt-4">
              <span className="rounded-lg px-8 py-4 text-sm font-mono">placeholder</span>
              <span className="rounded-lg px-8 py-4 text-sm font-mono">placeholder</span>
            </div>
          </div>

          {/* Right: Bio text + buttons */}
          <div className="flex flex-col text-lg text-slate-300 leading-relaxed font-mono">

            {/* Text content */}
            <div className="flex-1 space-y-8">
              <p>
                Hi, I&apos;m <strong className="text-white">Karla</strong>, a full-stack developer based in <strong className="text-white">Hong Kong</strong>.
              </p>

              <p>
                My journey started at age 16 when I built and maintained a full e-commerce website for my family — custom login/register system in PHP, MySQL database, Stripe payments, product listings, and ongoing maintenance. Working on a live production site early on shaped how I think about building software.
              </p>

              <p>
                Today I build across the full stack — <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong>, and <strong className="text-white">Tailwind CSS</strong> on the frontend, <strong className="text-white">PHP</strong> and <strong className="text-white">MySQL</strong> on the backend, and <strong className="text-white">Python</strong> for scripting and automation. I care about clean, consistent UI and getting the details right.
              </p>

              <p>
                I&apos;ve also been learning blockchain development — building and deploying smart contracts with <strong>Solidity</strong> and <strong>Foundry</strong> on Ethereum testnets, and a Bitcoin testnet wallet in Python. Still early in that journey, but I enjoy the challenge.
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Full-stack development (React, Next.js, Tailwind CSS, PHP, MySQL, Python)</li>
                <li>E-commerce systems (LiteCart, Stripe, phpMyAdmin)</li>
                <li>Smart contract development (Solidity, Foundry, OpenZeppelin)</li>
                <li>Version control and collaborative workflows (Git &amp; GitHub)</li>
              </ul>
            </div>

            {/* Buttons — pinned to bottom, portrait height excludes these */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="rounded-lg border border-purple-900/30 bg-purple-600 hover:bg-purple-500 hover:border-purple-500/50 px-8 py-4 text-white font-mono text-sm transition"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/karlalhw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-purple-900/30 hover:border-purple-500/50 px-8 py-4 font-mono text-sm text-purple-300 hover:bg-purple-900/40 transition"
              >
                View GitHub →
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
