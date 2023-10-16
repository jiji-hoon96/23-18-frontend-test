import triangles from './triangles';

function renderTriangles() {
  const SIDE_ERROR_MESSAGE = '삼각형의 변은 0 또는 음수가 될 수 없습니다.';
  const SIDE_SUM_ERROR_MESSAGE =
    '삼각형의 두 변 길이의 합은 나머지 한 변의 길이보다 항상 큰 값이어야 합니다.';
  const NAN_ERROR_MESSAGE = 'NaN Error';

  const getTrianglesArea = ([a, b, c]: [number, number, number]) => triangles([a, b, c]);

  return {
    SIDE_ERROR_MESSAGE,
    SIDE_SUM_ERROR_MESSAGE,
    NAN_ERROR_MESSAGE,

    getTrianglesArea,
  };
}

describe('삼각형의 세 변을 입력받아 넓이를 반환하는 함수', () => {
  /*
   * 삼각형의 성립 조건
   * 1. 어떤 두 변의 길이의 합은 나머지 한 변의 길이보다 항상 커야 함
   *   a + b > c
   *   a + c > b
   *   b + c > a
   * 2. 각 변의 길이는 0보다 커야 함
   * */

  it('삼각형의 세 변의 길이가 1,1,1일 때 삼각형의 넓이는 0.43이다.', () => {
    const { getTrianglesArea } = renderTriangles();

    expect(getTrianglesArea([1, 1, 1])).toBe(0.43);
  });

  it('삼각형의 넓이는 소수점 셋째 자리에서 반올림하여 반환된다.', () => {
    const { getTrianglesArea } = renderTriangles();

    expect(getTrianglesArea([0.584, 0.656, 0.375])).toBe(0.11);
  });

  it('삼각형의 두 변의 길이의 합이 나머지 한 변의 길이와 같거나 작은 경우, 삼각형은 성립될 수 없다.', () => {
    const { getTrianglesArea, SIDE_SUM_ERROR_MESSAGE } = renderTriangles();

    expect(() => getTrianglesArea([1, 1, 2])).toThrow(SIDE_SUM_ERROR_MESSAGE);
    expect(() => getTrianglesArea([4, 1, 2])).toThrow(SIDE_SUM_ERROR_MESSAGE);
  });

  it('삼각형의 어떤 변의 길이가 0 또는 음수인 경우, 삼각형은 성립될 수 없다.', () => {
    const { getTrianglesArea, SIDE_ERROR_MESSAGE } = renderTriangles();

    expect(() => getTrianglesArea([1, 0, 1])).toThrow(SIDE_ERROR_MESSAGE);
    expect(() => getTrianglesArea([-1, 1, 1])).toThrow(SIDE_ERROR_MESSAGE);
  });

  it('삼각형의 어떤 변의 길이로 NaN이 주어질 경우, 삼각형은 성립될 수 없다.', () => {
    const { getTrianglesArea, NAN_ERROR_MESSAGE } = renderTriangles();

    expect(() => getTrianglesArea([1, 1, NaN])).toThrow(NAN_ERROR_MESSAGE);
  });
});
