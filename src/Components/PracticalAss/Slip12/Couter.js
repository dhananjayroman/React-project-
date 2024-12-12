import React, {useState, useEffect } from 'react'

export default function CouterUseRef() {
    const[count,setcount]=useState(0);


   useEffect(()=>{
    const count=setInterval(()=>{
      setcount(count=>count+1)
    },2000);
    
   })

  return (
    <div>
        
    <h1>Automatic Counter</h1>
    <h2>{count}</h2>
    </div>
  )
}
