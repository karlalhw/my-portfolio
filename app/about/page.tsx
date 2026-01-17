// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h1>

        {/* Split layout: Photo on left (desktop), text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Your photo */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative w-full pb-[133%] rounded-2xl overflow-hidden shadow-xl">
              {/* Replace with your actual photo */}
              <Image
                src="/images/karla-portrait.jpg" // ← Put your photo in public/images/
                alt="Karla - Full-stack Developer"
                fill
                className="object-cover"
                priority // loads faster since it's above the fold
              />
            </div>

            {/* Optional subtle overlay effect */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity" />
          </div>

          {/* Right side: Bio text */}
          <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-gray-900 dark:text-white">Karla</strong>, a full-stack developer based in <strong className="text-gray-900 dark:text-white">Hong Kong</strong>. I love building practical solutions and solving real problems with clean, maintainable code while constantly exploring new technologies.
            </p>

            <p>
              My journey began at age 16 when I developed and maintained a full-stack e-commerce website for my family using <strong>PHP</strong>, <strong>MySQL</strong>, and <strong>HTML/CSS</strong>. That early experience sparked my passion for modern frontend tools like <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>, as well as scripting and automation with <strong>Python</strong> — including building a CLI Bitcoin wallet while diving into Web 3.0 and fintech.
            </p>

            <p>
              I&apos;m passionate about:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Creating fast, responsive, and accessible user interfaces</li>
              <li>Building scalable backend systems with secure authentication and databases</li>
              <li>Learning new tools and frameworks (currently exploring Solidity and React 19 features)</li>
              <li>Collaborating effectively in teams using Scrum and Agile methodologies</li>
            </ul>

            <p>
              When I&apos;m not coding, you&apos;ll find me enjoying a matcha latte, hitting the gym, or tinkering with side projects. Let&apos;s connect if you have an interesting project or just want to chat tech!
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-4 text-white font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/karlalhw"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-700 px-8 py-4 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white"
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