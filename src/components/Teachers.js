import React from "react";
import { Link } from "react-router-dom";

export default function Teachers() {
  return (
    <section className="page-section bg-light" id="teachers">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Our Amazing Teachers
          </h2>
          <h3 className="section-subheading text-muted">
            our teachers are all highly qualified!
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Link to="/alex" style={{color:'black', textDecoration:'none'}}>
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/AlexLiu.jpg"
                  alt="teacher Alex Liu"
                />
                <h4>Alex Liu</h4>
                <p className="text-muted">Violin | Viola</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="dandan" style={{color:'black', textDecoration:'none'}}>
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/wang.jpg"
                  alt="teacher Wang Dandan"
                />
                <h4>Wang Dandan</h4>
                <p className="text-muted">Violin | Viola</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="kong" style={{color:'black', textDecoration:'none'}}>
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/kong.jpeg"
                  alt="teacher Kong Xian Long"
                />
                <h4>Kong Xian Long</h4>
                <p className="text-muted">Violin</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="cheng" style={{color:'black', textDecoration:'none'}}>
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/cheng1.jpeg"
                  alt="teacher Cheng Tzu Ting"
                />
                <h4>Cheng Tzu Ting</h4>
                <p className="text-muted">Piano | Music Theory | Aural | 阮</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4">
            <Link to="marco" style={{color:'black', textDecoration:'none'}}>
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/zhang.jpeg"
                  alt="teacher Marco Zhang Yao Tian"
                />
                <h4>Marco Zhang Yao Tian</h4>
                <p className="text-muted">Guitar | Ukulele | Pop Song</p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="julian" style={{color:'black', textDecoration:'none'}}>
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/julian.jpg"
                  alt="teacher Julian Li"
                />
                <h4>Julian Li</h4>
                <p className="text-muted">Double Bass</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <Link to="felicia" style={{color:'black', textDecoration:'none'}} >
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/felicia.jpeg"
                alt="teacher Felicia Ng"
              />
              <h4>Felicia Ng</h4>
              <p className="text-muted">Piano</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
