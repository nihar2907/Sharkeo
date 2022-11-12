import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/explore">Explore</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/about">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Contact us</a>
                      </li>
                  </ul>
                  <a className="navbar-brand fs-4" href="#"><b>Sharkeo</b> </a>

                  <NavLink to='/login' className='btn btn-outline-primary ms-auto px-4 rounded-pill'>
                  <i className='fa fa-sign-in me-2'></i> Login </NavLink>

                  <NavLink to='/register' className='btn btn-outline-primary ms-2 px-4 rounded-pill'>
                      <i className='fa fa-user-plus me-2'></i> Register</NavLink>
              </div>
          </div>
      </nav>
  )
}

export default Navbar