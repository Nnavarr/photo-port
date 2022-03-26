import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

// snapshot test
describe('Contact component', () => {
  it('renders', () => {
    render(<Contact></Contact>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact></Contact>)

    expect(asFragment()).toMatchSnapshot();
  })
})

