/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Experience from '../Experience';

const t = i18n.getFixedT(null, 'translation');

describe('Experience component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Experience />
      </I18nextProvider>
    );
  });

  it('renders the section title', () => {
    expect(screen.getByRole('heading', { name: t('experience.title') })).toBeInTheDocument();
  });

  it('renders company names', () => {
    expect(screen.getByText(t('experience.multi.company'))).toBeInTheDocument();
    expect(screen.getByText(t('experience.zaghetto.company'))).toBeInTheDocument();
    expect(screen.getByText(t('experience.ativa.company'))).toBeInTheDocument();
    expect(screen.getByText(t('experience.inovsat.company'))).toBeInTheDocument();
  });

  it('renders single-role experience with period and summary', () => {
    expect(screen.getByText(t('experience.multi.period'))).toBeInTheDocument();
    expect(screen.getByText(t('experience.multi.summary'))).toBeInTheDocument();
  });
});
