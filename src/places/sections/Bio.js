import React from "react";
import { v4 as uuidv4 } from "uuid";

import { getSortedItems } from "../../shared/util/filter";

import BioItem from "../components/BioItem";

const Bio = ({ bios }) => {
  const sortedBios = getSortedItems([...bios], "asc");
  return (
    <section className="page-section" id="bio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Bio</h2>
          <h3 className="section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <ul className="timeline">
          {sortedBios.map((bio, index, arr) => {
            const isLast = index === arr.length - 1;
            const isOdd = index % 2 === 1;
            return (
              <BioItem bio={bio} key={uuidv4()} isLast={isLast} isOdd={isOdd} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Bio;
