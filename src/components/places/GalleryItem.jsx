function GalleryItem({ image }) {
  return (
    <div className="portfolio-item">
      <a
        className="portfolio-link"
        href={image.url}
        data-fancybox="bandGallery"
        data-caption={image.label}
      >
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <div className="square-container">
          <div className="square-content">
            <img className="img-fluid" src={image.url} alt={image.label} />
          </div>
        </div>
      </a>
    </div>
  );
}

export default GalleryItem;
