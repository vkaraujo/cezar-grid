import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-24 bg-[#1e1e2f] text-white overflow-hidden">
      {/* Image */}
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-10 md:mb-0 md:mr-16 flex-shrink-0">
        <img
          src="/Cezar.jpeg"
          alt="Cezar Araujo"
          className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-blue-500"
        />
      </div>

      {/* Info */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-white">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl font-semibold text-blue-400 mb-6">
          {t('hero.subtitle')}
        </h2>
        <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
          {t('hero.description')}
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}
