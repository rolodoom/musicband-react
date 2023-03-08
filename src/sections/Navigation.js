import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src="assets/img/navbar-logo.svg" alt="..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#videos">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#releases">
                Releases
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#bio">
                Bio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#musicians">
                Musicians
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
