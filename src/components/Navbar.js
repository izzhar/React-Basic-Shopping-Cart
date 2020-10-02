import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Navbar.css'



export default function Navbar() {
  return (
    <>
      


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" >< Link to="admin"> IZZ.in </Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <a class="nav-link active" >< Link to="admin"> Home </Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link"> < Link to="Electronics"> Electronics</Link></a>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link" > < Link to="Fashion"> Fashion</Link></a>
      </li>
      <li class="nav-item active">
      <a class="nav-link"> < Link to="Games"> Games</Link></a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" > < Link to="SFO"> Books</Link></a>
      </li>
    </ul>
    <form class="form-inline mx-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>

      <a class="btn btn-primary active  bg-light mx-auto">< Link to="/"> LOGOUT</Link></a>
    </form>
  </div>
</nav>

    </>
  )
}
