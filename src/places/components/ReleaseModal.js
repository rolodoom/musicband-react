import React from "react";
import ReactDOM from "react-dom";

import { v4 as uuidv4 } from "uuid";

import { formatDate } from "../../shared/util/format";
import Button from "../../shared/components/FormElements/Button";

const ReleaseModal = ({ release }) => {
  const formattedDate = formatDate(release.date);

  const content = (
    <div
      className="portfolio-modal modal fade"
      id={`modal_${release.id}`}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">{release.title}</h2>

                  {release.subtitle && (
                    <p className="item-intro text-muted">{release.subtitle}</p>
                  )}
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        className="img-fluid d-block mx-auto img-cover"
                        src={release.image}
                        alt={release.title}
                      />
                    </div>
                    <div className="col-md-6">
                      <p>{release.description}</p>
                      <ul className="list-inline">
                        <li>
                          <strong>Release Date:</strong> {formattedDate}
                        </li>
                        {release.format && (
                          <li>
                            <strong>Format:</strong> {release.format}
                          </li>
                        )}
                        {release.label && (
                          <li>
                            <strong>Label:</strong> {release.label}
                          </li>
                        )}
                      </ul>
                      <p>
                        {release.streaming.map((channel) => {
                          return (
                            <Button
                              className="btn-dark btn-social mx-2"
                              href={channel.link}
                              key={uuidv4()}
                            >
                              <i className={`fab fa-${channel.name}`}></i>
                            </Button>
                          );
                        })}
                      </p>
                      <Button className="btn-primary" dismiss="modal">
                        <i className="fas fa-times mr-1"></i> Cerrar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default ReleaseModal;
