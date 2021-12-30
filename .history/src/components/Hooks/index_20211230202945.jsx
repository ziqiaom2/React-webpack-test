import React from 'react'

export default function Hooks() {
  // react底层做了处理，会保存初始状态
  // useState
  const [count,setCount] = React.useState(0)
  const [timer,setTimer] = React.useState(null)
  function add (){
    console.log('add is triggered')
    setCount((count)=>(count+1))
  }

  function pause (){
    setTimer(null)
  }
  function autoAdd (){
    setTimer ( setInterval(() => {
      add()
    }, 500))
  }

  // useEffect
  React.useEffect(() => {
    console.log('useEffect is triggered')
    autoAdd()
    return () => {
      
    }
  }, [timer])

  return (
    <div>
      <div>
        <h2>计数值为：{count}</h2>
        <button onClick={add}>计数值加一</button>
        <button onClick={pause}>暂停</button>
      </div>
    </div>
  )
}
