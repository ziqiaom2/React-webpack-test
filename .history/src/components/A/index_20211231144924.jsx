import React from 'react'

export default function A() {
  return (
    <div>
      <h3>A组件</h3>
      {this.props.render()}
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
