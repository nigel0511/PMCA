import React from "react";
import SimpleMap from "./Map";

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2
            className="section-heading text-uppercase"
            style={{ color: "white" }}
          >
            Contact Us
          </h2>
          <h3 className="section-subheading" style={{ color: "white" }}>
            Book your free trial lesson today!
          </h3>
        </div>

        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="map-container">
                {/* <SimpleMap></SimpleMap> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7366094211216!2d103.7367165148246!3d1.334217061996958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1005a39a1d09%3A0x99bb8c03f244ee9c!2sPhilharmonic%20Musicademy%EF%BD%9Cmusic%20school%20%40%20Jurong%20East!5e0!3m2!1szh-TW!2ssg!4v1634898385754!5m2!1szh-TW!2ssg"
                  className="responsive-iframe"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- Name input--> */}
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-group">
                {/* <!-- Email address input--> */}
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  data-sb-validations="required,email"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              <div className="form-group">
                {/* <!-- Phone number input--> */}
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  A phone number is required.
                </div>
              </div>
              <div className="form-group form-group-textarea mb-md-0">
                {/* <!-- Message input--> */}
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  data-sb-validations="required"
                ></textarea>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
          <div className="d-none" id="submitSuccessMessage">
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">Form submission successful!</div>
              To activate this form, sign up at
              <br />
              <a href="https://startbootstrap.com/solution/contact-forms">
                https://startbootstrap.com/solution/contact-forms
              </a>
            </div>
          </div>
          {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
          <div className="d-none" id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          </div>
          {/* <!-- Submit Button--> */}
          <div className="text-center">
            <button
              className="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
