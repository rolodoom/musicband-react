import React from "react";
import { v4 as uuidv4 } from "uuid";

import { getSortedItems } from "../../shared/util/filter";
import { getInlineSectionStyles } from "../../shared/util/format";

import BioItem from "../components/BioItem";

const Bio = ({
  data: { bios, title, subtitle, colors, bgImage, className },
}) => {
  // Inline section colors
  const styles = getInlineSectionStyles(colors, bgImage);
  const classes = `page-section ${className ? className : ""}`;

  const sortedBios = getSortedItems([...bios], "asc");
  return (
    <section className={classes} id="bio" style={styles}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">{title || "Bio"}</h2>
          <h3 className="section-subheading">{subtitle || ""}</h3>
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
