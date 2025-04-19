import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'experience', href: '#experience' },
    { label: 'education', href: '#education' },
    { label: 'contact', href: '#contact' },
  ];

  const languages = {
    en: '🇺🇸',
    pt: '🇧🇷',
  };

  const toggleLanguageMenu = () => setShowLangMenu(!showLangMenu);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
    setIsOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] border-b border-white/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-between flex-grow max-w-5xl mx-auto text-lg font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.href} className="flex-1 text-center">
              <a href={link.href} className="hover:text-blue-600 transition-colors">
                {t(`nav.${link.label}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Switcher (Desktop) */}
        <div className="hidden md:block relative">
          <button
            onClick={toggleLanguageMenu}
            className="flex items-center gap-1 text-2xl"
            aria-label="Toggle language menu"
          >
            {languages[i18n.language]}
            <FaChevronDown
              className={`text-base transition-transform duration-200 ${
                showLangMenu ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showLangMenu && (
            <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
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
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-medium text-gray-700 mb-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-blue-600 transition-colors"
                >
                  {t(`nav.${link.label}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Dropdown (Mobile) */}
          <div className="flex justify-center">
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center gap-1 text-2xl"
                aria-label="Toggle language menu"
              >
                {languages[i18n.language]}
                <FaChevronDown
                  className={`text-base transition-transform duration-200 ${
                    showLangMenu ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showLangMenu && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
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
          </div>
        </div>
      )}
    </nav>
  );
}
