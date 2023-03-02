
import React from "react";
import { useState } from "react";
import Malbec from "./Malbec";
import '../stylesheets/Navbar.css'

function NavigationBar () {

  const ShowVarietyGrapes = (variety) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(!showResults)
    if (variety==="Malbec"){
      return (
        <div>
          <input type="submit" value="Search" onClick={onClick} />
          { showResults ? <Malbec /> : null }
        </div>
      )
    }
    else
    {
      return null
    }
  }

  return (
    <>
    
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a className="navbar-brand" href="#home">Wine App</a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <div class="dropdown nav-item">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Varietales
              </button>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#" onClick={ShowVarietyGrapes("Malbec")}>Malbec</a></li>
                <li><a class="dropdown-item" href="#">Petit Verdot</a></li>
                <li><a class="dropdown-item" href="#">Syrah</a></li>
              </ul>
            </div>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href='#SocialMedia'>Social Media</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ShowVarietyGrapes />
    </>
  );
}

export default NavigationBar;