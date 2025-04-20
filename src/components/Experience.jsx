import { useTranslation } from 'react-i18next';
import { experienceData } from './data/experience';

export default function Experience() {
  const { t } = useTranslation();
  const experiences = experienceData(t);

  return (
    <section className="bg-gray-100 dark:bg-[#2c2c3f] py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          {t('experience.title')}
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <div className="relative border-l-4 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400">{exp.company}</h3>

              {exp.roles ? (
                <div className="space-y-4 mt-2">
                  {exp.roles.map((role, i) => (
                    <div key={i}>
                      <span className="block text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {role.title} &middot; {role.period}
                      </span>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">{role.summary}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.period}</span>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.summary}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
