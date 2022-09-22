import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function index() {
  const [A, setA] = useState(1);
  useEffect(() => {
    setA(prev => prev + 1);
    console.log('setA')
  }, [])
  useEffect(() => {
    console.log(A);;
  }, [A])

  return (
    <div>index</div>
  )
}
