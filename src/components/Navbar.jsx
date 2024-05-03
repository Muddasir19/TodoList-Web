import React from 'react'
import Login from './Login-page'
import { auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"


const Navbar = () => {
  const [user,loading,error] = useAuthState(auth);
  
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      TodoList Web
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
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <a className=" nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        
        
        
      </ul>


      {/* {user ? (<><div  className=" mb-1 d-flex justify-content-center dropdown bg-light border-bottom">
      <img
            src={user?.photoURL || ""}
            alt="User Profile Pic"
            width={66}
            className="rounded-circle me-2"
          />
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          
          <strong>{user?.displayName}</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button onClick={signUserOut} className="dropdown-item  " href="#">
              Sign out
            </button>
          </li>
        </ul>
      </div>  </> )  :""} */}


      <Login/>
    </div>
  </div>
</nav>
  
    </div>
  )
}

export default Navbar
