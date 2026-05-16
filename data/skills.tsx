// data/skills.tsx
import {
  GitBranch,
  TerminalSquare,
  Globe,
  Cpu,
  Code,
  ShoppingCart,
} from "lucide-react";

export type Skill = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

export const skills = [
  {
    icon: <Cpu size={40} strokeWidth={1.5} />,
    name: "Smart Contracts & Solidity",
    description: "Developing and testing smart contracts using Solidity and Foundry. Currently building and deploying on Ethereum testnets.",
  },
  {
    icon: <TerminalSquare size={40} strokeWidth={1.5} />,
    name: "Blockchain Tools",
    description: "Working with Foundry (forge, cast, anvil) for smart contract development, testing, and deployment.",
  },
  {
    icon: <Globe size={40} strokeWidth={1.5} />,
    name: "Web3 Frontends",
    description: "Building decentralized applications with React, Next.js, ethers.js, and wallet connections (MetaMask, etc.).",
  },
  {
    icon: <GitBranch size={40} strokeWidth={1.5} />,
    name: "Version Control",
    description: "Proficient with Git & GitHub, including branching, pull requests, and collaborative workflows.",
  },
  {
    icon: <Code size={40} strokeWidth={1.5} />,
    name: "Full-Stack Development",
    description: "Building complete web applications using Python, PHP, MySQL, React, and Tailwind CSS.",
  },
  {
    icon: <ShoppingCart size={40} strokeWidth={1.5} />,
    name: "E-commerce Systems",
    description: "Built and customized full-stack e-commerce websites using LiteCart (PHP + MySQL) as a base template, including product management and order processing.",
  },
];