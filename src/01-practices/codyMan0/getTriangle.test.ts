import { getTriangle } from './getTriangle';

describe('getTriangle', () => {
  it('return 6 with 3,4,5', () => {
    expect(getTriangle(3, 4, 5)).toBe(6);
  });

  it('각 변이 0,1,1', () => {
    expect(getTriangle(0, 1, 1)).toBe(0);
  });
});
