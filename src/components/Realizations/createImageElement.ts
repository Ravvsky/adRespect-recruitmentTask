const createImageElement = (image: string) => {
  const imageElement = document.createElement('img');
  imageElement.setAttribute(
    'src',
    `../../../src/assets/images/masonry-images/${image}`
  );
  imageElement.classList.add('absolute');
  imageElement.classList.add('w-full');

  return imageElement;
};

export default createImageElement;
