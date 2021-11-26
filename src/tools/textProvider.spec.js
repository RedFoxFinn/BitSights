
import { getTextsByLang } from './textProvider';

describe('textProvider - tool', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('getTextsByLang - default', () => {
    const texts = getTextsByLang();
    expect(texts).toBeTruthy();
    expect(texts).toHaveProperty('lang');
    expect(texts.lang).toMatch('en');
  });
  it('getTextsByLang - fi', () => {
    const texts = getTextsByLang('fi');
    expect(texts).toBeTruthy();
    expect(texts).toHaveProperty('lang');
    expect(texts.lang).toMatch('fi');
  });
  it('getTextsByLang - en', () => {
    const texts = getTextsByLang('en');
    expect(texts).toBeTruthy();
    expect(texts).toHaveProperty('lang');
    expect(texts.lang).toMatch('en');
  });
  it('getTextsByLang - fields', () => {
    const texts = getTextsByLang();
    expect(texts).toBeTruthy();
    expect(texts).toHaveProperty('lang');
    expect(texts).toHaveProperty('header');
    expect(texts).toHaveProperty('footer');
    expect(texts.footer).toHaveProperty('source');
    expect(texts.footer).toHaveProperty('author');
    expect(texts.footer).toHaveProperty('version');
    expect(texts).toHaveProperty('about');
  });
});