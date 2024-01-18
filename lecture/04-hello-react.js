import { createElement as h /*hyper script*/ } from "https://esm.sh/react";
//   import ReactDOM from "https://esm.sh/react-dom";
import { createRoot } from "https://esm.sh/react-dom";

//리액트 앨리먼트 생성하기
const h1Element = h("h1", {}, "안녕", h("br"), "리액트");
//'<br/>' HTML 코드일 뿐, React 요소가 아님
const pElement = h(
  "p",
  {},
  "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다."
);
const StrongElement = h("strong", {}, "fundamental");
const appElement = h("div", { id: "app" }, StrongElement, h1Element, pElement);

//리액트 돔 객체의 렌더 메서드로 리액트 엘리먼트 DOM에 렌더링하기
createRoot(document.getElementById("root")).render(appElement);

//   const h1Element = createElement("h1", {}, "리액트");
//   const pElement = createElement(
//     "p",
//     {},
//     "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다."
//   );
//   console.log(h1Element);
//   console.log(pElement);
//   const reactDOMroot = createRoot(document.getElementById("app"));
//   console.log(reactDOMroot);
//   reactDOMroot.render(h1Element);
