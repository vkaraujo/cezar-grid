import NavbarLinks from './NavbarLinks';

export default function MobileMenu({ closeMenu }) {
  return (
    <div className="md:hidden px-6 pb-4">
      <div className="flex flex-col justify-evenly h-[60vh]">
        <NavbarLinks onClick={closeMenu} />
      </div>
    </div>
  );
}
