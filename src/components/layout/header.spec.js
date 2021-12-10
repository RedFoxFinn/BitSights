import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType, act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { store } from '../../controllers/redux/store';

import Header from './header';

describe('header: unit test', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><Header id='test_header' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('header renders', () => {
    const component = screen.queryByTestId('test_header');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Header);
    expect(component.textContent).toMatch('₿itSights');
    const textElement = within(component).getByText('₿itSights');
    expect(textElement).toBeTruthy();
    expect(textElement).toHaveAttribute('title', '₿itcoint market value analytics');
  });
});