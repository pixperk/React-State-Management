import React, { useMemo, useState } from 'react'

const checkAvailability = () =>(
  Math.random()<0.5
)

const generateId = ()=>{
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let result=""
  for (let index = 0; index < 35; index++) {
    const randomNumber = ~~(Math.random()*52)
    result+=str[randomNumber]
  }
  return result
}

function App() {
  const [show, setShow] = useState(false)
  const [val, setVal] = useState("")
  const [username, setUsername] =useState("")
  const randomId =useMemo(generateId,[val]) //just pass the reference of the function
  const userNameAvailable = useMemo(checkAvailability,[username])

  return (
    <div>
    
      <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}
      placeholder='Enter text...'/>
      <label>Username</label>
      <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <p style={{
        fontSize:"0.7rem",
        color:userNameAvailable?"green":"red"
      }}>{
        userNameAvailable?"Username Available":"Username Already Taken" 
      }</p>
      <button onClick={()=>setShow((p)=>!p)}>
        {show?"Hide":"Reveal"}
      </button>
      <h2>Unique Id: {
        show?randomId:"************"
}</h2>
      
    </div>
  )
}

export default App
