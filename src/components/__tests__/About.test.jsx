/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import About from '../About';

const t = i18n.getFixedT(null, 'translation');

describe('About component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <About />
      </I18nextProvider>
    );
  });

  it('renders the section title', () => {
    expect(screen.getByRole('heading', { name: t('about.title') })).toBeInTheDocument();
  });

  it('renders the first paragraph', () => {
    expect(screen.getByText(t('about.paragraph1'))).toBeInTheDocument();
  });

  it('renders the second paragraph', () => {
    expect(screen.getByText(t('about.paragraph2'))).toBeInTheDocument();
  });
});
