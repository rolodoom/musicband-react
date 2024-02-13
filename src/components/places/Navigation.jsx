function Navigation({ data }) {
  const bandName = data.band.name || 'MusicBand';
  const logo = data.band.logo || '/assets/img/navbar-logo.svg';
  const items = {
    videos: data.videos.title || 'Videos',
    releases: data.releases.title || 'Releases',
    bio: data.bio.title || 'Biography',
    musicians: data.musicians.title || 'Musicians',
    gallery: data.gallery.title || 'Gallery',
    contact: data.contact.title || 'Contact',
  };

  if (!('releases' in data.releases ?? {})) {
    delete items.releases;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src={logo} alt={bandName} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            {Object.entries(items).map(([id, value]) => {
              return (
                <li className="nav-item" key={id}>
                  <a className="nav-link js-scroll-trigger" href={`#${id}`}>
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
