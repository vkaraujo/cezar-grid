import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarLinks from './NavbarLinks';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/30 dark:border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Mobile Controls */}
        <div className="md:hidden flex justify-between items-center w-full max-w-xs">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-200 text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <LanguageSelector isMobile />
          <ThemeToggle />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-grow justify-between items-center">
          <NavbarLinks />
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </nav>
  );
}
