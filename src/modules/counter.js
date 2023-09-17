/*액션 타입 정의하기
액션 타입은 대문자로 정의하고 문자열 내용은 모듈 이름 / 액션 이름 과 같은 형태로 작성한다.
문자열 안에 모듈 이름을 넣어 줌으로써 나중에 프로젝트가 커졌을때 액션의 이름이 충돌되지 않게 해준다.
*/
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 함수 만들기
//export는 여러개를 내보낼 수 있다. -> 불러오는 방식 ex) import {increase, decrease}
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

//리듀서 함수
//현재 상태를 참조하여 새로운 객체를 생성해서 반환
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter; // 단 한개만 내보낼 수 있음 // 불러오는 방식 -> ex) import counter from './counter'
