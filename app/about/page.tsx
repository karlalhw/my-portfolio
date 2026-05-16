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
                Hi, I&apos;m <strong className="text-white">Karla</strong>, a full-stack and Web3 developer based in <strong className="text-white">Hong Kong</strong>.
              </p>

              <p>
                My journey started at age 16 when I built and maintained a full-stack e-commerce website for my family using PHP, MySQL, and HTML/CSS. That early experience taught me the value of clean, functional systems and sparked my love for development.
              </p>

              <p>
                Today, I&apos;m deeply passionate about <strong>Web3 and decentralized technologies</strong>. I spend most of my time learning and building with <strong>Solidity</strong> and <strong>Foundry</strong>, writing and testing smart contracts, while creating modern frontends using <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. I enjoy connecting traditional web development with blockchain to build useful decentralized applications.
              </p>

              <p>
                I&apos;m particularly excited about the potential of blockchain to create more transparent, secure, and user-owned systems. Whether it&apos;s writing secure smart contracts or building intuitive Web3 interfaces, I love turning complex ideas into working products.
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Smart contract development with Solidity &amp; Foundry</li>
                <li>Building Web3 frontends (React + Next.js + ethers/viem)</li>
                <li>Full-stack development (Python, PHP, MySQL, React, Tailwind)</li>
                <li>Version control and collaborative workflows with Git &amp; GitHub</li>
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
