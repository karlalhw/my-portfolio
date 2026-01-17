// data/skills.tsx
import {
  GitBranch,
  Server,
  Code,
  Layout,
  TerminalSquare,
  Database,
  Cpu,
  Globe,
  Workflow,
  Lock,
} from "lucide-react";

export type Skill = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

export const skills: Skill[] = [
  {
    icon: <GitBranch size={40} strokeWidth={1.5} />,
    name: "Git & GitHub Version Control",
    description: "Branching strategies, pull requests, GitHub Actions, collaborative workflows, repo management",
  },
  {
    icon: <Server size={40} strokeWidth={1.5} />,
    name: "Back-End Development",
    description: "PHP, MySQL databases, Python scripting, REST APIs, authentication, scalable server-side logic",
  },
  {
    icon: <Layout size={40} strokeWidth={1.5} />,
    name: "Front-End Development",
    description: "React, Next.js, Tailwind CSS, responsive UI, component architecture, modern JavaScript/TypeScript",
  },
  {
    icon: <TerminalSquare size={40} strokeWidth={1.5} />,
    name: "Server Management & Hosting",
    description: "SSH access, DirectAdmin/cPanel administration, domain setup, deployment, environment configuration",
  },
  {
    icon: <Cpu size={40} strokeWidth={1.5} />,
    name: "Blockchain, Web 3.0 & Fintech",
    description: "Bitcoin testnet wallets, Solidity exploration, smart contracts, fintech app development, crypto tools",
  },
  {
    icon: <Workflow size={40} strokeWidth={1.5} />,
    name: "Scrum / Agile Methodologies",
    description: "Sprint planning, daily standups, backlog grooming, team collaboration, iterative delivery",
  },
  // Add more if you have other skills (e.g. Database Design, API Security, etc.)
];