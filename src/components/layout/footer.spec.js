import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType, act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { store } from '../../controllers/redux/store';

import Footer from './footer';

describe('footer: unit test', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><Footer id='test_footer' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('footer renders', () => {
    const component = screen.queryByTestId('test_footer');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Footer);
    expect(component.textContent).toMatch('Version');
  });
  it('footer renders, has Repository', () => {
    const component = screen.queryByTestId('test_footer');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Footer);
    expect(component.textContent).toMatch('Repository');
    const repolink = within(component).getByText('Repository').closest('a');
    expect(repolink).toBeTruthy();
    expect(repolink).toHaveAttribute('href', 'https://github.com/RedFoxFinn/BitSights');
  });
  it('footer renders, has Author', () => {
    const component = screen.queryByTestId('test_footer');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Footer);
    expect(component.textContent).toMatch('Author');
    const authorlink = within(component).getByText('Author').closest('a');
    expect(authorlink).toBeTruthy();
    expect(authorlink).toHaveAttribute('href', 'https://github.com/RedFoxFinn');
  });
});