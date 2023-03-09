import React from "react";

function Footer() {
  return (
    <footer className="footer py-4 bg-dark section-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright &copy; Your Website 2022
          </div>
          <div className="col-lg-4 my-3 my-lg-0"></div>
          <div className="col-lg-4 text-lg-end">
            code by{" "}
            <a className="link text-decoration-none me-3" href="#!">
              credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
