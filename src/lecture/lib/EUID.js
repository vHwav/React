// createElement 함수
// DOM 노드 : HTMLElement 반환
export function createElement(type, props = {}, ...children) {
  // type- DOM 요소 노드 생성
  //for-in문
  const element = document.createElement(type);
  //   for (const key in props) {
  //     if (Object.hasOwnProperty.call(props, key)) {
  //       const value = props[key];
  //       element.setAttribute(key, value);
  //     }
  //   }

  //for-of => 문

  //   for (const [key, value] of Object.entries(props)) {
  //     element.setAttribute(key, value);
  //   }

  // props - 생성한 DOM 요소 노드에 속성 설정
  //props 객체 {key1,key2,key3...}
  //props 객체를 배열로 변경해서 순환한 다음
  const keyValues = Object.entries(props);
  //각 속성(key)과 속성 값(value)을 element에 설정(x 반복)
  //   for (const [key, value] /*[key,value]*/ of keyValues) {
  //     element.setAttribute(key, value);
  //   }

  //식(expression)
  keyValues.forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  //...children을 순환해서, 개별적으로 element의 자식으로 설정
  element.append(...children);
  return element;
}
export function createRoot(domNode /*container*/) {
  //DOM에 렌더링 하는 함수
  const render = (element) => {
    domNode.append(element);
  };

  //DOM에 렌더링된 루트 요소를 제거
  const unmount = () => {
    domNode.firstElementChild.remove();
  };

  //객체반환
  return {
    render,
    unmount,
  };
}
// ...children - 생성한 DOM 요소 노드의 자식으로 구성
// 생성한 DOM 요소 노드 반환

// createRoot 함수
// 객체 : {render,unmount}

// EUID 객체의 멤버로 내보내기
const EUID = Object.freeze({
  //freeze는 설정해놓은 값을 저장하며 Object.isFrozen으로 얼렸는지 아닌지 알 수 있음
  createElement,
  createRoot,
});

//모듈 기본 내보내기
export default EUID;

// 객체를 배열로 바꾸기 : Object.entries(object)
