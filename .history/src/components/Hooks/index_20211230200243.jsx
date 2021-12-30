import React from 'react'

export default function Hooks() {
  const [count] = React.useState(0)
  function add (){
    console.log('add is triggered')
    count++
  }

  return (
    <div>
      <div>
        <h2>计数值为：</h2>
        <button onClick={add}></button>
      </div>
    </div>
  )
}
