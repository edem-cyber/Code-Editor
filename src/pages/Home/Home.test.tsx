import { render, screen } from '@testing-library/react';
import Home from './Home';

test('should render welcome message', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to the Matrix/)).toBeInTheDocument();
});
