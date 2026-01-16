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
        title: "BTC Wallet",
        description:
        "Non-custodial Bitcoin testnet wallet with secure key generation, balance checking, and transaction sending via Blockcypher API.",
        tech: ["Python"],
        githubUrl: "https://github.com/karlalhw/btc-wallet",
        demoUrl: "/cashflo", // self-hosted subpath
        // imageUrl: "/images/cashflo-screenshot.png", // add later
    },
    {
        title: "Cashflo",
        description:
        "Full-stack expense tracker with user authentication, categories, reports, and MySQL database.",
        tech: ["PHP", "MySQL", "HTML/CSS/JS", "Tailwind"],
        githubUrl: "https://github.com/karlalhw/cashflo",
        demoUrl: "/cashflo", // self-hosted subpath
        // imageUrl: "/images/cashflo-screenshot.png", // add later
    },
  // Add more projects here as you build them
];