import React, { useState } from 'react'



export default function A(props) {
  const name = useState('A is parent')
  return (
    <div className='compA'>
      <h3>A组件</h3>
      <h4>{name}</h4>
      {props.render(name)}
    </div>
  )
}





