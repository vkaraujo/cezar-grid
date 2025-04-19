/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Education from '../Education';

const t = i18n.getFixedT(null, 'translation');

describe('Education component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Education />
      </I18nextProvider>
    );
  });

  it('renders the main section title', () => {
    expect(screen.getByRole('heading', { name: t('education.title') })).toBeInTheDocument();
  });

  it('renders the education subtitle with icon', () => {
    expect(screen.getByText(t('education.subtitle'))).toBeInTheDocument();
  });

  it('renders all education entries with required fields', () => {
    const entries = [
      t('education.compsci.title'),
      t('education.bi.title'),
      t('education.ee.title'),
    ];

    entries.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    expect(screen.getByText(t('education.compsci.institution'))).toBeInTheDocument();
    expect(screen.getByText(t('education.compsci.period'))).toBeInTheDocument();

    expect(screen.getByText(t('education.inProgress'))).toBeInTheDocument();
  });

  it('renders the certifications subtitle with icon', () => {
    expect(screen.getByText(t('education.certifications'))).toBeInTheDocument();
  });

  it('renders all certifications', () => {
    expect(screen.getByText(t('education.certs.powerbi'))).toBeInTheDocument();
    expect(screen.getByText(t('education.certs.productivity'))).toBeInTheDocument();
  });
});
