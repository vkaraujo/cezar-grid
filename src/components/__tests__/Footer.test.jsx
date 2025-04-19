/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders the translated footer text with author and year', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>
    );

    const builtBy = screen.getByText(/viktor/i);
    expect(builtBy).toBeInTheDocument();
    expect(builtBy).toHaveAttribute('href', 'https://github.com/vkaraujo');

    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });
});
