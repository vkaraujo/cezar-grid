export default function SkillCard({ icon: Icon, label }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col items-center justify-center min-h-[12rem]">
      <Icon className="text-blue-600 text-4xl sm:text-5xl mb-4" role="presentation" />
      <span className="text-base sm:text-lg font-medium text-gray-800 dark:text-white text-center">
        {label}
      </span>
    </div>
  );
}
