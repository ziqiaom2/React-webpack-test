import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function SetState() {
  const [a, setA] = useState('a');
  const [b, setB] = useState('b');
  const [c, setC] = useState('c');
  useEffect(async () => {
    console.log('a:', a);
    setA((a) => {
      console.log('setA()');
      return 'aaa';
    });
    console.log('a:', a);
    await updateB();
    console.log('b-await:', b);
    setTimeout(() => {
      console.log('c:', c);
      setC((c) => {
        console.log('setC()');
        return 'ccc';
      });
      console.log('c:', c);
    }, 1000);
  }, []);
  const updateB = async () => {
    console.log('b:', b);
    setB((b) => {
      console.log('setB()');
      return 'bbb';
    });
    console.log('b:', b);
  };
  return (
    <div>
      <div>a: {a}</div>
      <div>b: {b}</div>
      <div>c: {c}</div>
    </div>
  )
}
