import toggleMobileMenuState from './toggleMobileMenuState';

const setMobileMenuEventListeners = () => {
  const menuOpenButton = document.querySelector(
    '[data-button="openMobileMenu"]'
  );
  const menuCloseButton = document.querySelector(
    '[data-button="closeMobileMenu"]'
  );

  menuOpenButton?.addEventListener('click', () => {
    toggleMobileMenuState(true);
  });

  menuCloseButton?.addEventListener('click', () => {
    toggleMobileMenuState(false);
  });
};
export default setMobileMenuEventListeners;
