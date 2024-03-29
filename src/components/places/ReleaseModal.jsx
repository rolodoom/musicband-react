import { v4 as uuidv4 } from 'uuid';
import { createPortal } from 'react-dom';
import { formatDate, toTitleCase } from '../../utils/format.js';
import Button from '../shared/Button.jsx';

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
                      <p
                        dangerouslySetInnerHTML={{
                          __html: release.description.replace(/\n/g, '<br>'),
                        }}
                      ></p>
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
                              className="btn-dark mx-2 my-2"
                              href={channel.url}
                              key={uuidv4()}
                            >
                              <i className={`fab fa-${channel.name}`}></i>{' '}
                              {toTitleCase(channel.name)}
                            </Button>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                  <Button className="btn-primary" dismissModal>
                    <i className="fas fa-times mr-1"></i> Cerrar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.getElementById('modal'));
};

export default ReleaseModal;
