/* eslint-env vitest */

import { render, screen } from '@testing-library/react';
import { FaBolt, FaHardHat } from 'react-icons/fa';
import SkillGrid from '../Skills/SkillGrid';

describe('SkillGrid', () => {
  const title = 'Technical Skills';
  const skills = [
    { label: 'SPDA & Grounding', icon: FaBolt },
    { label: 'Substations', icon: FaHardHat },
  ];

  it('renders the grid title', () => {
    render(<SkillGrid title={title} skills={skills} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders all skill cards with labels', () => {
    render(<SkillGrid title={title} skills={skills} />);
    skills.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
