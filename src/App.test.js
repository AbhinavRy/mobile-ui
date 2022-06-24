import { render, screen } from '@testing-library/react';
import App from './App';

test('renders There is something For Everyone.', () => {
  render(<App />);
  const linkElement = screen.getByText(/There is something For Everyone./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders sale banner', async () => {
  render(<App />);
  const image = screen.getByAltText('sale-banner');
  expect(image.src).toContain('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-389dc7a74f096738d1d425314404a2cd_screen.jpg?ts=1605613724');
});
