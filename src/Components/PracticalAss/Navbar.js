import React from 'react';
import { Link } from "react-router-dom";
import './Navbars.css';

function Navbar() {
  return (
    <>
      <div className='navbar-background'>
        <div className="navbar-container">
          <strong>
            <h1>Practical Assignments (React)</h1>
            <h6>DhananjayRoman</h6>
          </strong>
          <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">RollNo(16797)</Link>
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/upper">ASS1</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link 
                      className="nav-link dropdown-toggle" 
                      to="#"  
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      ASS2/Slip-1
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/home">Home</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/todolist">ASS3/Slip_5</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/parent">ASS4</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/map">ASS5/slip_2</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/parentcompo">ASS6</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/fruitsmap">ASS8</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mergefruit">ASS9/Slip_13</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">ASS11</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/onoff">Slip3</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link 
                      className="nav-link dropdown-toggle" 
                      to="#"  
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      Slip8
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/abt">About</Link>
                        <Link className="dropdown-item" to="/hom">Home</Link>
                        <Link className="dropdown-item" to="/pro">Product</Link>
                        <Link className="dropdown-item" to="/ord">Order</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="incredecre">Slip9</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="counteruseref">Slip12</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="signin">Slip17</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Content below the Navbar
      <div className="content-container">
        
       
      </div> */}
    </>
  );
}

export default Navbar;
