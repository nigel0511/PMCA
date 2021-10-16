import React from "react";

export default function Marco() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/team/profile/marco.jpeg"
                ></img>
              </div>
            </div>
            <div className="col-lg-8 teacher-bio">
              <h2 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                MARCO ZHANG YAO TIAN
              </h2>
              <h4 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                GUITAR | UKULELE
              </h4>
              <p>
                Zhang Lei (also known as Marco Zhang Yao Tian), who formerly
                sojourned in Japan for two years, is a music producer,
                singer-songwriter, and guitar player. He expresses his musical
                taste through various cultural collaborations and enjoys
                travelling and learning other musical cultures.
              </p>
              <p>
                He is the Guitarist and Vocalist of GIMA band, which is the
                first Mongolian Morin Khuur and Guitar fusion band in South East
                Asia. GIMA blends ancient folk cultures with a modern style and
                creates new soundscapes with creative arrangements to interpret
                World Music. Marco and his band partner Jing – the prolific
                performer of the Mongolian Morin Khuur – launched the debut
                album “Mongolian Fusion” in 2017. The album has been crowned
                Number 1 and 2 respectively on the iTunes World Genre lists in
                Singapore and Spain.
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
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/ohXBWmXDBpc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="iframe-container">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/KbqtZhtfqQU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="iframe-container">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2FSRMCsg%2Fvideos%2F1038608436902734%2F&show_text=false&width=560&t=0"
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
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/hPwuxi9zay8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
