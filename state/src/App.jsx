import React, { useState } from 'react'

function NameList(){
  const [name, setName] = useState(["Taku","Kazu","Kota"])
  const [nameData, setNameData] = useState(()=>"Jack")//can take a function as well

  const AddName = () =>{
    setName([...name, nameData])
    setNameData("")
  }
  return(
    <>
    <ul>
      {name.map((name)=>(
        <li key={name}>
          {name}
        </li>
      ))}
    </ul>
    <input
    placeholder='Write a name'
    type='text' value={nameData}
    onChange={(e)=>setNameData(e.target.value)}
    />
    <button
    onClick={AddName}>
      Add Name to the List
    </button>
    </>
  )
}

function Counter() {
  const[count, setCount]=useState(10);

  function addOne(){
    setCount((prevCount)=> prevCount+1)
  }
  return (
    <div className='App'>
      <button
      onClick={addOne}>Count={count}</button>
    </div>
  )
}

function App(){
  return(
    <>
    <Counter/>
     <NameList/>
    </>
  )
}

export default App
