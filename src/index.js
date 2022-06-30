//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
//引入App
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  // 通过provider直接将所有的store传递给app组件
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
//帮助redux通知组件调用render函数！！！
//如果使用的是react-redux，通过connect函数，就不用再手动监测store的 变化了
//这是react-redux相对于原生redux的优势
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })
