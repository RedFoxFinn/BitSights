import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType, act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { store } from '../controllers/redux/store';

import DateRange from './dateInput';

describe('DateRange: unit test', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><DateRange id='test_input' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('DateRange renders', () => {
    const component = screen.queryByTestId('test_input');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, DateRange);
  });
  it('DateRange renders, has start', () => {
    const component = screen.queryByTestId('test_input');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, DateRange);
    expect(component.textContent).toMatch('Date range');
    expect(component.textContent).toMatch('start');
    expect(component.textContent).toMatch('Date range start');
  });
  it('DateRange renders, has end', () => {
    const component = screen.queryByTestId('test_input');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, DateRange);
    expect(component.textContent).toMatch('Date range');
    expect(component.textContent).toMatch('end');
    expect(component.textContent).toMatch('Date range end');
  });
});