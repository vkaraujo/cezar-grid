/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Hero from '../Hero';

describe('Hero component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Hero />
      </I18nextProvider>
    );
  });

  it('renders the main heading (name)', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: /cezar/i })
    ).toBeInTheDocument();
  });

  it('renders the subtitle (role/position)', () => {
    expect(
      screen.getByRole('heading', { level: 2, name: /engineer|engenheiro/i })
    ).toBeInTheDocument();
  });

  it('renders the description paragraph', () => {
    expect(
      screen.getByText(/cost-effective planning.*execution/i)
    ).toBeInTheDocument();
  });

  it('renders the image with alt text', () => {
    expect(
      screen.getByAltText(/cezar/i)
    ).toBeInTheDocument();
  });

  it('renders the call-to-action button linking to #contact', () => {
    const cta = screen.getByRole('link', { name: /contact|contato/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#contact');
  });
});
