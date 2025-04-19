export default function SkillCard({ icon: Icon, label }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col items-center justify-center">
      <Icon className="text-blue-600 text-4xl sm:text-5xl mb-4" />
      <span className="text-base sm:text-lg font-medium text-gray-800 text-center">
        {label}
      </span>
    </div>
  );
}
