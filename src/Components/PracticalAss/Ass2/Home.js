// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home=()=>{
//     const profile=useNavigate();

//     const Goto=()=>{
//         profile('/Profile')
//     }
//     return(
//         <>

//         <h1>Welcome to home page</h1>
//       <button onClick={Goto}>Go to Profile</button>
//         </>
//     )
// }

// export default Home;
import { useNavigate } from "react-router-dom";
const Home=()=>{
    const profile=useNavigate()//use navigatee is use to programatically navigate between routes in your aplications

    const Goto=()=>{
        profile('/Profile')
    }

    return(
        <>
        <h1>Welcome to home page</h1>
        <button onClick={Goto}>click here and Go to Profile</button>
        </>
    )
}

export default Home