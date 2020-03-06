import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand name" href="#">Jason F. Martinez</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbartoggle"><i className="fas fa-bars"></i></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mr-2 mt-2 mt-lg-0 links">
          <li className="nav-item active">
            <a className="nav-link links" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link links" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link links" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
