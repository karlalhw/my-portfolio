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
        "Non-custodial Bitcoin testnet wallet with key generation, balance checking, and transaction sending. Includes a browser-based web demo via Streamlit.",
        tech: ["Python", "bitcoinlib", "Click", "Streamlit", "Blockcypher API"],
        githubUrl: "https://github.com/karlalhw/btc-wallet",
        demoUrl: "/bitcoin-wallet-demo",
        // imageUrl: "/images/btc-wallet-screenshot.png", // add later
    }
  // Add more projects here as you build them
];