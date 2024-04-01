import React from 'react'
import { useNavigate, useOutletContext, useParams } from 'react-router'

const Book = () => {
  const params = useParams()
  const obj = useOutletContext()
  const navigate = useNavigate()
  return (
    <>
    <h1>Book {params.id} {obj.Book}</h1>
    <button onClick={()=>navigate('/')}>Go To Home</button>
    </>
  )
}

export default Book