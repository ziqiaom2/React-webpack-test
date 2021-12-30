import React from 'react'

export default function Hooks() {
  function add (){
    console.log('add is triggered')
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
