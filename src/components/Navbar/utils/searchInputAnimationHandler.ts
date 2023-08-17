import { gsap } from 'gsap';

const searchInputAnimationHandler = (() => {
  let isSearchInputVisible = false;
  return () => {
    const searchInputs = document.querySelectorAll<HTMLInputElement>('.line');

    searchInputs.forEach((searchInput) => {
      searchInput.style.padding = '0.5rem';
      searchInput.style.borderWidth = '1px';
      searchInput.style.marginRight = '1rem';
    });

    const screenWidth = window.innerWidth;

    if (!isSearchInputVisible) {
      let targetWidth = 220;
      if (screenWidth < 1024) {
        targetWidth = 100;
      }

      gsap.to('.line', {
        opacity: 100,
        width: `${targetWidth + 20}px`,
        duration: 0.2,
        ease: 'easeInOut',
        onComplete: function () {
          gsap.to('.line', {
            width: `${targetWidth - 20}px`,
            duration: 0.2,
            ease: 'easeInOut',
            onComplete: function () {
              gsap.to('.line', {
                width: `${targetWidth}px`,
                duration: 0.2,
                ease: 'easeInOut',
              });
            },
          });
        },
      });
    } else {
      searchInputs.forEach((searchInput) => {
        searchInput.style.padding = '';
        searchInput.style.borderWidth = '';
        searchInput.style.marginRight = '';
      });
      gsap.to('.line', {
        opacity: 0,
        width: '0px',
        duration: 0.2,
        ease: 'easeInOut',
      });
    }
    isSearchInputVisible = !isSearchInputVisible;
  };
})();
export default searchInputAnimationHandler;
