export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h1>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p>
            I&apos;m a developer based in Hong Kong with a passion for building useful
            full-stack applications. I enjoy solving real problems with clean code.
          </p>
          <p>
            Current focus: PHP/MySQL web apps, Python tools, and modern frontend with React & Next.js.
          </p>
        </div>
      </div>
    </main>
  );
}