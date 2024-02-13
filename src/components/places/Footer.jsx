function Footer({ data: { bandName, credits } }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 bg-dark section-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright &copy; {bandName} {currentYear}
          </div>
          <div className="col-lg-4 my-3 my-lg-0"></div>
          <div className="col-lg-4 text-lg-end">
            {credits.copy || 'code by'}{' '}
            <a className="link text-decoration-none me-3" href={credits.url}>
              {credits.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
