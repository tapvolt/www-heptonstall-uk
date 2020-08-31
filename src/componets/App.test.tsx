import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders WeatherUnderground link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/WeatherUnderground Station/i);
  expect(linkElement).toBeInTheDocument();
});
