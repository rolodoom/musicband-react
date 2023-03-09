import React from "react";

function Contact() {
  return (
    <section className="page-section section-dark" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row align-items-center pb-5">
          <div className="col-lg-12 text-center">
            <a className="btn btn-primary btn-xl mx-2" href="#!">
              <i className="far fa-file-pdf"></i> Rider
            </a>
            <a className="btn btn-secondary btn-xl mx-2" href="#!">
              <i className="far fa-file-pdf"></i> Brochure
            </a>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <a className="btn btn-dark btn-social-contact mx-2" href="#!">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a className="btn btn-dark btn-social-contact mx-2" href="#!">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
            <a className="btn btn-dark btn-social-contact mx-2" href="#!">
              <i className="fab fa-facebook-f fa-2x"></i>
            </a>
            <a className="btn btn-dark btn-social-contact mx-2" href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
