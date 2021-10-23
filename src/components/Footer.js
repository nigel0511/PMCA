import React from "react";

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright &copy; Philharmonic Musicadamy 2021
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://www.google.com.sg/maps/place/Philharmonic+Musicademy%EF%BD%9Cmusic+school+@+Jurong+East/@1.3342171,103.7367165,17z/data=!3m1!4b1!4m5!3m4!1s0x31da1005a39a1d09:0x99bb8c03f244ee9c!8m2!3d1.333791!4d103.7387766?hl=zh-TW&authuser=0"
            >
              <i className="fab fa-google"></i>
            </a>
            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/pmcasg">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" >
              Privacy Policy
            </a>
            <a className="link-dark text-decoration-none" >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
