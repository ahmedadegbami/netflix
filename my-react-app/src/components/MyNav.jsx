import React, { Component } from "react";

class MyNav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark dark-netflix">
          <a class="navbar-brand" href="#">
            <img
              src="./assets/netflix_logo.png"
              alt="netflix-logo"
              width="145"
              height="60"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Movies</a>
              </li>

              <li class="nav-item">
                <a class="nav-link">Recently Added</a>
              </li>

              <li class="nav-item">
                <a class="nav-link">My List</a>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link">KIDS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <i class="bi bi-bell"></i>
                </a>
              </li>
              <div class="dropdown">
                <a
                  class="btn dark-netflix dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="./images/dropdown.png"
                    alt="netflix-logo"
                    width="30"
                    height="30"
                  />
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    action 1
                  </a>
                  <a class="dropdown-item" href="#">
                    Some
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNav;
