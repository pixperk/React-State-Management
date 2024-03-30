import React, { memo, useEffect, useState } from 'react'

function Child({fetchData}) {
    console.log("Child component rendering");
    const[num, setNum] = useState("")

    useEffect(()=>{
        setNum(fetchData(5))
    },[fetchData])
  return (
    <div>
      Child Component<br/>
      Fetched Data : {num}
    </div>
  )
}

export default memo(Child)
