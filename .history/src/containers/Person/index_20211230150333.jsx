import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder='输入名字'/>
        <input type="text" placeholder='输入年龄'/>
        <button>添加</button> 
      </div>
    )
  }
}
