import React from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../../shared/components/FormElements/Button";
import {
  getFileExtension,
  getIconId,
  toTitleCase,
} from "../../shared/util/format";

function Contact({ band }) {
  const showPDFs = band.press.length > 0;
  const showSocial = band.social.length > 0;
  return (
    <section className="page-section section-dark" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        {showPDFs && (
          <div className="row align-items-center pb-5">
            <div className="col-lg-12 text-center">
              {band.press.map((file) => {
                const extension = getFileExtension(file.url);
                const icon = getIconId(extension);
                return (
                  <Button
                    className={`btn-${file.color || "primary"} btn-xl mx-2`}
                    href={file.url}
                    key={uuidv4()}
                  >
                    <i className={`far fa-${icon}`}></i>{" "}
                    {toTitleCase(file.name)}
                  </Button>
                );
              })}
            </div>
          </div>
        )}

        {showSocial && (
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              {band.social.map((social) => {
                return (
                  <Button
                    className="btn-dark btn-social-contact mx-2"
                    href={social.url}
                    key={uuidv4()}
                  >
                    <i className={`fab fa-${social.name} fa-2x`}></i>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
