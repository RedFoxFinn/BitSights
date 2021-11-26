
import { appid, appname } from '../../package.json';
import { APPID, APPNAME } from './info';

describe('info - tool', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('APPID', () => {
    const id = APPID();
    expect(id).toBeTruthy();
    expect(id).toMatch(appid);
  });
  it('APPNAME', () => {
    const name = APPNAME();
    expect(name).toBeTruthy();
    expect(name).toMatch(appname);
  });
});