import React from "react";

function Masthead() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-subheading">Welcome!</div>
        <div className="masthead-heading text-uppercase">
          It's Nice To Meet You
        </div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#videos">
          <i className="fas fa-angle-double-down"></i>
          Continue
          <i className="fas fa-angle-double-down"></i>
        </a>
      </div>
    </header>
  );
}

export default Masthead;
