/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Navbar from '../Navbar/Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>
    );
  });

  it('renders desktop links', () => {
    const aboutLink = screen.getByRole('link', { name: /about|sobre/i });
    expect(aboutLink).toBeInTheDocument();
  });
});
