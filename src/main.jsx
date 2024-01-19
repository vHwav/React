import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

const createApp = () => (
  <div id="app">
    <h1>
      안녕! <br />
      리액트.
    </h1>
    <p>리액트....</p>
  </div>
);

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(createApp() /*함수 실행 -> 리액트 요소: ReactElement*/);
