import {
  FaTools,
  FaBolt,
  FaHardHat,
  FaProjectDiagram,
  FaLanguage,
} from 'react-icons/fa';
import { MdOutlineEngineering } from 'react-icons/md';

const skills = [
  { label: 'SPDA & Grounding', icon: FaBolt },
  { label: 'Substations', icon: FaHardHat },
  { label: 'Automation', icon: MdOutlineEngineering },
  { label: 'Project Mgmt', icon: FaProjectDiagram },
  { label: 'Problem Solving', icon: FaTools },
  { label: 'Teamwork', icon: FaTools },
  { label: 'Negotiation', icon: FaTools },
  { label: 'English (Advanced)', icon: FaLanguage },
];

export default function Skills() {
  return (
    <section className="bg-white py-20 px-4 text-center" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Skills & Tools
        </h2>
        <p className="text-gray-600 mb-10">
          Tools and competencies I use to deliver quality and efficiency.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.label}
                className="bg-gray-100 border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex flex-col items-center justify-center"
              >
                <IconComponent className="text-blue-600 text-2xl mb-2" />
                <span className="text-sm font-medium text-gray-800">
                  {skill.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
