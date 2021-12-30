import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <input ref={c => this.nameNode =c} type="text" placeholder='输入名字'/>
        <input ref={c => this.ageNode =c} type="text" placeholder='输入年龄'/>
        <button onClick={this.addPerson}>添加</button> 
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}
