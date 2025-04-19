import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

const languages = {
  en: '🇺🇸',
  pt: '🇧🇷',
};

export default function LanguageSelector({ isMobile = false, closeMenu = () => {} }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
    closeMenu();
  };

  return (
    <div className={`relative ${isMobile ? 'flex justify-center' : 'hidden md:block'}`}>
      <button
        onClick={toggleMenu}
        className="flex items-center gap-1 text-2xl"
        aria-label="Toggle language menu"
      >
        {languages[i18n.language]}
        <FaChevronDown
          className={`text-base transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div
          className={`absolute ${isMobile ? 'left-1/2 -translate-x-1/2' : 'right-0'} mt-2 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200`}
        >
          {Object.entries(languages).map(([lng, flag]) =>
            lng !== i18n.language ? (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className="block w-full px-3 py-1 text-lg hover:bg-gray-100"
              >
                {flag}
              </button>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
