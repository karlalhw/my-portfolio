// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-12 text-center text-4xl font-bold text-white font-mono">
          My Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-slate-500 font-mono">
            More projects coming soon!
          </p>
        )}
      </div>
    </main>
  );
}