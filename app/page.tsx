// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Temporary hero / placeholder */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Karla Leung, Full-Stack Software Developer.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Full-stack developer building things with PHP, Python, JavaScript, and more.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-600 px-8 py-4 text-white font-medium hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-gray-300 px-8 py-4 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:text-white dark:border-gray-600"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  );
}