// app/page.tsx
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

      {/* 1. Hero – your "Hi, I'm K" part – keep or customize */}
      <section className="flex min-h-[70vh] items-center justify-center text-center px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m Karla
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            Full-stack developer crafting tools with PHP, Python, Next.js & more
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="/projects"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="rounded-full border-2 border-gray-700 px-8 py-4 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              About Me →
            </a>
          </div>
        </div>
      </section>

      {/* 2. Skills / Skill-Set Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
            Skill Set
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                description={skill.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Contact Me Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Interested in working together or just want to say hi? Reach out!
          </p>

          {/* Simple links version – easy & no backend needed */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-white hover:bg-blue-700 transition text-lg font-medium"
            >
              <span className="text-xl">✉️</span> Email Me
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full border-2 border-gray-700 px-8 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-lg font-medium dark:text-white"
            >
              <span className="text-xl">in</span> LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full border-2 border-gray-700 px-8 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-lg font-medium dark:text-white"
            >
              <span className="text-xl">🐱</span> GitHub
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}