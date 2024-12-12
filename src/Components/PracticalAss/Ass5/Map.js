// function Map(){
//     const weekdays=["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];

    
        
//          return (
//     <div>
//       {weekdays.map((days) => (
//         <li  >{days}</li>
//       ))}
//     </div>
//   );
// }

// export default Map;

const Map=()=>{
  	const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];  
    
    const Listyle={
      color:'black',
      backgroundColor:'purple',
      fontSize:'25px',
      textAlign:'center',
      fontStyle:'Bold',
      margin:'20px',
      marginTop:'30px',
      opacity:'100px'

    }
    return(
     
      <>
      <div style={Listyle}>
        {
          weekdays.map((days)=>(
            <li>
              {days}
            </li>
          ))
        }
        </div></>
    )
}
export default Map