# 1주차

## 무엇을 테스트해야 하는가?

- 내부 구현보다는 입출력 값(행동)을 검증
    - BDD(Behavior Driven Development)
        - 요구사항(기대하는 동작)을 테스트
    - [블랙박스 테스팅](https://ko.wikipedia.org/wiki/%EB%B8%94%EB%9E%99%EB%B0%95%EC%8A%A4_%EA%B2%80%EC%82%AC)
        - [경계값 분석 테스트](https://itwiki.kr/w/%EA%B2%BD%EA%B3%84%EA%B0%92_%EB%B6%84%EC%84%9D_%ED%85%8C%EC%8A%A4%ED%8A%B8)
            - 1 ~ 100까지 입력을 받는다면, 경계값을 검사 (0, 1, 100, 101)
        - 오류 예측
            - 경험, 지식을 통해 에러케이스를 예측
- 실습 1 : 삼각형의 세 변을 입력받아 넓이를 반환하는 함수
    - 삼각형의 넓이는 소수점 셋째 자리에서 반올림하여 반환한다.
    - https://ko.calcprofi.com/samgaghyeong-gyesangi.html
- ![](https://hackmd.io/_uploads/SJIfKcJ-p.png)

## 어떻게 테스트 코드를 구성하는가?

- [Given-When-Then 패턴](https://martinfowler.com/bliki/GivenWhenThen.html)
    - `given` 파트는 테스트에서 구체화하고자 하는 행동을 시작하기 전에 테스트 상태를 설명하는 부분이다.
    - `when` 파트는 구체화하고자 하는 그 행동이 된다.
    - `then` 파트는 어떤 특정한 행동 때문에 발생할거라고 예상되는 변화에 대해 설명하는 부분이다.
- 실습 2 : pop 기능이 있는 Stack 컴포넌트 구현
    - `<Stack elements={['a', 'b', 'c']} />` 
    - a, b, c 리스트 렌더링
    - pop 클릭 => b, c 렌더링
