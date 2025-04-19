import { useTranslation } from 'react-i18next';
import {
  FaTools,
  FaBolt,
  FaHardHat,
  FaProjectDiagram,
  FaLanguage,
  FaPuzzlePiece,
  FaUsers,
  FaHandshake,
} from 'react-icons/fa';
import { MdOutlineEngineering } from 'react-icons/md';

export default function Skills() {
  const { t } = useTranslation();

  const technicalSkills = [
    { label: t('skills.spda'), icon: FaBolt },
    { label: t('skills.substations'), icon: FaHardHat },
    { label: t('skills.automation'), icon: MdOutlineEngineering },
    { label: t('skills.projectMgmt'), icon: FaProjectDiagram },
  ];

  const softSkills = [
    { label: t('skills.problemSolving'), icon: FaPuzzlePiece },
    { label: t('skills.teamwork'), icon: FaUsers },
    { label: t('skills.negotiation'), icon: FaHandshake },
    { label: t('skills.english'), icon: FaLanguage },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 text-center" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          {t('skills.title')}
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          {t('skills.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Technical Skills */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">
              {t('skills.technical')}
            </h3>
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {technicalSkills.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col items-center justify-center"
                >
                  <Icon className="text-blue-600 text-4xl sm:text-5xl mb-4" />
                  <span className="text-base sm:text-lg font-medium text-gray-800 text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">
              {t('skills.soft')}
            </h3>
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {softSkills.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 ease-in-out flex flex-col items-center justify-center"
                >
                  <Icon className="text-blue-600 text-4xl sm:text-5xl mb-4" />
                  <span className="text-base sm:text-lg font-medium text-gray-800 text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
