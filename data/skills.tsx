// data/skills.ts
import { 
  GitBranch, 
  Code, 
  Database, 
  Server,
  TerminalSquare,
  FileCode,
  Braces,
  Layout
} from "lucide-react";

export type Skill = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

export const skills: Skill[] = [
    {
        icon: <GitBranch size={40} strokeWidth={1.5} />,
        name: "Git & GitHub",
        description: "Version control, branching, pull requests, GitHub Actions, collaborative workflows",
    },
    {
        icon: <Code size={40} strokeWidth={1.5} />,
        name: "JavaScript / TypeScript",
        description: "ES6+, async/await, modules, type safety, modern tooling",
    },
    {
        icon: <Layout size={40} strokeWidth={1.5} />,
        name: "React",
        description: "Component architecture, hooks, state management, Next.js integration",
    },
    {
        icon: <Server size={40} strokeWidth={1.5} />,
        name: "Next.js",
        description: "App Router, Server Components, SSR/SSG, API routes, optimizations",
    },
    {
        icon: <Braces size={40} strokeWidth={1.5} />,
        name: "Tailwind CSS",
        description: "Utility-first styling, responsive design, dark mode, rapid UI building",
    },
    {
        icon: <FileCode size={40} strokeWidth={1.5} />,
        name: "PHP",
        description: "Backend development, Laravel/WordPress, REST APIs, authentication",
    },
    {
        icon: <Database size={40} strokeWidth={1.5} />,
        name: "MySQL",
        description: "Relational DB design, queries, indexing, joins, optimization",
    },
    {
        icon: <TerminalSquare size={40} strokeWidth={1.5} />,
        name: "Python",
        description: "Scripting, CLI tools, data processing, Flask/FastAPI",
    },
    // Add more – search icons at https://lucide.dev/icons
];