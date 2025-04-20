import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
        {t('contact.title')}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">{t('contact.subtitle')}</p>

      <div className="space-y-4 text-lg text-gray-700 dark:text-gray-200 mb-10">
        <p className="flex items-center gap-2 justify-center md:justify-start">
          <FaEnvelope className="text-blue-600" aria-hidden="true" />
          <a
            href="mailto:cezar.awa@hotmail.com"
            className="text-blue-600 underline"
          >
            cezar.awa@hotmail.com
          </a>
        </p>
        <p className="flex items-center gap-2 justify-center md:justify-start">
          <FaPhone className="text-blue-600" aria-hidden="true" />
          <a
            href="tel:+5521992585915"
            className="text-blue-600 underline"
          >
            (21) 99258-5915
          </a>
        </p>
      </div>

      <div className="flex justify-center md:justify-start space-x-6 mb-8">
        <a
          href="https://www.linkedin.com/in/cezar-awa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/CezarAWA/Public-View-Repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-black text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <a
        href="/Cezar-Araujo-Resume.pdf"
        download
        className="inline-block bg-blue-600 text-white px-7 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md"
      >
        {t('contact.download')}
      </a>
    </div>
  );
}
