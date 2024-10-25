
import './App.css';
import Navbar from './Components/PracticalAss/Navbar'; 


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Upper from './Components/PracticalAss/Ass1/Upper';

import About from './Components/PracticalAss/Ass2/About';
import Home from './Components/PracticalAss/Ass2/Home';
import Todolist from './Components/PracticalAss/Ass3/Todolist';
import Parent from "./Components/PracticalAss/Ass4/Parent";

 import Map from "./Components/PracticalAss/Ass5/Map";

import Parentcomponent from "./Components/PracticalAss/Ass6/Parentcomponent"
// import Childcomponent from "./Components/PracticalAss/Ass6/Childcomponent";

import Fruitsmap from "./Components/PracticalAss/Ass8/Fruitsmap";
import Mergefruits from "./Components/PracticalAss/Ass9/Mergefruits";
import Login from "./Components/PracticalAss/Ass11/Login";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Router>
    
    <Navbar/>
   
    <Routes>
    <Route path="/upper" element={<Upper/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    
    <Route path="/todolist" element={<Todolist />} />
    <Route path="/parent" element={<Parent />}/>
    <Route path="/map" element={<Map />} />
    <Route path="/parentcompo" element={<Parentcomponent />} />
    <Route path="/fruitsmap" element={<Fruitsmap />} />
    <Route path="/mergefruit" element={<Mergefruits />} />
    <Route path="/login" element={<Login />} />
    

    
  
  </Routes>
</Router>


    </div>
  );
}

export default App;
