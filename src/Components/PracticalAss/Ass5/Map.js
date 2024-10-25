function Map(){
    const weekdays=["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];

    
        
         return (
    <div>
      {weekdays.map((days) => (
        <li  >{days}</li>
      ))}
    </div>
  );


            
        
        
    
}

export default Map;