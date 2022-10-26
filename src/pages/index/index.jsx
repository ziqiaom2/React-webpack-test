import React from 'react'
import { useState, useEffect } from 'react'

export default function index() {
  const [a, setA] = useState(() => 'aaa');
  useEffect(() => {
    // Update the document title using the browser API
    const effect = async () => {
      await init();
    }
    effect().catch((e) => { console.log(e) })
  }, []); // 如果不传入第二个参数[]，useEffect会循环调用，因为其包含了componentDidUpdate
  const init = async () => {
    setA(() => 'bbb');
    console.log('a:', a); // aaa
  }
  useEffect(() => {
    console.log('useEffect-a:', a); // aaa -> bbb
  }, [a])
  return (
    <div>{a}</div>
  )
}
