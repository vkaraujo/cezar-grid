/* eslint-env vitest */

import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import LanguageSelector from '../Navbar/LanguageSelector';

describe('LanguageSelector', () => {
  beforeEach(() => {
    i18n.changeLanguage('en');
  });

  it('displays the current language flag', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );

    expect(screen.getByText('🇺🇸')).toBeInTheDocument();
  });

  it('shows dropdown when clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelector />
      </I18nextProvider>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle language menu/i });
    fireEvent.click(toggleButton);

    expect(screen.getByText('🇧🇷')).toBeInTheDocument();
  });
});
