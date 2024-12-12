import React, { useRef } from 'react'

const Incredecre=()=> {
    const countRef=useRef(0);

    const Clickincredecre=()=>{
        countRef.current += 1;
        console.log(`button clicked ${countRef.current} times`);
        alert(`button clicked ${countRef.current} times`)
        
      }


    
  return (
    
    <div>
        <h2>Counter Using UseRef</h2>
        <button onClick={Clickincredecre}>Click Me</button>
        
        
      

    </div>
  )
}
export default Incredecre