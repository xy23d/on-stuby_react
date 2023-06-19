import { render, screen } from '@testing-library/react';
import Articles from './Articles';

test('renders learn react link', () => {
  render(<Articles />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
