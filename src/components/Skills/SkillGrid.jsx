import SkillCard from './SkillCard';

export default function SkillGrid({ title, skills }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-6 w-full max-w-md">
        {skills.map(({ label, icon }, idx) => (
          <SkillCard key={idx} icon={icon} label={label} />
        ))}
      </div>
    </div>
  );
}
