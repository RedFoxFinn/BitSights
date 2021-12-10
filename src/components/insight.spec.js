import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { isCompositeComponentWithType, act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { Line } from 'react-chartjs-2';

import { store } from '../controllers/redux/store';

import Insight from './insight';

describe('insight: unit test', () => {
  let dummy = false;
  beforeEach(() => render(<Provider store={store}><Insight id='test_insight' /></Provider>));
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('insight renders', () => {
    const component = screen.queryByTestId('test_insight');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Insight);
    expect(component.textContent).toMatch('₿itcoin market value');
    expect(component.textContent).toMatch('₿itcoin information');
  });
  it('insight renders, has BasicData', () => {
    const component = screen.queryByTestId('test_insight');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Insight);
    setTimeout(() => {
      const basic = within(component).queryByTestId('test_insight.basic_data');
      expect(basic).toBeTruthy();
      expect(basic.textContent).toMatch('Value');
      expect(basic.textContent).toMatch('Name');
      expect(basic.textContent).toMatch('Symbol');
      expect(basic.textContent).toMatch('Hashing');
      expect(basic.textContent).toMatch('Genesis date');
      const atl = within(basic).queryByTestId('test_insight.basic_data.athl_low');
      expect(atl).toBeTruthy();
      expect(atl.textContent).toMatch('All-Time Low');
      const ath = within(basic).queryByTestId('test_insight.basic_data.athil_high');
      expect(ath).toBeTruthy();
      expect(ath.textContent).toMatch('All-Time High');
    }, 1500);
  });
  it('insight renders, has DateRangeData', () => {
    const component = screen.queryByTestId('test_insight');
    expect(component).toBeTruthy();
    isCompositeComponentWithType(component, Insight);
    setTimeout(() => {
      const ranged = within(component).queryByTestId('test_insight.ranged_data');
      expect(ranged).toBeTruthy();
      const range = within(ranged).queryByTestId('test_insight.ranged_data.date_range');
      expect(range).toBeTruthy();
      const analysed = within(ranged).queryByTestId('test_insight.ranged_data.analysed_data');
      expect(analysed).toBeTruthy();
      const chart = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.value_chart');
      expect(chart).toBeTruthy();
      expect(chart.textContent).toMach('₿TC market value in €');
      const linechart = within(chart).queryByTestId('test_insight.ranged_data.analysed_data.value_chart.line_chart');
      expect(linechart).toBeTruthy();
      isCompositeComponentWithType(linechart, Line);
      const low = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.value_low');
      expect(low).toBeTruthy();
      expect(low.textContent).toMatch('Lowest value');
      const high = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.value_high');
      expect(high).toBeTruthy();
      expect(high.textContent).toMatch('Highest value');
      expect(analysed.textContent).toMatch('Trade volume');
      const trade_l = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.volume_low');
      expect(trade_l).toBeTruthy();
      expect(trade_l.textContent).toMatch('Lowest trading volume');
      const trade_h = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.volume_high');
      expect(trade_h).toBeTruthy();
      expect(trade_h.textContent).toMatch('Highest trading volume');
      const recommendations = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.trade_recommendations');
      expect(recommendations).toBeTruthy();
      expect(recommendations.textContent).toMatch('Trade recommendations');
      expect(recommendations.textContent).toMatch('Buying recommended');
      expect(recommendations.textContent).toMatch('Selling recommended');
      expect(analysed.textContent).toMatch('Market value trend');
      const bearish = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.trend_bearish');
      expect(bearish).toBeTruthy();
      expect(bearish.textContent).toMatch('Longest bearish trend');
      expect(bearish.textContent).toMatch('Bearish trend start');
      expect(bearish.textContent).toMatch('Bearish trend end');
      const bullish = within(analysed).queryByTestId('test_insight.ranged_data.analysed_data.trend_bullish');
      expect(bullish).toBeTruthy();
      expect(bullish.textContent).toMatch('Longest bullish trend');
      expect(bullish.textContent).toMatch('Bullish trend start');
      expect(bullish.textContent).toMatch('Bullish trend end');
    }, 1500);
  });
});