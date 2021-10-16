import React from "react";

export default function Cheng() {
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
            <div className="col-lg-8 teacher-bio">
              <h2 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                CHENG TZU TING
              </h2>
              <h4 style={{ margin: "0 0 1.5rem", color: "#264653" }}>
                PIANO | MUSIC THEORY | AURAL | 阮
              </h4>
              <p>
                Cheng Tzu ting was born in Kaohsiung, Taiwan. She graduated from
                the Tainan National University of Arts with a Bachelor in
                Chinese Music in 2008. She was under the tutelage of Adssoicatae
                Professor Chen Yi Qian (Ruan Performance), Ms Han Yun (Sanxian
                Performance) and MR Zhuag Xiaowen and Mr Lu Zhiming
                (Composition).
              </p>
              <p>
                Cheng had been winning awards since the tender age of 9, winning
                firstly Kaohsiung Music Competition Ruanxian children (2nd
                Prize). Subsequently, she won many other awards such as the Wei
                Wu Ying National Music Competition college social group Ruanxian
                the solo (1st Prize) in 2008, Tainan Country Government
                Students’ Music Competition college Ruanxian solo (1st Prize)
                and the 2005 Taiwan National Student Music Competition (Tertiary
                Level) Ruanxian (Excellent Awards, 1st Prize).
              </p>
              <p>
                Her vast solo performance had also won the hearts of the
                audience in Taiwan and Singapore, where she is currently based.
                Featured as a soloist by the Singapore Ruanxian Association, she
                has performed regular in concerts such as concert “Ruanxian in
                Harmony” in 2010, as soloist for Ruan concerto, “Solitude” at
                the Esplanade Concert Hall, and the “Beautiful Sunday – World
                Tor of Ruan” as a soloist. Her recitals organized in Kaohsiung
                City in 2004, 200 and 2008 prior to her graduation were also
                highly successful. She is currently a musician of the Singapore
                Chinese Orchestra.
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
                  src="https://www.youtube.com/embed/RcFKvAhr8RE"
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
                  src="https://www.youtube.com/embed/3pAT0PrZWy4"
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
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsingapore.chinese.orchestra%2Fposts%2F10158437354239605&show_text=false&width=500"
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
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsingapore.chinese.orchestra%2Fposts%2F10158465918854605&show_text=false&width=500"
                  className="responsive-iframe"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
