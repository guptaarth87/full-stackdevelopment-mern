import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../Assets/logo.png'

export default function Navbar() {
  return (
    <>
     <nav class="navbar position_nav navbar-expand-lg navbar-light nav_style" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            
            <img src={Logo} class="Logo"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active white nav-font" aria-current="page" to="home">Home</Link>
              </li>
             
              <li class="nav-item">
                <Link class="nav-link active white nav-font" aria-current="page" to="aboutus">About us</Link>
              </li>
             
              <li class="nav-item">
                <Link class="nav-link active white nav-font" aria-current="page" to="contactus">Contact us</Link>
              </li>
              
  
             
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  )
}
