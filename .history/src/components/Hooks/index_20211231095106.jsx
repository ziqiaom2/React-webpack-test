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
    clearInterval(timer)
  }
  function autoAdd() {
    timer = setInterval(() => {
      add();
    }, 500);
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
      </div>
    </div>
  );
}
