import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'


function App() {
  const [show, setShow] = useState(false)
  const fetchData = useCallback((n=1)=>{
    return Math.random()*25*n
  },[])
  return (
    <div>
    <Child fetchData={fetchData}/>
      <button onClick={()=>setShow((p)=>!p)}>
        {show?"Hide":"Reveal"}
      </button>
      <h2>Unique Id: {
        show?"randomId":"************"
}</h2>
      
    </div>
  )
}

export default App
