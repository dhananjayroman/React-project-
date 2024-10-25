import React from "react";

import Childcomponent from "./Childcomponent";

function Parentcomponent(){
    
    let msg="dhanu";
        return(
        
            <>
    <h1>this is my name and this is parent components</h1>
    <Childcomponent msg={msg}/>
    </>
        )
    }
    
    
    export default Parentcomponent;