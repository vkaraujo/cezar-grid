/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Contact from '../Contact';

const t = i18n.getFixedT(null, 'translation');

describe('Contact component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Contact />
      </I18nextProvider>
    );
  });

  it('renders the section title and subtitle', () => {
    expect(screen.getByRole('heading', { name: t('contact.title') })).toBeInTheDocument();
    expect(screen.getByText(t('contact.subtitle'))).toBeInTheDocument();
  });

  it('renders email and phone links', () => {
    expect(screen.getByRole('link', { name: /cezar\.awa@hotmail\.com/i })).toHaveAttribute('href', 'mailto:cezar.awa@hotmail.com');
    expect(screen.getByRole('link', { name: /\(21\) 99258-5915/i })).toHaveAttribute('href', 'tel:+5521992585915');
  });

  it('renders social media links', () => {
    expect(screen.getByLabelText('LinkedIn')).toHaveAttribute('href', 'https://www.linkedin.com/in/cezar-awa/');
    expect(screen.getByLabelText('GitHub')).toHaveAttribute('href', 'https://github.com/CezarAWA/Public-View-Repo');
  });

  it('renders the resume download button', () => {
    expect(screen.getByRole('link', { name: t('contact.download') })).toHaveAttribute('href', '/Cezar-Araujo-Resume.pdf');
  });
});
