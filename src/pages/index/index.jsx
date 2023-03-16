import React, {useRef} from 'react'
import { useState, useEffect } from 'react'

export default function index() {
  const [a, setA] = useState(() => 'aaa');
  let _ref = useRef();
  // componentDidMount
  useEffect(() => {
    // Update the document title using the browser API
    const effect = async () => {
      await init();
      // 即使定时器时间设置为0，也会在宏任务队列中等待，先等待微任务队列执行结束
      timeOut();
      asy();
    }
    effect().catch((e) => { console.log(e) })
  }, []); // 如果不传入第二个参数[]，useEffect会循环调用，因为其包含了componentDidUpdate
  const init = async () => {
    setA(() => 'bbb');
    console.log('a:', a); // aaa
  }
  // watch a
  useEffect(() => {
    console.log('useEffect-a:', a); // aaa -> bbb
  }, [a])
  const sum = async (n = 1000000) => {
    let sum = 0;
    for (let i = 0; i< n; i++) {
      sum += i;
    }
    return sum;
  }
  const asy = async () => {
    console.log('async start');
    await new Promise((resolve, reject) => {
      sum(100000000).then((res) => {
        console.log('res:', res);
        console.log('async promise resolve');
        resolve('async promise resolve');
      }).catch((e) => {
        reject(e);
      })
    })
    console.log('async end')
  }

  const timeOut = () => {
    setTimeout(() => {
      console.log('setTimeout');
    }, 0);
  }
  return (
      <>
        <div style={{background : 'gold', height : '140px'}}>{a}</div>
        {/*可以通过 _ref.scrollIntoView() 使得_ref元素移动到可视区域顶部*/}
        <div ref={(e) => {_ref = e}} style={{background : 'red', height : '180px'}}>-----</div>
        <div style={{background : 'grey', height : '140px'}} onClick={() => _ref.scrollIntoView()}>11111</div>
        <div style={{height : '100vh'}}>11111</div>
        <div>toTop</div>
      </>
  )
}
