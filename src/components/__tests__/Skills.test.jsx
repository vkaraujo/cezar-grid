/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import Skills from '../Skills/Skills';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

const t = i18n.getFixedT(null, 'translation');

describe('Skills component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Skills />
      </I18nextProvider>
    );
  });

  it('renders the section title', () => {
    expect(screen.getByRole('heading', { name: t('skills.title') })).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText(t('skills.description'))).toBeInTheDocument();
  });

  it('renders technical and soft skills titles', () => {
    expect(screen.getByText(t('skills.technical'))).toBeInTheDocument();
    expect(screen.getByText(t('skills.soft'))).toBeInTheDocument();
  });

  it('renders all technical and soft skill labels', () => {
    const allLabels = [
      t('skills.spda'),
      t('skills.substations'),
      t('skills.automation'),
      t('skills.projectMgmt'),
      t('skills.problemSolving'),
      t('skills.teamwork'),
      t('skills.negotiation'),
      t('skills.english'),
    ];

    allLabels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
