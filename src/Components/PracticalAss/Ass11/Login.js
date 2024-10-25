import React,{useState} from "react";
function Login(){

    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const[msg,setmsg]=useState('');

    function gettextuser(e)
    {
        setusername(e.target.value);
        
        //console.log(username);

        
    }

    function gettextpass(e)
    {
        setpassword(e.target.value);
        
        //console.log(password);
    }

    function validate(e)
    {
        if(username==="Admin" && password==="Pass123" )
        {
            setmsg("Login Successfully");
        }
        
        else{
           setmsg("Input Incorrect please enter correct Username and Password");
        }
    }
    return(
        <>
        <center>
        <h2>Login</h2>
        <label>Username:</label>
     <input type="text"  onChange={gettextuser}></input><br></br>
     <label>Password:</label>
     <input type="text" onChange={gettextpass}></input><br></br>
    
      <button type="button"  onClick={validate}>submit</button>
      <strong><p>{msg}</p></strong>
      </center>
        
        
        </>
    )
}

export default Login