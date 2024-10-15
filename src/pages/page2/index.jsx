import './style.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function ProductsPage() {
  let [data, setData]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((res)=>setData(res));
  }, [])
  console.log(data);
  return (
    <div>
      <div className="box">
        {data.map((info)=>(
          <div className="card">
            <h2>{info.title}</h2>
            <p> {info.body} </p>
            <Link to={`/products/${info.id}`} > View more</Link>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default ProductsPage
