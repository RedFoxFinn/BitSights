
import {
  transmutateValueData,
  sortValueData,
  filterValueData,
  splinterData
} from './marketvalue';

import { setDRStart, setDREnd } from '../controllers/app/daterange';
import { createDate } from './date';

const sampledata = [
  [1638493200000,27000],
  [1638445000000,22000],
  [1638406800000,23000],
  [1638373000000,24500],
  [1638320400000,26000],
  [1638287000000,25000],
  [1638234000000,24000],
  [1638193800000,25500],
  [1638147600000,25000]
];

describe('transmutateValueData', () => {
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
  it('transmutateValueData, only', () => {
    const result = transmutateValueData(sampledata, true);
    expect(result).toBeTruthy();
    expect(result.length).toBe(9);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('value');
  });
  it('transmutateValueData, full', () => {
    const result = transmutateValueData(sampledata);
    expect(result).toBeTruthy();
    expect(result.length).toBe(7);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('value');
  });
});

describe('sortValueData', () => {
  let dummy = false;
  let dataset = transmutateValueData(sampledata, true);
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('sortData, only', () => {
    const result = sortValueData(dataset, true);
    expect(result).toBeTruthy();
    expect(result.length).toBe(9);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('value');
  });
  it('sortData, full', () => {
    const result = sortValueData(dataset);
    expect(result).toBeTruthy();
    expect(result.length).toBe(7);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('value');
  });
});

describe('filterValueData', () => {
  let dummy = false;
  let dataset = sortValueData(transmutateValueData(sampledata, true),true);
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('filterData', () => {
    const result = filterValueData(dataset);
    expect(result).toBeTruthy();
    expect(result.length).toBe(7);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('value');
  });
});

describe('splinterData', () => {
  let dummy = false;
  let dataset = transmutateValueData(sampledata);
  beforeAll(() => {
    setDRStart(createDate('2021-11-28'));
    setDREnd(createDate('2021-12-04'));
  });
  it('dummy', () => {
    expect(dummy).toBe(false);
    dummy = true;
    expect(dummy).toBe(true);
  });
  it('splinterData', () => {
    const result = splinterData(dataset);
    expect(result).toBeTruthy();
    expect(result).toHaveProperty('labels');
    expect(result).toHaveProperty('datasets');
    expect(result.datasets[0]).toHaveProperty('id');
    expect(result.datasets[0]).toHaveProperty('label');
    expect(result.datasets[0]).toHaveProperty('data');
    expect(result.datasets[0]).toHaveProperty('borderColor');
    expect(result.datasets[0]).toHaveProperty('backgroundColor');
  });
});