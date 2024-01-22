import React from "react";
import { createRoot } from "react-dom/client";

// [학습 주제]
// 컴포넌트 재사용

// .formControl>label+input
function FormControl() {
  return (
    <div className="formControl">
      <label>
        사용자 이름
        <input type="text" name="username" />
      </label>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      {/* 컴포넌트 추출 */}
      <FormControl />
      <FormControl />
      <FormControl />
      <FormControl />
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
