import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../hooks/useDarkMode';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl ml-4"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
