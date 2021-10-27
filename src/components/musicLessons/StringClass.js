import React from "react";
import { Link } from "react-router-dom";

export default function StringClass() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/musicLessons/violinLesson.jpg"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 teacher-bio">
              <h1 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                STRING CLASSES
              </h1>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                VIOLIN | VIOLA | CELLO | DOUBLE BASS
              </h3>
              <p>
                String instruments are the backbones in western classical music,
                it's richness of tone and expressive nature are the reasons why
                all classical music master composers like{" "}
                <b style={{ color: "#E76F51" }}>
                  Bach, Haydn, Beethoven, Bramhs
                </b>{" "}
                and many more, used string instruments to craft their
                masterpieces.
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                SYLLABUS
              </h3>
              <p>
                <a href="https://sg.abrsm.org/en/">
                  <b style={{ color: "black" }}>ABRSM</b>
                </a>{" "}
                - Associated Board of the Royal Schools of Music and{" "}
                <a href="https://www.trinitycollege.com/local-trinity/singapore">
                  <b style={{ color: "black" }}>Trinity College London</b>
                </a>{" "}
                are the world most recognized association for classical music
                curriculum, it includes topics like{" "}
                <b style={{ color: "#E76F51" }}>
                  practical performance, aural and music theory
                </b>
                , which are essential in musical training. Many MOE schools in
                Singapore also look at the results of the ABRSM exam as a reference
                upon admission (
                <a href="https://www.moe.gov.sg/secondary/dsa" style={{ color: "black" }}>
                  Direct School Admission - Sec
                </a>
                ).
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>LESSON</h3>
              <p>
                String instruments are suitable for children to start learning
                from <b style={{ color: "#E76F51" }}>age 5</b>, standard size
                instruments are too big for young children, age appropriate
                down-side instruments are recommended.
              </p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Beginner | Grade 1 - 3</th>
                    <th scope="col">Intermediate | Grade 4 - 5</th>
                    <th scope="col">Advance | Grade 6 - 8</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30 mins</td>
                    <td>45 mins</td>
                    <td>60 mins</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-2">
              <div className="row">
                <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                  STRING TEACHERS
                </h3>
                <div className="col">
                  <Link
                    to="/alex"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/AlexLiu.jpg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Alex Liu</p>
                      <p className="text-muted teacher-instrument-small">
                        Violin | Viola
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link
                    to="dandan"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/wang.jpg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Wang Dandan</p>
                      <p className="text-muted teacher-instrument-small">
                        Violin | Viola
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link
                    to="kong"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/kong.jpeg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Kong Xian Long</p>
                      <p className="text-muted teacher-instrument-small">
                        Violin
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link
                    to="julian"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/julian.jpg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Julian Li</p>
                      <p className="text-muted teacher-instrument-small">
                        Double Bass
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
