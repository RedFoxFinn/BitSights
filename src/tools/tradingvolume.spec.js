
import {
  transmutateVolumeData,
  sortVolumeData,
  filterVolumeData
} from './tradingvolume';

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

describe('transmutateVolumeData', () => {
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
  it('transmutateVolumeData, only', () => {
    const result = transmutateVolumeData(sampledata, true);
    expect(result).toBeTruthy();
    expect(result.length).toBe(9);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('volume');
  });
  it('transmutateVolumeData, full', () => {
    const result = transmutateVolumeData(sampledata);
    expect(result).toBeTruthy();
    expect(result.length).toBe(7);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('volume');
  });
});

describe('sortVolumeData', () => {
  let dummy = false;
  let dataset = transmutateVolumeData(sampledata, true);
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
    const result = sortVolumeData(dataset, true);
    expect(result).toBeTruthy();
    expect(result.length).toBe(9);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('volume');
  });
  it('sortData, full', () => {
    const result = sortVolumeData(dataset);
    expect(result).toBeTruthy();
    expect(result.length).toBe(9);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('volume');
  });
});

describe('filterVolumeData', () => {
  let dummy = false;
  let dataset = sortVolumeData(transmutateVolumeData(sampledata, true),true);
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
    const result = filterVolumeData(dataset);
    expect(result).toBeTruthy();
    expect(result.length).toBe(7);
    expect(result[0]).toHaveProperty('datetime');
    expect(result[0]).toHaveProperty('volume');
  });
});