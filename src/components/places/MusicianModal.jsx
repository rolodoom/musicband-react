import { createPortal } from 'react-dom';

import { v4 as uuidv4 } from 'uuid';

import Button from '../shared/Button';

function MusicianModal({ musician }) {
  const content = (
    <div
      className="portfolio-modal modal fade"
      id={`modal_${musician.id}`}
      role="dialog"
      aria-hidden="true"
      key={musician.id}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="close-modal" data-bs-dismiss="modal">
            <img src="/assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* <!-- Project Details Go Here--> */}
                  <h2 className="text-uppercase">{musician.name}</h2>
                  <p className="item-intro text-muted">{musician.instrument}</p>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className="img-fluid d-block mx-auto img-cover"
                        src={musician.image}
                        alt=""
                      />
                      {musician.social.map((social) => {
                        return (
                          <Button
                            className="btn-primary btn-social mx-2"
                            href={social.url}
                            key={uuidv4()}
                          >
                            <i className={`fab fa-${social.name}`}></i>
                          </Button>
                        );
                      })}
                    </div>
                    <div className="col-md-8">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: musician.description.replace(/\n/g, '<br>'),
                        }}
                      ></p>
                      <Button className="btn btn-primary" dismissModal>
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

  return createPortal(content, document.getElementById('modal'));
}

export default MusicianModal;
