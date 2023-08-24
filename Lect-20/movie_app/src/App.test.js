import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const label = screen.getByText("Search");
  expect(label).toBeInTheDocument();
});