import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-20 px-4 text-center" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          {t('about.title')}
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t('about.paragraph1')}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          {t('about.paragraph2')}
        </p>
      </div>
    </section>
  );
}
