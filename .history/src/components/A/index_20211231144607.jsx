import React from 'react'

export default function A() {
  return (
    <div>
      <h3>A组件</h3>
      {this.props.render()}
    </div>
  )
}


function B() {
  return (
    <div>
      <h3>B组件</h3>
    </div>
  )
}

function C() {
  return (
    <div>
      <h3>C组件</h3>
    </div>
  )
}
