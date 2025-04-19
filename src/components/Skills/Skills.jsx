import { useTranslation } from 'react-i18next';
import SkillGrid from './SkillGrid';

import {
  technicalSkills as getTechnicalSkills,
  softSkills as getSoftSkills,
} from '../data/skills';

export default function Skills() {
  const { t } = useTranslation();

  const technicalSkills = getTechnicalSkills(t);
  const softSkills = getSoftSkills(t);

  return (
    <section className="bg-gray-50 py-20 px-4 text-center" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          {t('skills.title')}
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          {t('skills.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <SkillGrid title={t('skills.technical')} skills={technicalSkills} />
          <SkillGrid title={t('skills.soft')} skills={softSkills} />
        </div>
      </div>
    </section>
  );
}
