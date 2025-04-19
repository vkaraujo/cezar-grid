export const experienceData = (t) => [
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
