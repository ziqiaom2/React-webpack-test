import React from 'react'

export default function Hooks() {
  // react底层做了处理，会保存初始状态
  const [count,setCount] = React.useState(0)
  function add (){
    console.log('add is triggered')
    setCount(count+1)
  }

  return (
    <div>
      <div>
        <h2>计数值为：{count}</h2>
        <button onClick={add}>计数值加一</button>
      </div>
    </div>
  )
}
