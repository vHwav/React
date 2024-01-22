// import React from 'httpS://esm.sh/react' 
import ReactDOM from 'react-dom/client';
import React from 'react';
//type스크립트에서는 import로 https를 불러오는 것이 안됨

// @ts-ignore
// @ts-nocheck
const {createRoot } = ReactDOM 

const createApp = () =>{
    return (
        <div id="app">
            <h1>안녕! <br/>리액트</h1>
            <p>리액트는 오픈 소스 자바스크립트 라이브러리입니다</p>
        </div>
    )
}
const rootElement = document.getElementById('root') as HTMLDivElement //as로 선언해줌
const root = createRoot(rootElement)
root.render(/*리액트 요소=함수*/createApp())