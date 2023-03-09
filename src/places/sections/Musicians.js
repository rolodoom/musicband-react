import React from "react";

import MusicianItem from "../components/MusicianItem";
import MusicianModal from "../components/MusicianModal";

function Musicians({ musicians }) {
  const commonClasses = "";
  const columnClasses = `${commonClasses} ${
    musicians.length > 3 ? "col-lg-3" : "col-lg-4"
  }`;

  return (
    <section className="page-section bg-dark section-dark" id="musicians">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Musicians</h2>
          <h3 className="section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          {musicians.map((musician) => {
            return (
              <>
                <div className={columnClasses} key={musician.id}>
                  <MusicianItem musician={musician} />
                </div>
                <MusicianModal musician={musician} />
              </>
            );
          })}
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Musicians;
