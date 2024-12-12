import React, { useState } from 'react';
import './Todo.css'

// function Todolist() {
  
//   const [inputvalue, setinputvalue] = useState('');
//   const [tasks, setTasks] = useState([]);

//   // Function to handle adding a new task
//   const addTask = () => {
   
//     if (inputvalue===''){
//       alert("please enter the task")
//     }
//     else
//       setTasks([...tasks, inputvalue]);//jo previous data ahe to ahe tasa theva using spread operator ani new input data tith addkara
//       setinputvalue(''); // Clear input field
      
//     };

  
//   // Function to handle deleting a task
//   const deleteTask = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="Todolis">
//       <h1>ToDo List</h1>

//       {/* Input form for new task */}
//       <input 
//         type="text" 
//         value={inputvalue} 
//         onChange={(e) => setinputvalue(e.target.value)} 
//         placeholder="Add a new task" 
//       />
//       <button onClick={addTask}>Add Task</button>

//       {/* Task List */}
//       <p>Total tasks:{tasks.length}</p>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index} >
           
//           {task}
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todolist;

function Todolist(){
  const[inputval,setinputval]=useState('');
  const[tasks,settasks]=useState([]);

  const addtasks=()=>{
    if(inputval==='')
    {
      alert('plese enter a task')
    }
    else{
      settasks([...tasks,inputval])
      setinputval('')
    }
  }

 const deletetask=(index)=>{
  const update=tasks.filter((_,i)=>i!==index)
  settasks(update)
 }

  return(
    <div className='Todolist'>

    <h1>ToDo List App</h1>

    <input type="text" 
    value={inputval}
    onChange={(e)=>setinputval(e.target.value)}
    placeholder='Add a new task'/>

    <button onClick={addtasks}>Add a task</button>
    
    <p>totoal task:{tasks.length}</p>
    <ul>
      {
        tasks.map((tasks,index)=>(
          <li>
            {tasks}
            <button onClick={()=>(deletetask(index))}>delete</button>
          </li>
        ))
      }
    </ul>
    
    </div>
  )
}

export default Todolist