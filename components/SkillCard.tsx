// components/SkillCard.tsx
interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export default function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <div className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-500">
      {/* Icon container with background */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>

      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}