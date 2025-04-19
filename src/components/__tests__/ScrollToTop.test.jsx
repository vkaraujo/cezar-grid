/* eslint-env vitest */

import { render, screen, fireEvent } from '@testing-library/react';
import ScrollToTop from '../ScrollToTop';

describe('ScrollToTop component', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollY', { writable: true, value: 0 });
  });

  it('does not show the button when scrollY is less than 300', () => {
    render(<ScrollToTop />);
    fireEvent.scroll(window);
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();
  });

  it('shows the button when scrollY is greater than 300', () => {
    render(<ScrollToTop />);
    window.scrollY = 350;
    fireEvent.scroll(window);
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument();
  });

  it('calls window.scrollTo on click', () => {
    render(<ScrollToTop />);
    window.scrollY = 350;
    fireEvent.scroll(window);
    const button = screen.getByRole('button', { name: /scroll to top/i });
    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
