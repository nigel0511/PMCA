import React from "react";

export default function WhyLearnMusic() {
  return (
    <section className="page-section">
      <div className="containter">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Why Learn to Play Music?
          </h2>
          <h3 className="section-subheading text-muted">
            Benefits of playing musical instruments
          </h3>
        </div>
        <div className="col-md-7" style={{ margin: "auto" }}>
          <div className="iframe-container" style={{ margin: "5px" }}>
            <iframe
              className="responsive-iframe"
              src="https://embed.ted.com/talks/anita_collins_how_playing_an_instrument_benefits_your_brain"
              title="How playing an instrument benefits your brain"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
