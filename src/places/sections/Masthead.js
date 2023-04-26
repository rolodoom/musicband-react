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

  let contentToRender = "";

  if (logo) {
    // Do something if there is a logo
    contentToRender = (
      <div className="masthead-heading text-uppercase">
        <img
          src={logo.image}
          alt={`${logo.alt || "Logo"}`}
          style={logoStyles}
        />
      </div>
    );
  } else if (title && subtitle) {
    // Ask if there is no logo and both title and subtitle are present
    contentToRender = (
      <div>
        <div className="masthead-subheading">{subtitle}</div>
        <div className="masthead-heading text-uppercase">{title}</div>
      </div>
    );
  }

  return (
    <header className="masthead" style={styles}>
      <div className="container">
        {contentToRender}
        <Button className="btn-primary btn-xl text-uppercase" href="#videos">
          <i className="fas fa-angle-double-down"></i> Continue{" "}
          <i className="fas fa-angle-double-down"></i>
        </Button>
      </div>
    </header>
  );
}

export default Masthead;
