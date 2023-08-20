import appendComponentOnElement from '../../utils/appendComponentOnElement';
import { initializeSlider } from '../../../src/components/ImagesCarousel';

const createImageElement = (image: string, index?: number) => {
  const imageElement = document.createElement('img');
  imageElement.setAttribute(
    'src',
    `../../../src/assets/images/masonry-images/${image}`
  );
  imageElement.classList.add('absolute');
  imageElement.classList.add('w-full');
  imageElement.setAttribute('data-index', `${index}`);
  imageElement.addEventListener('click', async (event) => {
    const clickedImageIndex = (event.target as Element).getAttribute(
      'data-index'
    );
    const modal = document.createElement('div');
    modal.classList.add(
      'fixed',
      'bg-beige/50',
      'w-full',
      'h-full',
      'top-0',
      'flex',
      'items-center',
      'justify-center',
      'z-50'
    );

    const imagesCarouselContainer = document.createElement('div');

    imagesCarouselContainer.setAttribute(
      'data-componentName',
      'ImagesCarousel'
    );

    modal.appendChild(imagesCarouselContainer);
    document.body.appendChild(modal);

    await appendComponentOnElement('ImagesCarousel');

    const imagesCarouselComponent = document.querySelector(
      '[data-componentname="ImagesCarousel"]'
    );

    const splideList = imagesCarouselComponent?.querySelector('.splide__list');
    const images = document.getElementById('masonry-wrapper')?.childNodes;

    images?.forEach((image) => {
      if (image instanceof Element) {
        const splideElement = document.createElement('li');
        splideElement.classList.add('splide__slide');

        const splideImageElement = document.createElement('img');
        splideImageElement.classList.add(
          'w-full',
          'h-full',
          'object-cover',
          'lg:max-w-[40vw]',
          'max-w-[80vw]',
          'max-h-[90vh]'
        );
        splideImageElement.setAttribute('src', `${image.getAttribute('src')}`);
        splideElement.appendChild(splideImageElement);
        splideList?.appendChild(splideElement);
      }
    });
    if (clickedImageIndex !== null) {
      initializeSlider().mount().go(+clickedImageIndex);
    }
    modal.addEventListener('click', (event) => {
      const clickedElement = event.target as Node;

      if (
        imagesCarouselComponent &&
        !imagesCarouselComponent.contains(clickedElement)
      ) {
        document.body.removeChild(modal);
      }
    });
  });
  return imageElement;
};

export default createImageElement;
