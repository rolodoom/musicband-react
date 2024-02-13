import { formatDate } from '../../utils/format';

const ReleaseItem = ({ release }) => {
  const formattedDate = formatDate(release.date);

  return (
    <div className="portfolio-item">
      <a
        className="portfolio-link"
        data-bs-toggle="modal"
        href={`#modal_${release.id}`}
      >
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={release.image} alt="" />
      </a>
      <div className="portfolio-caption">
        <div className="portfolio-caption-heading">{release.title}</div>
        <div className="portfolio-caption-subheading">{formattedDate}</div>
      </div>
    </div>
  );
};

export default ReleaseItem;
