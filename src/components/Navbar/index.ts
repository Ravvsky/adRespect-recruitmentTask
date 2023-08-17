import setMobileMenuEventListeners from './utils/setMobileMenuEventListeners';
import setSearchButtonsEventListeners from './utils/setSearchButtonsEventListeners';
import renderNavigation from './utils/renderNavigation';

const navbarElement = document.querySelector('[data-componentname="Navbar"]');

renderNavigation(navbarElement);
setSearchButtonsEventListeners();
setMobileMenuEventListeners();
