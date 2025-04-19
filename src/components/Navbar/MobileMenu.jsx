import NavbarLinks from './NavbarLinks';
import LanguageSelector from './LanguageSelector';

export default function MobileMenu({ closeMenu }) {
  return (
    <div className="md:hidden px-6 pb-4">
      <NavbarLinks onClick={closeMenu} />
      <LanguageSelector isMobile={true} closeMenu={closeMenu} />
    </div>
  );
}
