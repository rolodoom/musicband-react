// Function to initialize the scrollspy
export function initializeScrollSpy() {
  const navigationElement = document.body.querySelector('#mainNav');
  if (navigationElement) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74,
    });
  }
}

// Function to initialize the navbar toggler
// Collapse responsive navbar when toggler is visible
export function initializeNavbarToggler() {
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  if (navbarToggler) {
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.forEach(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
          navbarToggler.click();
        }
      });
    });
  }
}
