import React from "react";

export default function StringsClass() {
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
              <h2 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                Strings
              </h2>
              <h4 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                VIOLIN | VIOLA | CELLO | DOUBLE BASS
              </h4>
              <p>
                Strings instruments are the backbone in western classical music,
                it's richness of tone and expressive nature are the reasons why
                all classical music master composers like{" "}
                <b>Bach, Haydn, Beethoven, Bramhs</b> and many more, used
                strings instruments to craft their masterpieces.
              </p>
              <h4 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                SYLLABUS
              </h4>
              <p>
                ABRSM - Associated Board of the Royal Schools of Music is the
                world most recognized association for classical music
                cirriculum, it includes practical performance, aural and music
                theory, which are essential in musical training.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page section">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                more about this teacher
              </h2>
            </div>
            <div className="col-lg-6">
              <div className="iframe-container">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSNYO.sg%2Fposts%2F2736003486611533&show_text=false&width=500"
                  className="responsive-iframe"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iframe-container">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMoreThanMusicConcerts%2Fvideos%2F149905143949345%2F&show_text=false&width=560&t=0"
                  className="responsive-iframe"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="iframe-container">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=322&href=https%3A%2F%2Fwww.facebook.com%2Fsingaporesymphony%2Fvideos%2F1601215780045919%2F&show_text=false&width=560&t=0"
                  className="responsive-iframe"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="iframe-container">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMoreThanMusicConcerts%2Fvideos%2F1134180687104903%2F&show_text=false&width=560&t=0"
                  className="responsive-iframe"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
