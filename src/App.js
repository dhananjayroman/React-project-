
import './App.css';
import Navbar from './Components/PracticalAss/Navbar'; 


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Upper from './Components/PracticalAss/Ass1/Upper';

import Profile from './Components/PracticalAss/Ass2/Profile';
import Home from './Components/PracticalAss/Ass2/Home';
import Todolist from './Components/PracticalAss/Ass3/Todolist';
import Parent from "./Components/PracticalAss/Ass4/Parent";

 import Map from "./Components/PracticalAss/Ass5/Map";

import Parentcomponent from "./Components/PracticalAss/Ass6/Parentcomponent"
// import Childcomponent from "./Components/PracticalAss/Ass6/Childcomponent";

import Fruitsmap from "./Components/PracticalAss/Ass8/Fruitsmap";
import Mergefruits from "./Components/PracticalAss/Ass9/Mergefruits";
import Login from "./Components/PracticalAss/Ass11/Login";
//import Welcome from './Components/PracticalAss/Ass11/Welcome';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Onoff from './Components/PracticalAss/Slip3/Onoff';
import Notfound from './Components/PracticalAss/Ass11/Notfound';
import Incredecre from './Components/PracticalAss/Slip9/Incredecre';
import Couter from './Components/PracticalAss/Slip12/Couter';
import Signin from './Components/PracticalAss/Slip17/Signin';

import Hom from './Components/PracticalAss/Slip8/Hom';
import Abt from './Components/PracticalAss/Slip8/Abt';
import Pro from './Components/PracticalAss/Slip8/Pro';
import Ord from './Components/PracticalAss/Slip8/Ord';
//import Slip1Nav from './Components/PracticalAss/Slip1Nav';

function App() {
  return (
    <div className="App">
       <Router>
       
    <Navbar/>
    
    <Routes>
    
    <Route path="/upper" element={<Upper/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/profile" element={<Profile/>}/>
    
    <Route path="/todolist" element={<Todolist />} />
    <Route path="/parent" element={<Parent />}/>
    <Route path="/map" element={<Map />} />
    <Route path="/parentcompo" element={<Parentcomponent />} />
    <Route path="/fruitsmap" element={<Fruitsmap />} />
    <Route path="/mergefruit" element={<Mergefruits />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Notfound />} />
    
    <Route path="/onoff" element={<Onoff/>} />

    {/* Slip8 */}
    
      <Route path='/hom' element={<Hom/>}/>
      <Route path='/abt' element={<Abt/>}/>
      <Route path='/pro' element={<Pro/>}/>
      <Route path='/ord' element={<Ord/>}/>
     

    <Route path="/incredecre" initialno={0} element={<Incredecre/>} />
    <Route path="/counteruseref" element={<Couter/>} />
    <Route path="/signin" element={<Signin/>} />
    
    

    
  
  </Routes>
</Router>


    </div>
  );
}

export default App;
