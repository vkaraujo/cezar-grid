import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: t('experience.multi.company'),
      period: t('experience.multi.period'),
      summary: t('experience.multi.summary'),
    },
    {
      company: t('experience.zaghetto.company'),
      period: t('experience.zaghetto.period'),
      summary: t('experience.zaghetto.summary'),
    },
    {
      company: t('experience.ativa.company'),
      roles: [
        {
          title: t('experience.ativa.engineer.title'),
          period: t('experience.ativa.engineer.period'),
          summary: t('experience.ativa.engineer.summary'),
        },
        {
          title: t('experience.ativa.intern.title'),
          period: t('experience.ativa.intern.period'),
          summary: t('experience.ativa.intern.summary'),
        },
      ],
    },
    {
      company: t('experience.inovsat.company'),
      period: t('experience.inovsat.period'),
      summary: t('experience.inovsat.summary'),
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          {t('experience.title')}
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <div className="relative border-l-4 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              <h3 className="text-xl font-semibold text-blue-800">{exp.company}</h3>

              {exp.roles ? (
                <div className="space-y-4 mt-2">
                  {exp.roles.map((role, i) => (
                    <div key={i}>
                      <span className="block text-sm text-gray-500 font-medium">
                        {role.title} &middot; {role.period}
                      </span>
                      <p className="text-gray-700 mt-1">{role.summary}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                  <p className="text-gray-700 mt-2">{exp.summary}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
