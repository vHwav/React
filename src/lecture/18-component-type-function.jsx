import React from "react";
import { createRoot } from "react-dom/client";

// 함수 컴포넌트 (important syntax!!!)
// 첫글자가 대문자이기 때문에 컴포넌트로 정의된 것임
function App1() {
  return (
    <div id="id" lang="en">
      {/* JSX주석: JavaScript식 사용(값!) */}
      <h1>{`hello react!`.toUpperCase()}</h1>
    </div>
  );
}

//arrow function
const App2 = () => {
  return (
    <div id="app" lang="en">
      <h1>
        Hello React <span style={{ fontSize: 80 }}>⚛</span>
      </h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App2 />);
//<App/> = React.createElement(App) (App())<는 옳지 않음
