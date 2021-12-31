import React from 'react'

export default function C(props) {
  return (
    <div className='compB'>
      <h3>C组件</h3>
      <h4>Of course {props.name}</h4>
    </div>
  )
}