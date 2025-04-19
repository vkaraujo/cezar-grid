import { useTranslation } from 'react-i18next';

const links = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
];

export default function NavbarLinks({ onClick = () => {} }) {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-col md:flex-row md:justify-between md:flex-grow max-w-5xl mx-auto text-lg font-medium text-gray-700 space-y-4 md:space-y-0 md:space-x-0">
      {links.map((link) => (
        <li key={link.href} className="text-center md:flex-1">
          <a
            href={link.href}
            onClick={onClick}
            className="hover:text-blue-600 transition-colors"
          >
            {t(`nav.${link.label}`)}
          </a>
        </li>
      ))}
    </ul>
  );
}
