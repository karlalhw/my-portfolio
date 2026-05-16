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
  subtitle?: string;
  description: string;
};

export const skills: Skill[] = [
  {
    icon: <Cpu size={16} strokeWidth={1.5} />,
    name: "Smart Contracts & Solidity",
    subtitle: "Foundry · Forge · Anvil",
    description: "Developing and testing smart contracts using Solidity and Foundry. Currently building and deploying on Ethereum testnets.",
  },
  {
    icon: <TerminalSquare size={16} strokeWidth={1.5} />,
    name: "Blockchain Tools",
    subtitle: "forge · cast · anvil",
    description: "Working with Foundry (forge, cast, anvil) for smart contract development, testing, and deployment.",
  },
  {
    icon: <Globe size={16} strokeWidth={1.5} />,
    name: "Web3 Frontends",
    subtitle: "ethers.js · wagmi · viem",
    description: "Building decentralized applications with React, Next.js, ethers.js, and wallet connections (MetaMask, etc.).",
  },
  {
    icon: <GitBranch size={16} strokeWidth={1.5} />,
    name: "Version Control",
    subtitle: "Git · GitHub",
    description: "Proficient with Git & GitHub, including branching, pull requests, and collaborative workflows.",
  },
  {
    icon: <Code size={16} strokeWidth={1.5} />,
    name: "Full-Stack Development",
    subtitle: "React · Next.js · Python · PHP",
    description: "Building complete web applications using Python, PHP, MySQL, React, and Tailwind CSS.",
  },
  {
    icon: <ShoppingCart size={16} strokeWidth={1.5} />,
    name: "E-commerce Systems",
    subtitle: "PHP · MySQL · LiteCart",
    description: "Built and customized full-stack e-commerce websites using LiteCart (PHP + MySQL) as a base template.",
  },
];
