
import {
  findDownwardTrends,
  findUpwardTrends,
  findLongestDownwardTrend,
  findLongestUpwardTrend,
  findBuyingPoint,
  findSellingPoint
} from './deepvalueanalytics';

import { setDRStart, setDREnd } from '../controllers/app/daterange';
import { createDate } from './date';
import { transmutateValueData } from './marketvalue';

const sampledata = [
  [1638493200000,27000],
  [1638445000000,24500],
  [1638406800000,23000],
  [1638373000000,22500],
  [1638320400000,25000],
  [1638287000000,24000],
  [1638234000000,23000],
  [1638193800000,22500],
  [1638147600000,21500]
];

describe('findDownwardTrends', () => {
  let dummy = false;
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('findDownwardTrends', () => {
    const results = findDownwardTrends(transmutateValueData(sampledata));
    expect(results.length).toBe(4);
    expect(results[0].length).toBe(1);
    expect(results[0][0]).toHaveProperty('datetime');
    expect(results[0][0]).toHaveProperty('value');
    expect(results[0][0]).toHaveProperty('index');
  });
});

describe('findUpwardTrends', () => {
  let dummy = false;
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('findUpwardTrends', () => {
    const results = findUpwardTrends(transmutateValueData(sampledata));
    expect(results.length).toBe(2);
    expect(results[0].length).toBe(3);
  });
});

describe('findLongestDownwardTrend', () => {
  let dummy = false;
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('findLongestDownwardTrend', () => {
    const results = findLongestDownwardTrend(transmutateValueData(sampledata));
    expect(results.length).toBe(2);
    expect(results[0]).toHaveProperty('datetime');
    expect(results[0]).toHaveProperty('value');
    expect(results[0]).toHaveProperty('index');
  });
});

describe('findLongestUpwardTrend', () => {
  let dummy = false;
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('findLongestUpwardTrend', () => {
    const results = findLongestUpwardTrend(transmutateValueData(sampledata));
    expect(results.length).toBe(3);
    expect(results[0]).toHaveProperty('datetime');
    expect(results[0]).toHaveProperty('value');
    expect(results[0]).toHaveProperty('index');
  });
});

describe('findBuyingPoint', () => {
  let dummy = false;
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('findBuyingPoint', () => {
    const result = findBuyingPoint(transmutateValueData(sampledata));
    expect(result).toHaveProperty('datetime');
    expect(result).toHaveProperty('value');
    expect(result).toHaveProperty('index');
  });
});

describe('findSellingPoint', () => {
  let dummy = false;
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('findSellingPoint', () => {
    const result = findSellingPoint(transmutateValueData(sampledata));
    expect(result).toHaveProperty('datetime');
    expect(result).toHaveProperty('value');
    expect(result).toHaveProperty('index');
  });
});