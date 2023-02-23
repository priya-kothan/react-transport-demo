
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome as a text', () => {
  // Arrange
  render(<App />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText('Welcome');
  expect(helloWorldElement).toBeInTheDocument();
});