import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isCompositeComponentWithType, act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { store } from '../controllers/redux/store';

import TheLayout from './layout';

import Content from './layout/content';
import Footer from './layout/footer';
import Header from './layout/header';

describe('layout: unit test', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><TheLayout id='test_layout' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('layout renders', () => {
    const component = screen.queryByTestId('test_layout');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, TheLayout);
  });
  it('layout renders, has Content', () => {
    const component = screen.queryByTestId('test_layout');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Content);
    const content = within(component).queryByTestId('test_layout.content');
    expect(content).toBeTruthy();
    isCompositeComponentWithType(content, Content);
  });
  it('layout renders, has Footer', () => {
    const component = screen.queryByTestId('test_layout');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Content);
    const footer = within(component).queryByTestId('test_layout.footer');
    expect(footer).toBeTruthy();
    isCompositeComponentWithType(footer, Footer);
  });
  it('layout renders, has Header', () => {
    const component = screen.queryByTestId('test_layout');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Content);
    const header = within(component).queryByTestId('test_layout.header');
    expect(header).toBeTruthy();
    isCompositeComponentWithType(header, Header);
  });
});