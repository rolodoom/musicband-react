import React from "react";
import { v4 as uuidv4 } from "uuid";

import MusicianItem from "../components/MusicianItem";
import MusicianModal from "../components/MusicianModal";

function Musicians({ data: { musicians, title, subtitle, description } }) {
  const commonClasses = "";
  const columnClasses = `${commonClasses} ${
    musicians.length > 3 ? "col-lg-3" : "col-lg-4"
  }`;

  return (
    <section className="page-section bg-dark section-dark" id="musicians">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {title || "Musicians"}
          </h2>
          <h3 className="section-subheading">{subtitle || ""}</h3>
        </div>
        <div className="row">
          {musicians.map((musician) => {
            musician.id = uuidv4();
            return (
              <React.Fragment key={musician.id}>
                <div className={columnClasses}>
                  <MusicianItem musician={musician} />
                </div>
                {musician.description && <MusicianModal musician={musician} />}
              </React.Fragment>
            );
          })}
        </div>
        {description && (
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="lead">{description}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Musicians;
