import React from "react";

import ReleaseItem from "../components/ReleaseItem";
import ReleaseModal from "../components/ReleaseModal";

import { getSortedItems } from "../../shared/util/filter";

function Releases({ releases }) {
  const sortedReleases = getSortedItems([...releases]);

  const commonClasses = "col-sm-6 mb-4";
  const columnClasses = `${commonClasses} ${
    releases.length > 3 ? "col-lg-3" : "col-lg-4"
  }`;

  return (
    <section
      className="portfolio page-section bg-dark section-dark"
      id="releases"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Music</h2>
          <h3 className="section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          {sortedReleases.map((release) => {
            return (
              <React.Fragment key={release.id}>
                <div className={columnClasses}>
                  <ReleaseItem release={release} />
                </div>
                <ReleaseModal release={release} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="row py-1">
          <div className="col-md-12 my-3">
            <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center">
              <a className="streaming-service my-3" href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/logos/spotify.svg"
                  alt=""
                />
              </a>
              <a className="streaming-service my-3" href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/logos/deezer.svg"
                  alt=""
                />
              </a>
              <a className="streaming-service my-3" href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/logos/applemusic.svg"
                  alt=""
                />
              </a>
              <a className="streaming-service my-3" href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/logos/amazonmusic.svg"
                  alt=""
                />
              </a>
              <a className="streaming-service my-3" href="#!">
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/logos/bandcamp.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Releases;
