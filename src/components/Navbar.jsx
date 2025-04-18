export default function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
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
