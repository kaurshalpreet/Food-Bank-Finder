import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar">
    //   <a className="navbar-brand" href="/">
    //     Food Bank Finder
    //   </a>
    //   <Btn />
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navBar">
      <a class="navbar-brand" href="#">
        Foodbank Finder
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              About <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
