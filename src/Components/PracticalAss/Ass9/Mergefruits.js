

function Mergefruits(){
    let fruit1=["apple","banana"];
    let fruit2=["cherry","orange"];
    let allfruits=fruit1.concat(fruit2);
    return(
        <>

        <h1>Merge Arrays:</h1>
            {
                allfruits.map((fruits,index)=>
                (
                <li key={index}>{fruits}</li>
           
           ) 
        )}

        
        </>
    )
}

export default Mergefruits