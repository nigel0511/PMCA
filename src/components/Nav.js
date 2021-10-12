import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img
            src="assets/img/logos/pmca_logo.png"
            alt="Philharmonic Musicademy"
          />
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
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#photoGallery">
                Photo Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#musicLessons">
                Music Lessons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#teachers">
                Our Teachers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/pmcasg">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
