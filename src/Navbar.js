import React from 'react';
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg  bg-${props.mode} `} aria-label="Thirteenth navbar example">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <a className={`navbar-brand text-${props.txtmode} col-lg-3 me-0`} href="/" >{props.title}</a>
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item">
                <a className={`nav-link text-${props.txtmode}`} href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" activeClassName="active" href="/">About</a> */}
              </li>
              <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle" href="/Dropdown" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a> */}
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="/Action">Action</a></li>
                  <li><a className="dropdown-item" href="/AnotherAction">Another action</a></li>
                  <li><a className="dropdown-item" href="/SomethingElse">Something else here</a></li> */}
                </ul>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              <button className={`btn btn-${props.txtmode}`} onClick={props.togglemode}>{`to-${props.txtmode} mode`}</button>
            </div>
          </div>
        </div>
      </nav>
  );
}


// Navbar.propTypes = {
//     title: PropTypes.string
//   };

// Navbar.defaultProps ={     // if value of props not passed than values will we taken from here
//     title: "text convrt"
// }