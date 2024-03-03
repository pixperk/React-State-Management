import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Stopwatch = () => {
  const[time, setTime] = useState(0)

  useEffect(()=>{
  const interval=setInterval(()=>{
    setTime((time)=>(time+1))
  },1000);
  return () => clearInterval(interval)
  },[])
  /* setTime was called with a function that takes the previous state as an argument (i.e., (time)=>(time+1)).
  return () => clearInterval(interval): This is the cleanup function returned by the useEffect hook. It's called when the component is unmounted or when the dependencies change. In this case, it clears the interval previously set up to avoid memory leaks. */

  return(
    <div>
      Time: {time}
    </div>
  )
}

function App() {
  const[names,setNames] = useState([]);

  useEffect(() => {
  fetch("/names.json")
  .then((response)=>response.json())
  .then((data)=>setNames(data))
  },[])

  const[selectedNameDetails, setSelectedNameDetails] = useState(null)

    const onSelectedNameChange = (name) =>{
      fetch(`${name}.json`)
    .then((response)=>response.json())
    .then((data)=>setSelectedNameDetails(data))
    }

  return (
    <div>
      <div><Stopwatch/></div>
    <div>
      {names.map((name)=><button
      onClick={()=>onSelectedNameChange(name)}>
        {name}
      </button>)}
    </div>
    <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  )
}

export default App
