import React from "react";
function Fruitsmap()
{
    const fruits=["apple","banana","cherry","bat"];

    const filterFruits=fruits.filter(fruit=>fruit!=="bat");
    return(
        <>
        <ul>
        {
        filterFruits.map((fruit,index)=>
            (
                <li key={index}>{fruit}</li>
                
                
            ))
        }

        </ul>
            

            

        
       
        </>
    )
}

export default Fruitsmap;