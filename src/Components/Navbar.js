import React from 'react'
import { Link, useLocation,useNavigate} from 'react-router-dom'

const Navbar = () => {
  let location = useLocation();
  let history = useNavigate();



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">InvestorHub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Home"? "active": ""}`} aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/Smedia"? "active": ""}`} to="/Smedia">Social Media</Link>
              </li>
            </ul>
         <form className="d-flex">
          <Link className="btn btn-light mx-2" to="/" role="button">Login</Link>
          <Link className="btn btn-light mx-2" to="/" role="button">Signup</Link>
          </form>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar