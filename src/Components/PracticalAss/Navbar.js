import React from 'react';
import { Link } from "react-router-dom";
import './Navbars.css';

function Navbar() {
  return (
    <div>
      <strong>
        <h1>Practical Assignments(React)</h1>
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
                  ASS2
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/home">Home</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">About</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/todolist">ASS3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parent">ASS4</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">ASS5</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/parentcompo">ASS6</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fruitsmap">ASS8</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mergefruit">ASS9</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">ASS11</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
