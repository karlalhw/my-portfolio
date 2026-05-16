// components/SkillCard.tsx
interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  subtitle?: string;
  description: string;
}

export default function SkillCard({ icon, name, subtitle }: SkillCardProps) {
  return (
    <div className="group relative flex flex-col p-5 rounded-lg bg-[#0f0f18] border border-purple-900/30 hover:border-purple-500/50 transition-all duration-200 min-h-[110px] cursor-default">
      <div className="flex-1 pr-8">
        <h3 className="text-sm font-bold text-white leading-snug mb-2 font-mono">
          {name}
        </h3>
        {subtitle && (
          <p className="text-xs text-purple-400/60 font-mono">{subtitle}</p>
        )}
      </div>
      <div className="absolute bottom-4 right-4 text-purple-500/50 group-hover:text-purple-400 transition-colors">
        {icon}
      </div>
    </div>
  );
}
