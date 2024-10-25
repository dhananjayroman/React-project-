import React from "react";
import Child from "./Child";

 
const Parent=()=>{

const name="dhananjay";

return(
    <>
    <h1>this is parent componant</h1>
    <strong><Child name={name}/></strong>
    </>
)
}

export default Parent;