import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

it('renders a span with the text Hello World', () => {
  const wrapper = rtl.render(
    <App />
  );
  const element = wrapper.queryByText(/hello world/i);
  expect(element).toBeInTheDocument();
  console.log(wrapper.debug());
});
