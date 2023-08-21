import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import appendComponentOnElement from '../../utils/appendComponentOnElement';
const imageSlider = new Splide('#image-carousel', {
  type: 'loop',
  arrows: true,
  pagination: false,
});

const contentSlider = new Splide('#left-carousel', {
  type: 'fade',
  arrows: false,
  pagination: false,
});

imageSlider.sync(contentSlider);
imageSlider.mount();
contentSlider.mount();

const buttonsWrapper = document.getElementById('buttonsWrapper');
const childrenElements = buttonsWrapper && buttonsWrapper.querySelectorAll('*');
childrenElements &&
  childrenElements.forEach((element) => {
    const componentName = (element as HTMLElement).getAttribute(
      'data-componentName'
    );

    if (componentName) {
      appendComponentOnElement(componentName);
    }
  });

const svgContainers = document.querySelectorAll('.svgContainer');
svgContainers.forEach((svgContainer) => {
  svgContainer?.classList.add('fill-green');
  fetch('../src/assets/icons/button-arrow-down-icon.svg')
    .then((response) => response.text())
    .then((svg) => svgContainer.insertAdjacentHTML('afterbegin', svg));
});

const heroComponent = document.querySelector(
  '[data-componentName="Hero"]'
) as HTMLElement;
const imageSliderElement = document.getElementById(
  'image-carousel'
) as HTMLElement;
const leftSliderWrapper = document.getElementById('leftSliderWrapper');

const imageSliderHeight = getComputedStyle(imageSliderElement).height;
heroComponent && (heroComponent.style.height = imageSliderHeight);
leftSliderWrapper && (leftSliderWrapper.style.height = imageSliderHeight);
