import { getTriangle } from './getTriangle';

test('삼각형의 넓이 3,4,5', () => {
  expect(getTriangle(3, 4, 5)).toBe(6);
});
test('삼각형의 넓이 5,5,5', () => {
  expect(getTriangle(5, 5, 5)).toBe(10.83);
});
test('삼각형의 넓이 4,4,6', () => {
  expect(getTriangle(4, 4, 6)).toBe(7.94);
});
test('삼각형의 넓이 7,7,7', () => {
  expect(getTriangle(7, 7, 7)).toBe(21.22);
});

test('error - 음수', () => {
  expect(() => getTriangle(-1, 0, -1)).toThrow();
});
test('error2 - 삼각부등식 위배', () => {
  expect(() => getTriangle(1, 1, 3)).toThrow();
});
test('error3 - 삼각부등식 위배', () => {
  expect(() => getTriangle(3, 4, 8)).toThrow();
});
