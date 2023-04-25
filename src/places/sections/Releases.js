import React from "react";
import { v4 as uuidv4 } from "uuid";

import ReleaseItem from "../components/ReleaseItem";
import ReleaseModal from "../components/ReleaseModal";

import { getSortedItems } from "../../shared/util/filter";

import { getInlineSectionStyles } from "../../shared/util/format";

function Releases({
  data: { releases, streaming, title, subtitle, bgImage, colors, className },
}) {
  // Inline section colors
  const styles = getInlineSectionStyles(colors, bgImage);
  const classes = `portfolio page-section section-dark ${
    className ? className : ""
  }`;

  const sortedReleases = getSortedItems([...releases]);

  const commonClasses = "col-sm-6 mb-4";
  const columnClasses = `${commonClasses} ${
    releases.length > 3 ? "col-lg-3" : "col-lg-4"
  }`;

  return (
    <section className={classes} style={styles} id="releases">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{title || "Music"}</h2>
          <h3 className="section-subheading">{subtitle || ""}</h3>
        </div>
        <div className="row">
          {sortedReleases.map((release) => {
            release.id = uuidv4();
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
        {streaming.length > 0 && (
          <div className="row py-1">
            <div className="col-md-12 my-3">
              <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center">
                {streaming.map((service) => {
                  return (
                    <a
                      className="streaming-service my-3"
                      href={service.url}
                      key={uuidv4()}
                    >
                      <img
                        className="img-fluid d-block mx-auto"
                        src={`assets/img/logos/${service.name}.svg`}
                        alt={service.name}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Releases;
