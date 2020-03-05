import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand name" href="#">Jason F. Martinez</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ml-auto mr-2 mt-2 mt-lg-0 links">
          <li class="nav-item active">
            <a class="nav-link links" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
