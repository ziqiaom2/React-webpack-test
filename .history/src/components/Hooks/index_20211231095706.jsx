import { useState, useEffect, useRef } from "react";

export default function Hooks() {
  // react底层做了处理，会保存初始状态
  // useState
  const [count, setCount] = useState(0);
  // const [timer,setTimer] = useState(null)
  let timer =useRef()
  function add() {
    console.log("add is triggered");
    setCount((count) => count + 1);
  }

  function pause() {
    clearInterval(timer.current)
  }
  function autoAdd() {
    timer.current = setInterval(() => {
      add();
    }, 500);
  }

  function reset (){
    pause()
    setCount(0)
  }

  // useEffect
  useEffect(() => {
    console.log("useEffect is triggered");
    autoAdd();
    return () => { clearInterval(timer)};
  }, []);

  return (
    <div>
      <div>
        <h2>计数值为：{count}</h2>
        <button onClick={add}>计数值加一</button>
        <button onClick={pause}>暂停</button>
        <button onClick={autoAdd}>继续</button>
        <button onClick={reset}>重置</button>
      </div>
    </div>
  );
}
