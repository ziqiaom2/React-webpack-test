import React, { Component } from 'react'
import {nanoid} from 'nanoid'
export default class index extends Component {
addPerson = () => {
  const name = this.nameNode
  const age = this.ageNode
  console.log(name,age)

}


  render() {
    return (
      <div>
        <h1>Person</h1>
        <input ref={c => this.nameNode =c} type="text" placeholder='输入名字'/>
        <input ref={c => this.ageNode =c} type="text" placeholder='输入年龄'/>
        <button onClick={this.addPerson}>添加</button> 
        <ul>
          <li>名字--年龄</li>
          <li>名字--年龄</li>
          <li>名字--年龄</li>
        </ul>
      </div>
    )
  }
}
