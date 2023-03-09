import React from "react";

function Musicians() {
  return (
    <React.Fragment>
      <section className="page-section bg-dark section-dark" id="musicians">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Musicians</h2>
            <h3 className="section-subheading">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="musician">
                <div className="musician-item">
                  <a
                    className="musician-link"
                    data-bs-toggle="modal"
                    href="#musicianModal1"
                  >
                    <div className="musician-hover">
                      <div className="musician-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid musician-image"
                      src="assets/img/musicians/1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <h4>Kay Garland</h4>
                <p>Vocals / Guitar</p>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="musician">
                <div className="musician-item">
                  <a
                    className="musician-link"
                    data-bs-toggle="modal"
                    href="#musicianModal2"
                  >
                    <div className="musician-hover">
                      <div className="musician-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid musician-image"
                      src="assets/img/musicians/2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <h4>Larry Parker</h4>
                <p>Bass</p>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="musician">
                <div className="musician-item">
                  <a
                    className="musician-link"
                    data-bs-toggle="modal"
                    href="#musicianModal3"
                  >
                    <div className="musician-hover">
                      <div className="musician-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img
                      className="img-fluid musician-image"
                      src="assets/img/musicians/3.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <h4>Diana Petersen</h4>
                <p>Drums</p>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-primary btn-social mx-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Musicians Modals-->
        <!-- Release Modal 1--> */}
      <div
        className="portfolio-modal modal fade"
        id="musicianModal1"
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
                    <h2 className="text-uppercase">Kay Garland</h2>
                    <p className="item-intro text-muted">Vocals / Guitar</p>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/musicians/1.jpg"
                          alt=""
                        />
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="col-md-8">
                        <p className="lead mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Autem, iusto!
                        </p>
                        <p>
                          Sapiente voluptatem delectus nisi fuga vero ratione
                          impedit minus perspiciatis quas vitae nulla, aliquam
                          commodi aspernatur eos esse animi hic blanditiis iusto
                          excepturi tenetur possimus. Saepe id asperiores esse
                          doloremque voluptatem laudantium architecto nesciunt
                          cum! At reprehenderit explicabo ut, adipisci fuga
                          unde!
                        </p>
                        <p>
                          Nihil omnis fugit ratione ut sit et dolores soluta
                          inventore perferendis, natus nostrum dicta aut! Sed
                          maxime doloribus numquam eaque culpa aperiam sequi
                          molestiae molestias facere. Culpa reprehenderit ea,
                          enim inventore libero in dolorum praesentium, expedita
                          pariatur nobis cumque? Aut, libero tenetur!
                        </p>
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
        </div>
      </div>
      {/* <!-- Release Modal 2--> */}
      <div
        className="portfolio-modal modal fade"
        id="musicianModal2"
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
                    <h2 className="text-uppercase">Larry Parker</h2>
                    <p className="item-intro text-muted">Bass</p>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/musicians/2.jpg"
                          alt=""
                        />
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="col-md-8">
                        <p className="lead mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Autem, iusto!
                        </p>
                        <p>
                          Sapiente voluptatem delectus nisi fuga vero ratione
                          impedit minus perspiciatis quas vitae nulla, aliquam
                          commodi aspernatur eos esse animi hic blanditiis iusto
                          excepturi tenetur possimus. Saepe id asperiores esse
                          doloremque voluptatem laudantium architecto nesciunt
                          cum! At reprehenderit explicabo ut, adipisci fuga
                          unde!
                        </p>
                        <p>
                          Nihil omnis fugit ratione ut sit et dolores soluta
                          inventore perferendis, natus nostrum dicta aut! Sed
                          maxime doloribus numquam eaque culpa aperiam sequi
                          molestiae molestias facere. Culpa reprehenderit ea,
                          enim inventore libero in dolorum praesentium, expedita
                          pariatur nobis cumque? Aut, libero tenetur!
                        </p>
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
        </div>
      </div>
      {/* <!-- Release Modal 3--> */}
      <div
        className="portfolio-modal modal fade"
        id="musicianModal3"
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
                    <h2 className="text-uppercase">Diana Petersen</h2>
                    <p className="item-intro text-muted">Drums</p>
                    <div className="row">
                      <div className="col-md-4">
                        <img
                          className="img-fluid d-block mx-auto img-cover"
                          src="assets/img/musicians/3.jpg"
                          alt=""
                        />
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-primary btn-social mx-2"
                          href="#!"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="col-md-8">
                        <p className="lead mb-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Autem, iusto!
                        </p>
                        <p>
                          Sapiente voluptatem delectus nisi fuga vero ratione
                          impedit minus perspiciatis quas vitae nulla, aliquam
                          commodi aspernatur eos esse animi hic blanditiis iusto
                          excepturi tenetur possimus. Saepe id asperiores esse
                          doloremque voluptatem laudantium architecto nesciunt
                          cum! At reprehenderit explicabo ut, adipisci fuga
                          unde!
                        </p>
                        <p>
                          Nihil omnis fugit ratione ut sit et dolores soluta
                          inventore perferendis, natus nostrum dicta aut! Sed
                          maxime doloribus numquam eaque culpa aperiam sequi
                          molestiae molestias facere. Culpa reprehenderit ea,
                          enim inventore libero in dolorum praesentium, expedita
                          pariatur nobis cumque? Aut, libero tenetur!
                        </p>
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default Musicians;
