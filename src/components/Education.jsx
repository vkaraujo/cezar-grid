import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { educationData, certificationsData } from './data/education';

export default function Education() {
  const { t } = useTranslation();

  const education = educationData(t);
  const certifications = certificationsData(t);

  return (
    <section className="bg-white dark:bg-[#242437] py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          {t('education.title')}
        </h2>

        {/* Education Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-blue-600" aria-hidden="true" /> {t('education.subtitle')}
          </h3>
          <ul className="relative border-l-4 border-blue-600 pl-6 space-y-8">
            {education.map((item, index) => (
              <li key={index} className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white" />
                <p className="text-gray-900 dark:text-white font-semibold text-lg">
                  {item.title}
                  {item.inProgress && (
                    <span className="ml-2 px-2 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      {t('education.inProgress')}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">{item.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
            <FaCertificate className="text-blue-600" aria-hidden="true" /> {t('education.certifications')}
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index} className="text-sm sm:text-base">{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
