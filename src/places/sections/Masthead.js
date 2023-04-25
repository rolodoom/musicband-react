import React from "react";

import Button from "../../shared/components/FormElements/Button";

import { getInlineSectionStyles } from "../../shared/util/format";

function Masthead({
  data: { bgImage, colors, vertAlignment, subtitle, title, logo },
}) {
  // Inline section colors
  const styles = getInlineSectionStyles(colors, bgImage, vertAlignment);

  const logoStyles = {
    maxWidth: "320px",
    height: logo?.height || "60px",
  };

  return (
    <header className="masthead" style={styles}>
      <div className="container">
        {!logo && (
          <div className="masthead-subheading">{subtitle || "Welcome!"}</div>
        )}
        <div className="masthead-heading text-uppercase">
          {!logo && (title || "It's Nice To Meet You")}
          {logo && (
            <img
              src={logo.image}
              alt={`${logo.alt || "Logo"}`}
              style={logoStyles}
            />
          )}
        </div>
        <Button className="btn-primary btn-xl text-uppercase" href="#videos">
          <i className="fas fa-angle-double-down"></i> Continue{" "}
          <i className="fas fa-angle-double-down"></i>
        </Button>
      </div>
    </header>
  );
}

export default Masthead;
