
// test suite for colors.js functionalities

import { getColor, getColorWithAlpha } from './colors';

describe('colors - tool: getColor', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('default', () => {
    const result = getColor();
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(255,204,29)');
  });
  it('background', () => {
    const result = getColor('background');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(235,232,204)');
  });
  it('background-alt', () => {
    const result = getColor('background-alt');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(255,204,29)');
  });
  it('header', () => {
    const result = getColor('header');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(11,70,25)');
  });
  it('text', () => {
    const result = getColor('text');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(17,101,48)');
  });
  it('err', () => {
    const result = getColor('err');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(205,24,24)');
  });
  it('warn', () => {
    const result = getColor('warn');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(255,103,1)');
  });
  it('info', () => {
    const result = getColor('info');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(15,44,103)');
  });
  it('special', () => {
    const result = getColor('special');
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(174,0,90)');
  });
});

describe('colors - tool: getColorWithAlpha', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('default', () => {
    const result = getColorWithAlpha();
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(255,204,29,1)');
  });
  it('background', () => {
    const result = getColorWithAlpha('background',0.8);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(235,232,204,0.8)');
  });
  it('background-alt', () => {
    const result = getColorWithAlpha('background-alt',0.7);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(255,204,29,0.7)');
  });
  it('header', () => {
    const result = getColorWithAlpha('header',0.6);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(11,70,25,0.6)');
  });
  it('text', () => {
    const result = getColorWithAlpha('text',0.5);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(17,101,48,0.5)');
  });
  it('err', () => {
    const result = getColorWithAlpha('err',0.4);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(205,24,24,0.4)');
  });
  it('warn', () => {
    const result = getColorWithAlpha('warn',0.3);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(255,103,1,0.3)');
  });
  it('info', () => {
    const result = getColorWithAlpha('info', 0.2);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(15,44,103,0.2)');
  });
  it('special', () => {
    const result = getColorWithAlpha('special', 0.1);
    expect(result).toBeTruthy();
    expect(result).toMatch('rgb(174,0,90,0.1)');
  });
});