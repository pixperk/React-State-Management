import { useEffect, useState } from "react";

function getSavedValue(key, initValue){
    const savedValue=JSON.parse(localStorage.getItem(key))

    if(savedValue) return savedValue    
    return initValue
}

export default function useLocalStorage(key,initValue){
    const val = getSavedValue(key, initValue)
    const [value, setValue] =useState(val)

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value, setValue]
}