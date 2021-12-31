import React, { useState } from 'react'



export default function A(props) {
  const [name,setName] = useState('A is parent')
  const [hasError] = useState('')
  static getDerivedStateFromError(error){
    console.log('ooops, error occurred',error)
    return {hasError:error}
  }
  return (
    <div className='compA'>
      <h3>A组件</h3>
      <h4>{name}</h4>
      <h4></h4>
      {props.render(name)}
    </div>
  )
}





