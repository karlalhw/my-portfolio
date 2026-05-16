// app/page.tsx
"use client";

import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="flex min-h-[65vh] items-center justify-center text-center px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="font-pixel gradient-text text-3xl md:text-5xl lg:text-6xl leading-relaxed mb-8 tracking-wide">
            KARLA LEUNG
          </h1>
          <p className="text-xl md:text-2xl text-white font-semibold mb-4 tracking-wide">
            Web3 Full-Stack Developer,
          </p>
          <p className="text-sm md:text-base text-slate-400 font-mono tracking-wider">
            Building the Decentralized Future.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 font-mono">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
              subtitle={skill.subtitle}
              description={skill.description}
            />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 font-mono">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

    </main>
  );
}
