import React from "react";

function Music() {
  return (
    <React.Fragment>
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
            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#releaseModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/releases/1.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    All Things New
                  </div>
                  <div className="portfolio-caption-subheading">2010</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#releaseModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/releases/2.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Renegade Waves
                  </div>
                  <div className="portfolio-caption-subheading">2013</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#releaseModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/releases/3.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Jungle - The Hits
                  </div>
                  <div className="portfolio-caption-subheading">2015</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#releaseModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/releases/4.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    The Alternative
                  </div>
                  <div className="portfolio-caption-subheading">2020</div>
                </div>
              </div>
            </div>
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

      {/* <!-- Releases Modals-->
        <!-- Release Modal 1--> */}
      <div
        className="portfolio-modal modal fade"
        id="releaseModal1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here--> */}
                    <h2 className="text-uppercase">All The Things New</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/releases/1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6">
                        <p className="lead mb-1">
                          Use this area to describe your release.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt
                          officia expedita beatae cupiditate, maiores
                          repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-inline">
                          <li>Release Date: January 2020</li>
                          <li>Format: CD</li>
                          <li>Label: Record Label</li>
                        </ul>
                        <p>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-bandcamp"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-spotify"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-apple"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal 2--> */}
      <div
        className="portfolio-modal modal fade"
        id="releaseModal2"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here--> */}
                    <h2 className="text-uppercase">Renegade Waves</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/releases/2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6">
                        <p className="lead mb-1">
                          Use this area to describe your release.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt
                          officia expedita beatae cupiditate, maiores
                          repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-inline">
                          <li>Release Date: January 2020</li>
                          <li>Format: CD</li>
                          <li>Label: Record Label</li>
                        </ul>
                        <p>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-bandcamp"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-spotify"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-apple"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal 3--> */}
      <div
        className="portfolio-modal modal fade"
        id="releaseModal3"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here--> */}
                    <h2 className="text-uppercase">Jungle - The Hits</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/releases/3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6">
                        <p className="lead mb-1">
                          Use this area to describe your release.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt
                          officia expedita beatae cupiditate, maiores
                          repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-inline">
                          <li>Release Date: January 2020</li>
                          <li>Format: CD, Digital</li>
                          <li>Label: Record Label</li>
                        </ul>
                        <p>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-bandcamp"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-spotify"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-apple"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal 4--> */}
      <div
        className="portfolio-modal modal fade"
        id="releaseModal4"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project Details Go Here--> */}
                    <h2 className="text-uppercase">The Alternative</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/releases/4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-6">
                        <p className="lead mb-1">
                          Use this area to describe your release.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Est blanditiis dolorem culpa incidunt minus
                          dignissimos deserunt repellat aperiam quasi sunt
                          officia expedita beatae cupiditate, maiores
                          repudiandae, nostrum, reiciendis facere nemo!
                        </p>
                        <ul className="list-inline">
                          <li>Release Date: 2015</li>
                          <li>Format: CD</li>
                          <li>Label: Record Label</li>
                        </ul>
                        <p>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-bandcamp"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-spotify"></i>
                          </a>
                          <a className="btn btn-dark btn-social mx-2" href="#!">
                            <i className="fab fa-apple"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Music;
