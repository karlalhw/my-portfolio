// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  imageUrl,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-lg bg-[#0f0f18] border border-purple-900/30 hover:border-purple-500/50 transition-all duration-200 overflow-hidden">
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-[#0a0a12]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={338}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-purple-900/50 text-xs font-mono">
            [ no preview ]
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-sm font-bold text-white font-mono leading-snug">
          {title}
        </h3>

        <p className="text-xs text-slate-400 font-mono leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded px-2 py-0.5 text-xs font-mono bg-purple-950/50 text-purple-300/80 border border-purple-900/40"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-1">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="rounded px-3 py-1.5 text-xs font-mono bg-purple-600 hover:bg-purple-500 text-white transition-colors"
            >
              View on GitHub
            </Link>
          )}
          {demoUrl && (
            <Link
              href={demoUrl}
              target={demoUrl.startsWith("http") ? "_blank" : undefined}
              className="rounded px-3 py-1.5 text-xs font-mono border border-purple-600 text-purple-300 hover:bg-purple-900/40 transition-colors"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
