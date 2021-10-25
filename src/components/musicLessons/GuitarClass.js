import React from "react";
import { Link } from "react-router-dom";

export default function GuitarClass() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/musicLessons/guitarLesson.jpg"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 teacher-bio">
              <h1 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                GUITAR CLASS
              </h1>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                CLASSICAL | POP | ELECTRIC | UKULELE
              </h3>

              <p>
                Guitar holds a very important role in our popular culture, from
                Beatles's 'Hey Jude' to Toto's 'Africa'. It holds an iconic
                status in modern pop music. But even before that, guitar already
                had a long histroy of involvement in the art of music from time
                of Renaissnace. So either you want to enjoy playing your
                favorite pop songs or digging into the long history of the art
                of guitar, you should pick up your guitar today!
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                SYLLABUS
              </h3>
              <p>
                <a href="https://sg.abrsm.org/en/">
                  <b style={{ color: "black" }}>ABRSM</b>
                </a>{" "}
                - Associated Board of the Royal Schools of Music and{" "}
                <a href="https://www.trinityrock.com/">
                  <b style={{ color: "black" }}>
                    Trinity College London | Rock and Pop
                  </b>
                </a>{" "}
                are the world most recognized association for both classical and
                pop music cirriculum, it includes{" "}
                <b style={{ color: "#E76F51" }}>
                  practical performance, aural, improvisation and music theory
                </b>
                , which are essential in musical training.
              </p>
              <h3 style={{ margin: "0 0 1.5rem", color: "#264653" }}>LESSON</h3>
              <p>
                Guitar lesson are suitable for children from{" "}
                <b style={{ color: "#E76F51" }}>age 5</b>, younger child can
                start with Ukulele which is smaller, as their hands are usually
                not big enough to play standard size guitar.
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
                  GUITAR TEACHER
                </h3>
                <div className="col">
                  <Link
                    to="/marco"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="team-member-small">
                      <img
                        className="mx-auto rounded-circle"
                        src="assets/img/team/zhang.jpeg"
                        alt="..."
                      />
                      <p className="teacher-name-small">Marco Zhang Yao Tian</p>

                      <p className="text-muted teacher-instrument-small">
                        Guitar | Ukulele | Pop Song
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
