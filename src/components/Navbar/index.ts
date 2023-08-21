import setMobileMenuEventListeners from './utils/setMobileMenuEventListeners';
import setSearchButtonsEventListeners from './utils/setSearchButtonsEventListeners';
import renderNavigation from './utils/renderNavigation';

const navbarElement = document.querySelector('[data-componentname="Navbar"]');

renderNavigation(navbarElement);
setSearchButtonsEventListeners();
setMobileMenuEventListeners();
const giardDesignLogo = document.querySelector('#giardDesignLogo');
fetch('../src/assets/logo.svg')
  .then((response) => response.text())
  .then((svg) => giardDesignLogo?.insertAdjacentHTML('afterbegin', svg));
