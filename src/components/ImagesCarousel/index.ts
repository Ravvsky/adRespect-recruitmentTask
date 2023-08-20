import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

let contentSlider: Splide | null = null;

function initializeSlider() {
  contentSlider = new Splide('#left-carousel', {
    pagination: false,
  });

  return contentSlider;
}

export { initializeSlider, contentSlider };
