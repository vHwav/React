import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  //react.component 역시 class임
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
