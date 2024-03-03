import React from 'react'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const idRef = useRef(1)

  const [names, setNames] = useState([
    {id : idRef.current++,
    name: 'John'},
    {id : idRef.current++,
    name: 'Jane'},
  ])

  const onAddName = () => {
    setNames([...names, {id:idRef.current++,
      name: inputRef.current.value}])//uncontrolled input
    inputRef.current.value=""
  }

  return (
    <div>
      <div>
       {names.map((name)=>(
       <div key={name.id}>{name.id}. {name.name}</div>
       ))}
      </div>
      <input type='text'
      placeholder='John Doe'
      ref={inputRef}/>
      <button onClick={onAddName}>Add Name</button>
    </div>
  )
}

export default App
