import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType, act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { store } from '../../controllers/redux/store';

import Content from './content';

import DateRange from '../dateInput';
import Insight from '../insight';

describe('content: unit test', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><Content id='test_content' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('content renders', () => {
    const component = screen.queryByTestId('test_content');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Content);
  });
  it('content renders, has DateRange', () => {
    const component = screen.queryByTestId('test_content');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Content);
    const range = within(component).queryByTestId('test_content.daterange');
    expect(range).toBeTruthy();
    isCompositeComponentWithType(range, DateRange);
  });
  it('content renders, has Insight', () => {
    const component = screen.queryByTestId('test_content');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Content);
    setTimeout(() => {
      const insight = within(component).queryByTestId('test_content.insight');
      expect(insight).toBeTruthy();
      isCompositeComponentWithType(insight, Insight);
    }, 3500);
  });
});