// import React from 'httpS://esm.sh/react' 
import ReactDOM from 'react-dom/client';
import React from 'react';
//type스크립트에서는 import로 https를 불러오는 것이 안됨
// @ts-ignore
// @ts-nocheck
const { createRoot } = ReactDOM;
const createApp = () => {
    return (React.createElement("div", { id: "app" },
        React.createElement("h1", null,
            "\uC548\uB155! ",
            React.createElement("br", null),
            "\uB9AC\uC561\uD2B8"),
        React.createElement("p", null, "\uB9AC\uC561\uD2B8\uB294 \uC624\uD508 \uC18C\uC2A4 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC785\uB2C8\uB2E4")));
};
const rootElement = document.getElementById('root'); //as로 선언해줌
const root = createRoot(rootElement);
root.render(/*리액트 요소=함수*/ createApp());
