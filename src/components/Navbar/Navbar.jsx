import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarLinks from './NavbarLinks';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] border-b border-white/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-grow justify-between items-center">
          <NavbarLinks />
          <LanguageSelector />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </nav>
  );
}
