import React from "react";

function Videos() {
  return (
    <section className="videos page-section" id="videos">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Videos</h2>
          <h3 className="section-subheading">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row">
          <div className="d-none d-xl-block col-xl-1"></div>
          <div className="col-xl-10">
            <div className="pb-md-3 pb-lg-4 pb-xl-5">
              <div className="video-item">
                <a
                  className="video-link"
                  href="https://www.youtube.com/watch?v=ErvgV4P6Fzc"
                  data-fancybox
                >
                  <div className="video-hover">
                    <div className="video-hover-content">
                      <i className="fas fa-play fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/videos/145-1280x720.jpg"
                    alt=""
                  />
                </a>
                <div className="video-caption">
                  <div className="video-caption-heading">Title</div>
                  <div className="video-caption-subheading text-muted">
                    Subtitle
                  </div>
                  <div className="video-caption-date text-muted">
                    2022-03-05
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block col-xl-1"></div>
        </div>
        <div className="row videos-secondary">
          <div className="col-xxl-3 col-xl-4 col-sm-6">
            <div className="video-item">
              <a
                className="video-link"
                href="https://www.youtube.com/watch?v=1w7OgIMMRc4"
                data-fancybox
              >
                <div className="video-hover">
                  <div className="video-hover-content">
                    <i className="fas fa-play fa-2x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/videos/1004-1280x720.jpg"
                  alt=""
                />
              </a>
              <div className="video-caption">
                <div className="video-caption-heading">Title</div>
                <div className="video-caption-subheading text-muted">
                  Subtitle
                </div>
                <div className="video-caption-date text-muted">2022-03-05</div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-sm-6">
            <div className="video-item">
              <a
                className="video-link"
                href="https://www.youtube.com/watch?v=8SbUC-UaAxE"
                data-fancybox
              >
                <div className="video-hover">
                  <div className="video-hover-content">
                    <i className="fas fa-play fa-2x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/videos/1042-1280x720.jpg"
                  alt=""
                />
              </a>
              <div className="video-caption">
                <div className="video-caption-heading">Title</div>
                <div className="video-caption-subheading text-muted">
                  Subtitle
                </div>
                <div className="video-caption-date text-muted">2022-03-05</div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-sm-6">
            <div className="video-item">
              <a
                className="video-link"
                href="https://www.youtube.com/watch?v=o1tj2zJ2Wvg"
                data-fancybox
              >
                <div className="video-hover">
                  <div className="video-hover-content">
                    <i className="fas fa-play fa-2x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/videos/1049-1280x720.jpg"
                  alt=""
                />
              </a>
              <div className="video-caption">
                <div className="video-caption-heading">Title</div>
                <div className="video-caption-subheading text-muted">
                  Subtitle
                </div>
                <div className="video-caption-date text-muted">2022-03-05</div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-sm-6">
            <div className="video-item">
              <a
                className="video-link"
                href="https://www.youtube.com/watch?v=Rbm6GXllBiw"
                data-fancybox
              >
                <div className="video-hover">
                  <div className="video-hover-content">
                    <i className="fas fa-play fa-2x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/videos/1067-1280x720.jpg"
                  alt=""
                />
              </a>
              <div className="video-caption">
                <div className="video-caption-heading">Title</div>
                <div className="video-caption-subheading text-muted">
                  Subtitle
                </div>
                <div className="video-caption-date text-muted">2022-03-05</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
