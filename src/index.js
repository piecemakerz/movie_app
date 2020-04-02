import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// react에서 모든 것은 component와 함께 동작하며, 아래의 <App />는 component이다.
// component는 기본적으로 HTML을 반환하는 함수이다.
// react에서 component를 사용할 때에는 <App />과 같이 HTML의 형태로 작성해야 하며,
// 이러한 javascript와 HTML의 조합을 JSX라고 부른다.

// react application은 하나의 component만을 render하는 것을 허용한다.
// 여기서 component는 App이다.
// 대신, component 내부에 더 많은 component들을 import할 수 있다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
