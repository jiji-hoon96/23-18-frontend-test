function triangles([a, b, c]: [number, number, number]) {
  if (a <= 0 || b <= 0 || c <= 0) throw '삼각형의 변은 0 또는 음수가 될 수 없습니다.';
  if (a + b <= c || a + c <= b || b + c <= a)
    throw '삼각형의 두 변 길이의 합은 나머지 한 변의 길이보다 항상 큰 값이어야 합니다.';

  const s = (a + b + c) / 2;
  const area = Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2));

  if (Number.isNaN(area)) throw new Error('NaN Error');
  return area;
}

export default triangles;
