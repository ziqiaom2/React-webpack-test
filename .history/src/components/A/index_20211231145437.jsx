import React from 'react'



export default function A(props) {
  return (
    <div className='compA'>
      <h3>A组件</h3>
      {props.render()}
    </div>
  )
}





