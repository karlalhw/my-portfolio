// data/skills.tsx
import {
  GitBranch,
  TerminalSquare,
  ClipboardList,
  Cpu,
  Code,
  ShoppingCart,
  Server,
} from "lucide-react";

export type Skill = {
  icon: React.ReactNode;
  name: string;
  subtitle?: string;
  description: string;
};

export const skills: Skill[] = [
  {
    icon: <Code size={16} strokeWidth={1.5} />,
    name: "Full-Stack Development",
    subtitle: "React · Next.js · PHP · Python",
    description:
      "Building complete web applications using React, Next.js, Tailwind CSS, Python, and PHP. Comfortable across the stack from database to UI.",
  },
  {
    icon: <Server size={16} strokeWidth={1.5} />,
    name: "C# / ASP.NET Core",
    subtitle: "MVC · Entity Framework · SQL Server",
    description:
      "Building server-side web apps with ASP.NET Core MVC, Entity Framework Core, and SQL Server. CRUD applications with clean architecture and Bootstrap UI.",
  },
  {
    icon: <ShoppingCart size={16} strokeWidth={1.5} />,
    name: "E-commerce Systems",
    subtitle: "PHP · MySQL · LiteCart · Stripe",
    description:
      "Built and maintain a live e-commerce site - custom login/register system, Stripe payment integration, database management, and ongoing maintenance.",
  },
  {
    icon: <GitBranch size={16} strokeWidth={1.5} />,
    name: "Version Control",
    subtitle: "Git · GitHub",
    description:
      "Proficient with Git & GitHub, including branching, pull requests, and collaborative workflows.",
  },
  {
    icon: <Cpu size={16} strokeWidth={1.5} />,
    name: "Smart Contracts",
    subtitle: "Solidity · Foundry · OpenZeppelin",
    description:
      "Writing and testing smart contracts in Solidity. Deployed ERC-20 tokens and NFT collections on Ethereum testnets using Foundry.",
  },
  {
    icon: <TerminalSquare size={16} strokeWidth={1.5} />,
    name: "Blockchain Tools",
    subtitle: "forge · cast · anvil",
    description:
      "Working with Foundry (forge, cast, anvil) for smart contract development, testing, and local blockchain simulation.",
  },
  {
    icon: <ClipboardList size={16} strokeWidth={1.5} />,
    name: "Agile & Project Management",
    subtitle: "Scrum · Kanban · Trello",
    description:
      "Working with agile methodologies including Scrum and Kanban. Experience planning and tracking projects using tools like Trello and GitHub Projects.",
  },
];
