export default function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="absolute top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] border-b border-white/30"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center">
        <ul className="flex space-x-64 text-lg font-medium text-gray-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

