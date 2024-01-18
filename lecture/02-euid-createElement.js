//나도 리액트처럼!!
function createElement(type, props, ...children) {
  //... rest parameter 기 때문에 배열로 들어가게 됨
  return {
    $$typeof: Symbol("euid.element"),
    type,
    props: { ...props, children },
  };
}
const myElement = createElement(
  "div",
  { id: "app", "data-type": "HTMLDivElement" },
  createElement("span", {}, "Hello React")
);

console.log(myElement);
//리액트 요소 === 객체 -> {$$typeof: 'Symbol(euid.element)',type,prop:{children}}
