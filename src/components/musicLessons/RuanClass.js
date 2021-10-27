import React from "react";
import { Link } from "react-router-dom";

export default function RuanClass() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/team/profile/cheng.jpeg"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 teacher-bio">
              <h1 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                RUAN CLASS 阮
              </h1>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                CHINESE TRADITIONAL INSTRUMENT
              </h3>

              <p>
                Ruan is a Chinese plucked string instrument, it's poetic,
                gentle and tranquil sound quality has made it a standard
                instrument in Chinese Orchestra.
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                SYLLABUS
              </h3>
              <p>
                <a href="https://www.nafa.edu.sg/chinese-instruments-graded-examinations">
                  <b style={{ color: "black" }}>
                    NANYANG ACADEMY OF FINE ARTS (NAFA) - CENTRAL CONSERVATORY
                    OF MUSIC, BEIJING (CCOM)
                  </b>
                </a>{" "}
                is the most recognized association for Chinese music curriculum,
                it includes{" "}
                <b style={{ color: "#E76F51" }}>
                  technical training and musical style training
                </b>
                , which are essential in Chinese musical training. Many MOE
                schools in Singapore also look at the results of exams as a
                reference upon admission (
                <a
                  href="https://www.moe.gov.sg/secondary/dsa"
                  style={{ color: "black" }}
                >
                  Direct School Admission - Sec
                </a>
                ).
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>LESSON</h3>
              <p>
                Ruan lessons are suitable for children from{" "}
                <b style={{ color: "#E76F51" }}>age 5</b>, younger children can
                start with a smaller Ruan, as their hands are usually not big
                enough to play standard size instruments.
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
                  RUAN TEACHER
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
