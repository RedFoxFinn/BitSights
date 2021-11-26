
import { generateID } from './id';

describe('id - tool: generateID', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('generateID - default', () => {
    const id = generateID();
    expect(id).toBeTruthy();
    expect(id).toMatch('id');
    expect(id).toMatch('default');
    expect(id).toMatch('id.default');
  });
  it('generateID - with input', () => {
    const id = generateID('user', 'input');
    expect(id).toBeTruthy();
    expect(id).toMatch('user');
    expect(id).toMatch('input');
    expect(id).toMatch('user.input');
  });
});