import { getTriangleArea } from './getTriangleArea';

describe('getTriangleArea', () => {
  it('각 변이 3, 4, 5 일때 삼각형의 넓이는 6이 되어야 한다', () => {
    expect(getTriangleArea(3, 4, 5)).toBe(6);
  });
});
