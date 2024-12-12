import React, { useState } from 'react'

// export default function Onoff() {
//     const[isOn,setIsOn]=useState();

//     const handleonoff=()=>{
      
//         setIsOn(on=>!on)
//     }
//   return (
//     <div>
//       <h1><strong>{isOn?' Button is ON':' Button is OFF'}</strong></h1>
//         <button onClick={handleonoff} >
//             {isOn?'ON':'OFF'}
//         </button>
    
//     </div>
//   )
// }

export default function Onoff() {
  const[ison,setIsOn]=useState()

  const handleonoff=()=>{
    setIsOn(on=>!on)
    
  }
  
  const styleonoff={
    backgroundColor:ison?'black':'red',
    justifyContent:'center'

  }
 

  return(
    <>
    <div style={styleonoff}>
      <h1 >{ison?`Button is ON` :'Button is OFF'}</h1>
      <button onClick={handleonoff}>{ison?`ON`:`OFF`}</button>
    </div>
    </>
  )
};
