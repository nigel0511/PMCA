import React from "react";

export default function Dandan() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/team/profile/dandan.jpg"
                ></img>
              </div>
            </div>
            <div className="col-lg-8 teacher-bio">
              <h2 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                WANG DANDAN
              </h2>
              <h4 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                VIOLIN | VIOLA
              </h4>
              <p>
                Dandan Wang started her violin study at age of 6. When she was
                16, she switched to viola study with Prof. Xi-Di Shen. In 2010
                she started her undergraduate study in Shanghai Conservatory of
                Music with a scholarship. In 2015, she was invited by well known
                Chinese Composer Tan Dun to perform his chamber music pieces in
                Shanghai and Beijing.
              </p>
              <p>
                In July of 2016, She was admitted to Pacific Music Festival, one
                of the most famous festivals in the world, also served as viola
                principle performed with Maestro Valery Gergiev, violinist
                Leonidas Kavakos. In 2016, after graduating from San Francisco
                Conservatory, Dandan was a guest Violist of San Francisco
                Symphony. And she is a fellow of San Jose Opera at the same
                time.
              </p>
              <p>
                In summer 2017, she taught Music Appreciation in San Jose State
                University Summer Beats Camp in US. Dandan also taught violin
                classes in San Mateo Foster City School District, some of public
                schools in United States from August 2017. Dandan has served as
                a violist in the Singapore Symphony Orchestra since Feb 2018,
                also coaching in Singapore Symphony youth orchestra at the same
                time, her student Caitlin Chin, won the 2nd prize in the
                National Competition of SNYO in 2019. Another student Elvis Ng
                won the gold medal in 2020 Korean International Youth Musician
                Open Competition.
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
