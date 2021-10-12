import React from "react";

export default function MasterHead() {
  return (
    <header className="masthead">
      <div className="container">
      <h1 className="masthead-heading text-uppercase">
          Welcome To Philharmonic Musicademy
        </h1>
        <h1 className="masthead-subheading">
          Best music school in Jurong East
        </h1>
        <a className="btn btn-primary btn-xl text-uppercase" href="#contact">
          Book Your Free Trial Lesson Now!
        </a>
      </div>
    </header>
  );
}
