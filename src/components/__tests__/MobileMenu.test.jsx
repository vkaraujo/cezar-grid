/* eslint-env vitest */

import { render, screen, fireEvent } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import MobileMenu from '../Navbar/MobileMenu';

describe('MobileMenu', () => {
  it('renders menu links and language selector', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MobileMenu closeMenu={vi.fn()} />
      </I18nextProvider>
    );

    expect(screen.getByRole('link', { name: /about|sobre/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /toggle language menu/i })).toBeInTheDocument();
  });

  it('calls closeMenu when a link is clicked', () => {
    const closeMenuMock = vi.fn();

    render(
      <I18nextProvider i18n={i18n}>
        <MobileMenu closeMenu={closeMenuMock} />
      </I18nextProvider>
    );

    const aboutLink = screen.getByRole('link', { name: /about|sobre/i });
    fireEvent.click(aboutLink);

    expect(closeMenuMock).toHaveBeenCalled();
  });
});
