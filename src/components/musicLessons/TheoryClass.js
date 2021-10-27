import React from "react";
import { Link } from "react-router-dom";

export default function TheoryClass() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/musicLessons/theory.jpeg"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 teacher-bio">
              <h1 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                MUSIC THEORY CLASS
              </h1>
              <p>
                Music Theory is the knowledge of melody, harmony, forms and
                structures and composition. Basic music theory will help
                students understand the theory behind the music they play and
                communicate in musical terms in lessons or playing in an
                ensemble.
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
                are the world's most recognized association for classical music
                curriculum.{" "}
                <b style={{ color: "#E76F51" }}>
                  Passing ABRSM theory grade 5 is required for grade 6 - 8
                  practical exams.
                </b>
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>LESSON</h3>
              <p>
                Music theory lesson are suitable for children from{" "}
                <b style={{ color: "#E76F51" }}>age 6</b>.
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
                  MUSIC THEORY TEACHER
                </h3>
                <div className="col">
                  <Link
                    to="/cheng"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/cheng1.jpeg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Cheng Tzu Ting</p>

                      <p className="text-muted teacher-instrument-small">
                        Piano | Music Theory | Aural | 阮
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link
                    to="/felicia"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/felicia.jpeg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Felicia Ng</p>

                      <p className="text-muted teacher-instrument-small">
                        Piano | Music Theory
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
