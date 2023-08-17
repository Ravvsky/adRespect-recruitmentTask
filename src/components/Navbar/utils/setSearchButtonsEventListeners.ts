import searchInputAnimationHandler from './searchInputAnimationHandler';
const setSearchButtonsEventListeners = () => {
  const searchButtons = document.querySelectorAll('#search');
  searchButtons.forEach((searchButton) => {
    searchButton.addEventListener('click', searchInputAnimationHandler);
  });
};

export default setSearchButtonsEventListeners;
