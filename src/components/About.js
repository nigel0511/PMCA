import React from "react";
import { NavHashLink } from "react-router-hash-link";

export default function About() {
  return (
    <section className="page-section" id="about" name="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            About Our Music School
          </h2>
          <h3 className="section-subheading text-muted">
            Jurong East best music school!
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-music fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">We make music lesson fun!</h4>
            <p className="text-muted">
              All of our teachers are very passionate musicians, we love
              teaching and share the love of music to our students.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-drum fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">All of our teachers are highly qualified</h4>
            <p className="text-muted">
              Our teachers had practical experience performing with professional
              orchestras and music groups after gaining bachelor/master degree
              from music schools. You might have already met them if you are
              regular concert-goer!
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-guitar fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3">Track Record of Success</h4>
            <p className="text-muted">
              Our student hold seats in National Youth Orchestra, winning
              international competition, excellent result in ABRSM exams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
