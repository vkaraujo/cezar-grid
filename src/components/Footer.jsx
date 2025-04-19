import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
      <p>
        {t('footer.builtBy')}{' '}
        <a
          href="https://github.com/vkaraujo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Viktor
        </a>{' '}
        · 2025
      </p>
    </footer>
  );
}
