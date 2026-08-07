// data/projects.ts
export type Project = {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Next.js, and Tailwind CSS. Features an animated particle background, responsive design, hover animations, and a live project showcase.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "tsParticles"],
    githubUrl: "https://github.com/karlalhw/my-portfolio",
    demoUrl: "https://karlalhw.com",
    imageUrl: "/images/projects/portfolio-cover.webp",
  },
  {
    title: "E-commerce Website",
    description:
      "Built and maintain a live e-commerce site for a small business — custom PHP login/register system, database management with MySQL, Stripe payment integration, shipping configuration, and ongoing maintenance.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "LiteCart", "Stripe"],
    demoUrl: "https://flagart.co.nz/",
    imageUrl: "/images/projects/ecommerce-cover.webp",
  },
  {
    title: "Bitcoin Testnet Wallet",
    description:
      "Non-custodial Bitcoin testnet wallet with key generation, balance checking, and transaction sending. Includes a browser-based web demo via Streamlit.",
    tech: ["Python", "bitcoinlib", "Click", "Streamlit", "Blockcypher API"],
    githubUrl: "https://github.com/karlalhw/btc-wallet",
    demoUrl: "https://btc-wallet-demo.streamlit.app/",
    imageUrl: "/images/projects/btc-wallet-cover.webp",
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task manager built with ASP.NET Core MVC and Entity Framework Core. Supports creating, editing, and deleting tasks with title, description, due date, status, and priority. Bootstrap 5 UI with a striped table view.",
    tech: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "Bootstrap 5"],
    githubUrl: "https://github.com/karlalhw/task-manager",
    imageUrl: "/images/projects/task-manager-cover.png",
  },
  {
    title: "Ethereum Smart Contracts",
    description:
      "ERC-20 token and NFT collection built from scratch and deployed on Sepolia testnet. Written in Solidity with Foundry for testing and deployment.",
    tech: ["Solidity", "Foundry", "OpenZeppelin", "Sepolia"],
    githubUrl: "https://github.com/karlalhw/sol-erc20",
  },
];
