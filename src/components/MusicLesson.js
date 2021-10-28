import React from "react";
import { Link } from "react-router-dom";

export default function MusicLesson() {
  return (
    <section
      className="page-section bg-light musicLesson-section"
      id="musicLessons"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Music Lessons</h2>
          <h3 className="section-subheading text-muted">
            ABRSM | Trinity College London
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* <!-- Portfolio item 1--> */}
            <div className="portfolio-item">
              <a className="portfolio-link">
                <div className="img-musicLesson">
                  <Link to="/string">
                    <img
                      className="img-fluid"
                      src="assets/img/musicLessons/violinLesson.jpg"
                      alt="Violin Lesson"
                    />
                  </Link>
                </div>
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">String</div>
                <div className="portfolio-caption-subheading text-muted">
                  Violin | Viola | Cello | Bass
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* <!-- Portfolio item 2--> */}
            <div className="portfolio-item">
              <a className="portfolio-link">
                <div className="img-musicLesson">
                  <Link to="/piano">
                    <img
                      className="img-fluid"
                      src="assets/img/musicLessons/pianoLesson.jpg"
                      alt="Piano Lesson"
                    />
                  </Link>
                </div>
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Piano</div>
                <div className="portfolio-caption-subheading text-muted">
                  Classical | Pop
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* <!-- Portfolio item 3--> */}
            <div className="portfolio-item">
              <a className="portfolio-link">
                <div className="img-musicLesson">
                  <Link to="/guitar">
                    <img
                      className="img-fluid"
                      src="assets/img/musicLessons/guitarLesson.jpg"
                      alt="Guitar Lesson"
                    />
                  </Link>
                </div>
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  Guitar | Ukulele
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  Classical | Pop | Electric
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0"></div>
        </div>
      </div>
    </section>
  );
}
