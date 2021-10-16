import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <Link to="/">
            <img
              src="assets/img/logos/pmca_logo.png"
              alt="Philharmonic Musicademy"
            />
          </Link>
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#musicLessons"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Music Classes
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="nav-link" href="#">
                  Strings <div style={{fontSize:'0.5rem'}}>Violin | Viola | Cello | Bass</div>
                </a>
                <a class="nav-link" href="#">
                  Piano
                </a>
                <a class="nav-link" href="#">
                  Guitar
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#teachers"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Our Teachers
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/alex" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Alex Liu<div style={{fontSize:'0.4rem'}}>Violin | Viola</div>
                  </a>
                </Link>
                <Link to="/dandan" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Wang Dandan <div style={{fontSize:'0.4rem'}}>Violin | Viola</div>
                  </a>
                </Link>
                <Link to="/kong" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Kong XianLong <div style={{fontSize:'0.4rem'}}>Violin</div>
                  </a>
                </Link>
                <Link to="/cheng" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Cheng Tzu Ting <div style={{fontSize:'0.4rem'}}>Piano | Music Theory | Aural | 阮</div>
                  </a>
                </Link>
                <Link to="/marco" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Marco Zhang Yao Tian <div style={{fontSize:'0.4rem'}}>Guitar | Ukulele</div>
                  </a>
                </Link>
                <Link to="/julian" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Julian Li <div style={{fontSize:'0.4rem'}}>Double Bass</div>
                  </a>
                </Link>
                <Link to="/felicia" style={{textDecoration:'none'}}>
                  <a class="nav-link" href="#">
                    Felicia Ng <div style={{fontSize:'0.4rem'}}>Piano | Music Theory</div>
                  </a>
                </Link>
              </div>
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
