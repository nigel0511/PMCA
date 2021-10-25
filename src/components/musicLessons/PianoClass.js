import React from "react";
import { Link } from "react-router-dom";

export default function PianoClass() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/musicLessons/pianoLesson.jpg"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 teacher-bio">
              <h1 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                PIANO CLASS
              </h1>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                CLASSICAL | POP
              </h3>

              <p>
                Piano not only had a very important place in western classical
                music, but it's important role in other musical genre like jazz,
                blues, rock and folk music. Almost all great composers, for
                example{" "}
                <b style={{ color: "#E76F51" }}>
                  Bach, Mozart, Beethoven, Chopin
                </b>{" "}
                and many more, are piano virtuoso themselves, as piano skills
                are crucial in understanding harmony and musical forms.
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
                cirriculum, it includes topics like{" "}
                <b style={{ color: "#E76F51" }}>
                  practical performance, aural and music theory
                </b>
                , which are essential in musical training. Many MOE schools in
                Singapore also look at the results of ABRSM exam as a reference
                upon admission (
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
                Piano lesson are suitable for children from{" "}
                <b style={{ color: "#E76F51" }}>age 5</b>, famous pianist like
                Yuja Wang and Lang Lang both started learning piano around the
                age of 5!
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
                  STRINGS TEACHERS
                </h3>
                <div className="col">
                  <Link
                    to="/cheng"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/cheng.jpeg"
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
                        Piano
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
