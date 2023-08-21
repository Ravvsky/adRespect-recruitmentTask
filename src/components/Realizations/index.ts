import * as Images from './files.json';
import appendComponentOnElement from '../../utils/appendComponentOnElement';
import createImageElement from './createImageElement';
import toggleButtonIconRotation from './toggleButtonIconRotation';
import * as masonryUtils from './masonryUtils';
import toggleClassNames from '../../utils/toggleClassNames';

const masonryWrapper = document.querySelector(
  '#masonry-wrapper'
) as HTMLElement;

const imageElements: HTMLImageElement[] = [];

Images.forEach((image, index) => {
  const imageElement = createImageElement(image, index);

  imageElements.push(imageElement);
  masonryWrapper?.appendChild(imageElement);

  imageElement.addEventListener('load', () =>
    masonryUtils.handleImageLoad(imageElements, masonryWrapper)
  );
});

let isFullContentVisible = false;

const component = document.querySelector('[data-componentname="Realizations"]');
const svgContainer = component && component.querySelector('#svgContainer');
let lastIndex = Images.length - 1;

const toggleShowMoreContent = (showMoreButton: Element) => {
  const buttonText = showMoreButton.querySelector('.button-text');
  if (buttonText) {
    buttonText.textContent = isFullContentVisible ? 'Rozwiń' : 'Schowaj';
  }

  if (!isFullContentVisible) {
    const newStartingIndex = lastIndex + 1;

    toggleClassNames(showMoreButton, ['bg-white', 'hover:bg-white/50'], 'ADD');
    Images.forEach((image, index) => {
      const imageElement = createImageElement(image, newStartingIndex + index);
      imageElements.push(imageElement);
      masonryWrapper?.appendChild(imageElement);
      component && component.classList.remove('before:z-[10]');
      imageElement.addEventListener('load', () =>
        masonryUtils.handleImageLoad(imageElements, masonryWrapper)
      );
    });
  } else {
    const imagesToRemove = masonryWrapper?.querySelectorAll('.new');
    imagesToRemove?.forEach((image) => {
      masonryWrapper?.removeChild(image);
    });
    component && component.classList.add('before:z-[10]');
    toggleClassNames(
      showMoreButton,
      ['bg-white', 'hover:bg-white/50'],
      'REMOVE'
    );

    masonryUtils.getMasonryConfig().layout();
  }
  toggleButtonIconRotation(svgContainer as Element);

  isFullContentVisible = !isFullContentVisible;
};

if (component instanceof Element) {
  appendComponentOnElement('Button').then(() => {
    const showMoreButton = document?.querySelector('#showMoreButton');
    if (showMoreButton) {
      showMoreButton.addEventListener('click', () => {
        toggleShowMoreContent(showMoreButton);
      });
    }
  });

  if (svgContainer instanceof HTMLElement) {
    svgContainer.classList.add('fill-black');

    fetch('../src/assets/icons/button-arrow-down-icon.svg')
      .then((response) => response.text())
      .then((svg) => svgContainer.insertAdjacentHTML('afterbegin', svg));
  }
}
