import React, { useState, useMemo, useCallback } from 'react'

function SortedList({list, sortFunc}){
  console.log("rerendering sorted list")
  const sortedList = useMemo(()=>{
    console.log("running sort")
    return [...list].sort(sortFunc)},
  [list, sortFunc])
  return(
    <div>
      {sortedList.join(" ")}
    </div>
  )
}

function App() {
  const [numbers] = useState([10,20,,50,30])
  const total = useMemo(()=>numbers.reduce((acc,number)=>acc+number,0),[numbers])

  const [names] = useState(["Taku","Kazu","Gakuen","Nakayashi"])

  const sortedNames = useMemo(()=>[...names].sort(),
  [names])//useMemo used to just run this specific function and not rerender the whole App component used for only refrences data structures and not scalars(useMemo = useCalculatedValue)

  const[count, setCount] = useState(0)
  const[count1, setCount1] = useState(0)

  const countTotal = /* useMemo(()=>count1+count,[count,count1]) (not a good use of useMemo)*/count1+count

  const sortFunc = useCallback((a,b) => a.localeCompare(b)*-1,[])
  /* Without useCallback, every render of the App component would create a new instance of the sorting function sortFunc, even if its dependencies haven't changed. This can lead to unnecessary re-renders of the child components like SortedList. */

  return (
    <>
    <div>
      Total : {total}
    </div>
    <div>
      <SortedList list={names} sortFunc={sortFunc}/>
    </div>
    <div>
      Names : {names.join(" ")}
    </div>
    <div>
      sortedNames : {sortedNames.join(" ")}
    </div>
    <button onClick={()=> setCount(count+1)}>Count1 : {count}</button>
    <button onClick={()=> setCount1(count1+1)}>Count2 : {count1}</button>
    <div>Count1 + Count2 = {countTotal}</div>
    </>
  )
}

export default App
