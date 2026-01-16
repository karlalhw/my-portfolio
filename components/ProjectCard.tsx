// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];               // array of tech badges
  imageUrl?: string;            // optional screenshot
  githubUrl?: string;
  demoUrl?: string;             // e.g. "/cashflo" or external
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
    <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-400">
      {/* Image / Placeholder */}
      <div className="mb-5 aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={338}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Project Screenshot Coming Soon
          </div>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-5 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* Tech badges */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            View Code →
          </Link>
        )}

        {demoUrl && (
          <Link
            href={demoUrl}
            target={demoUrl.startsWith("http") ? "_blank" : undefined}
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Live Demo →
          </Link>
        )}
      </div>
    </div>
  );
}