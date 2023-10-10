/**
 *
 * @param params 세변의 길이를 tuple로 넘겨주기
 * @returns 삼각형의 넓이
 */
export const 삼각형_넓이_구하기 = ([a, b, c]: [number, number, number]) => {
  if (a <= 0 || b <= 0 || c <= 0) throw '삼각형의 변이 음수가 될 수 없습니다.';

  const s = (a + b + c) / 2;

  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  if (Number.isNaN(Number(area))) throw 'NaN error';

  return Number(area);
};
