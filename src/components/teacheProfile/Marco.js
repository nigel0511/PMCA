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
                Former Sojourner in Japan for 2 years, Music Producer, Singer-
                songwriter, Guitar Artist and Lecturer, Singapore Raffles Music
                College.
              </p>

              <p>
                Marco expresses his musical taste through various cultural
                collaborations and enjoys travelling and learning other musical
                cultures. He has participated in projects with GIMA Band
                supported by National Arts Council like “River of Harmony” and
                “New Journey” in 2021 and 2020 respectively.
              </p>
              <p>
                He and his friends represented Singapore to participate in
                Chengdu International Sister Cities Youth Music Festival and
                Russia Virtual Culture Marathon in 2020. He is the Guitarist and
                singer of the Crescent Muse Band for the second season of the
                “Guo Yue Da Dian”of Guangdong TV in 2019.
              </p>
              <p>
                He is the leading representative of the younger generation who
                compose and perform "Morden Nanyang Poem and Music". Marco has
                released his unique world music single “Mount Fuji” on all major
                digital platforms in 2018. He is the Guitarist and Vocalist of
                GIMA band, which is the first Mongolian Morin Khuur and Guitar
                fusion band in South East Asia. GIMA blends ancient folk
                cultures with a modern style and creates new soundscapes with
                creative arrangements to interpret World Music. Marco and his
                band partner Jing, the prolific performer of the Mongolian Morin
                Khuur, launched the debut album "Mongolian Fusion". This album
                has been crowned No.1 and No.2 respectively on the list of
                iTunes“World Genre, Singapore and Spain in 2017. He has also
                contributed to soundtracks of a few local movies in Singapore.
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
