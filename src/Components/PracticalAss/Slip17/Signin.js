import React, { useState } from 'react'

export default function Signin() {
    const[signIn,setsingin]=useState(false);

    const handlessigninout=()=>{
        setsingin(signIn=>!signIn)

    }

    
  return (
    <div>
        <h1>{signIn ? " Hellow, Welcome to the Home Page": "Please SignIn First"}</h1>
        <button onClick={handlessigninout}>{signIn?'signout':'signIn'}</button>
        
        
    </div>
  )
}
