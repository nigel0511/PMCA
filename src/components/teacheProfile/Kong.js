import React from "react";

export default function Kong() {
  return (
    <div>
      <section className="page section teacher-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div style={{ margin: "10px" }}>
                <img
                  className="teacher-pic img-fluid"
                  src="assets/img/team/profile/kong.jpeg"
                ></img>
              </div>
            </div>
            <div className="col-lg-8 teacher-bio">
            <h2 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                KONG XIANLONG
              </h2>
              <h4 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                VIOLIN
              </h4>
              <p>
                Kong Xianlong, born into a musical family in Singapore in 1996,
                started violin lessons at the age of four with his grandfather.
                In 2007, he won the Second Prize in the Junior Category at the
                National Piano & Violin Competition of Singapore and
                subsequently the First Prize in both Intermediate and Senior
                Category in 2009 and 2011. He also performed Sarasate’s Carmen
                Fantasy with the Singapore National Youth Orchestra in the
                Esplanade Concert Hall under the baton of Darrell Ang. In the
                following year, he won the First Prize in the senior category
                and the best Chinese work prize at the 2012 Hong Kong
                International Violin Competition.
              </p>
              <p>
                His solo appearances include a collaboration with the China
                Philharmonic Orchestra, performing the Mozart Concertone for Two
                Violins in Beijing, April 2015. He was selected to join the
                Young Artist Programme at the Yong Siew Toh Conservatory of
                Music, National University of Singapore, at the age of 15 during
                his studies in Dunman Secondary School. He has had lessons with
                world-renowned violinists such as Cho-Liang Lin, Tong Weidong,
                Wang Hong, David Takeno, Keng-Yuen Tseng, Kam Ning, Walter
                Verdehr, Boris Kuschnir, and Shlomo Mintz. He also performed in
                the President’s Young Performers Concert playing Mozart's Violin
                Concerto No. 5 with the Singapore Symphony Orchestra in 2018.
                Xianlong graduated from the Yong Siew Toh Conservatory of Music
                in 2019, and has been under the tutelage of Qian Zhou since
                2009.
              </p>
              <p>
                Xianlong is currently a member of the Singapore Symphony
                Orchestra. He performs on a 1972 Bisiach, Leandro.
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
                  src="https://www.youtube.com/embed/t5BgbE0gCaQ"
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
                  src="https://www.youtube.com/embed/Rl8FWz2CNoc"
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
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/UnksYhGUGt8?start=1"
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
                  src="https://www.youtube.com/embed/_6YEBk2dOPA"
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
