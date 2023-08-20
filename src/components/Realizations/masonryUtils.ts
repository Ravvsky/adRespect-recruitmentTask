import MiniMasonry from 'minimasonry';

let masonryConfig: MiniMasonry;

function handleImageLoad(
  imageElements: HTMLImageElement[],
  masonryWrapper: HTMLElement
) {
  const allImagesLoaded = imageElements.every((image) => image.complete);

  if (allImagesLoaded) {
    masonryConfig = new MiniMasonry({
      container: masonryWrapper,
      baseWidth: 451,
      surroundingGutter: false,
      gutter: 42,
    });
  }
}

function getMasonryConfig() {
  return masonryConfig;
}

export { handleImageLoad, getMasonryConfig };
