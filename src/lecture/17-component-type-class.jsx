import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  //react.component 역시 class임
  //super를 정의하지 않는 이유. 아래의 구문처럼 constructor를 정의할 때만 super를 넣음
  // constructor(props){
  //   super(props)
  //   //컴포넌트 상태
  //   this.state={}
  // }
  // 순수 웹컴포넌트를 만든다면 class가 필수, 허나 react에서는 함수형으로 만들 수 있음

  render() {
    return (
      <div id="app" lang="en">
        <h1>Hello React</h1>
      </div>
    );
  }
}

const domElement = document.getElementById("root");

if (domElement) {
  const reactDomRoot = createRoot(domElement);
  reactDomRoot.render(<App />);
}
