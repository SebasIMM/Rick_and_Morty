import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title message', () => {
  render(<App />);
  const titleElement = screen.getByText("Rick and Morty");
  expect(titleElement).toBeInTheDocument();
});
