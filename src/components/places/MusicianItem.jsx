import { v4 as uuidv4 } from 'uuid';

import Button from '../shared/Button.jsx';

function MusicianItem({ musician }) {
  return (
    <div className="musician">
      <div className="musician-item">
        {musician.description ? (
          <a
            className="musician-link"
            data-bs-toggle="modal"
            href={`#modal_${musician.id}`}
          >
            <div className="musician-hover">
              <div className="musician-hover-content">
                <i className="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img
              className="img-fluid musician-image"
              src={musician.image}
              alt={`${musician.name}`}
            />
          </a>
        ) : (
          <img
            className="img-fluid musician-image"
            src={musician.image}
            alt={`${musician.name}`}
          />
        )}
      </div>
      <h4>{musician.name}</h4>
      <p>{musician.instrument}</p>

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
  );
}

export default MusicianItem;
