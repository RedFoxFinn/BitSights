
import {
  createDate,
  incrementByWeek,
  incrementByDays,
  decrementByWeek,
  sanitiseDate,
  calculateDateDiff,
  calculateDateRangeLength,
  timestampIt
} from './date';

describe('createDate', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('date within limitations', () => {
    const result = createDate('2013-06-01');
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('$y');
    expect(result['$y']).toBe(2013);
    expect(result).toHaveProperty('$M');
    expect(result['$M']).toBe(5);
    expect(result).toHaveProperty('$D');
    expect(result['$D']).toBe(1);
  });
  it('date within limitations, format', () => {
    const result = createDate('2013-06-01',true);
    expect(result).toBeTruthy();
    expect(result).toMatch('2013-06-01');
  });
  it('date not within limitations, earlier', () => {
    const result = createDate('2013-04-01');
    expect(result).not.toBeTruthy();
  });
  it('date not within limitations, later', () => {
    const result = createDate('2093-06-01');
    expect(result).not.toBeTruthy();
  });
});

describe('incrementByWeek', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('date within limitations', () => {
    const result = incrementByWeek('2013-06-01');
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('$y');
    expect(result['$y']).toBe(2013);
    expect(result).toHaveProperty('$M');
    expect(result['$M']).toBe(5);
    expect(result).toHaveProperty('$D');
    expect(result['$D']).toBe(8);
  });
  it('date within limitations, format', () => {
    const result = incrementByWeek('2013-06-01',true);
    expect(result).toBeTruthy();
    expect(result).toMatch('2013-06-08');
  });
  it('date not within limitations, earlier', () => {
    const result = incrementByWeek('2013-04-01');
    expect(result).not.toBeTruthy();
  });
  it('date not within limitations, later', () => {
    const result = incrementByWeek('2093-06-01');
    expect(result).not.toBeTruthy();
  });
});

describe('decrementByWeek', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('date within limitations', () => {
    const result = decrementByWeek('2013-06-01');
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('$y');
    expect(result['$y']).toBe(2013);
    expect(result).toHaveProperty('$M');
    expect(result['$M']).toBe(4);
    expect(result).toHaveProperty('$D');
    expect(result['$D']).toBe(25);
  });
  it('date within limitations, format', () => {
    const result = decrementByWeek('2013-06-01',true);
    expect(result).toBeTruthy();
    expect(result).toMatch('2013-05-25');
  });
  it('date not within limitations, earlier', () => {
    const result = decrementByWeek('2013-04-01');
    expect(result).not.toBeTruthy();
  });
  it('date not within limitations, later', () => {
    const result = decrementByWeek('2093-06-01');
    expect(result).not.toBeTruthy();
  });
});

describe('incrementByDays', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('date within limitations', () => {
    const result = incrementByDays('2013-06-01',3);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('$y');
    expect(result['$y']).toBe(2013);
    expect(result).toHaveProperty('$M');
    expect(result['$M']).toBe(5);
    expect(result).toHaveProperty('$D');
    expect(result['$D']).toBe(4);
  });
  it('date within limitations, format', () => {
    const result = incrementByDays('2013-06-01', 3, true);
    expect(result).toBeTruthy();
    expect(result).toMatch('2013-06-04');
  });
  it('date not within limitations, earlier', () => {
    const result = incrementByDays('2013-04-01',3);
    expect(result).not.toBeTruthy();
  });
  it('date not within limitations, later', () => {
    const result = incrementByDays('2093-06-01',3);
    expect(result).not.toBeTruthy();
  });
});

describe('sanitiseDate', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('sanitiseDate', () => {
    const result = sanitiseDate(new Date('2013-06-04T10:00:00.000Z'));
    expect(result).toBeTruthy();
    expect(result).toMatch('2013-06-04');
  });
});

describe('calculateDateDiff', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('calculateDateDiff', () => {
    const result = calculateDateDiff(new Date('2013-06-04T10:00:00.000Z'), new Date('2013-06-10T10:00:00.000Z'));
    expect(result).toBeTruthy();
    expect(result).toBe(6);
  });
});

describe('calculateDateRangeLength', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('calculateDateRangeLength', () => {
    const result = calculateDateRangeLength(new Date('2013-06-04T10:00:00.000Z'), new Date('2013-06-10T10:00:00.000Z'));
    expect(result).toBeTruthy();
    expect(result).toBe(7);
  });
});

describe('timestampIt', () => {
  let dummy = false;
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('timestampIt', () => {
    const result = timestampIt(new Date('2013-06-04T10:00:00.000Z'));
    expect(result).toBeTruthy();
    expect(result).toBe(1370300400);
  });
});