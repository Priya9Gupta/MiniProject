import React from 'react'
import { NavLink } from 'react-router-dom';
// import useAppContext from '../AppContext'

const Navbar = () => {


  return (
<nav  className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#0c2137',height:'60px',fontSize:'20px'}}>
  <div className="container-fluid">
    <a style={{color:'white'}} className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <NavLink  style={{color:'white'}} className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  style={{color:'white'}} className="nav-link" to="/Signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink  style={{color:'white'}} className="nav-link active" to="/Login">
            Login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink  style={{color:'white'}} className="nav-link" to="/AddEbook">
           Add Ebook
          </NavLink>
          </li>
         
          <li className="nav-item">
          <NavLink  style={{color:'white'}} className="nav-link" to="/BrowseEbook">
           Browse Ebook
          </NavLink>
          </li>
        <li className="nav-item dropdown">

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          {/* <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </a> */}
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-danger" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
  )}
export default Navbar;