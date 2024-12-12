

function Mergefruits(){
    let fruit1=["apple","banana","guava","Almond"];
    let fruit2=["cherry","orange","banana","Mango"];
    let allfruits=[...fruit1,...fruit2];
    let twofruits=allfruits.slice(-2);
   
    return(
       
        <>

        <h1>Merge Arrays:</h1>
            {
                allfruits.map((fruits,index)=>
                (
                <li key={index}>{fruits}
                </li>
                
           
           ) 
        )
        }
        <h3>
            Last Two element:
        </h3>
        {
            twofruits.map((fruits,index)=>(
              <li key={index}>{fruits}
              </li>  
            ))
        }

        
        </>
    )
}

export default Mergefruits