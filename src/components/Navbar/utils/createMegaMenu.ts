import { MegaMenuItem } from '../types/MegaMenuItem';

const createMegaMenu = (
  containerElementSelector: string,
  megamenutrigger: string,
  content: MegaMenuItem[]
) => {
  const containerElement = document.querySelector(containerElementSelector);
  const newMegaMenuDiv = document.createElement('div');
  newMegaMenuDiv.className =
    'absolute w-full grid grid-cols-12 gap-[2rem] left-1/2 p-[2rem] -translate-x-1/2 container bg-white top-[-100%] transition-all z-[-1] duration-600';
  containerElement?.appendChild(newMegaMenuDiv);

  function generateMegaMenuContent(item: MegaMenuItem) {
    const contentHTML = Array.isArray(item.content)
      ? `<ul class="flex flex-col gap-[1rem]">${item.content
          .map((listItem) => `<li>${listItem}</li>`)
          .join('')}</ul>`
      : `<div class="flex gap-[2rem]">${item.content}</div>`;

    const columnSpan = item.index !== 2 ? 'col-span-3' : 'col-span-6';

    return `
      <div class="flex flex-col gap-[2rem] ${columnSpan}">
        <div class="font-semibold">${item.title}</div>
        <div>${contentHTML}</div>
      </div>
    `;
  }

  const megaMenuHTML = content
    .map((item, index) => generateMegaMenuContent({ ...item, index }))
    .join('');

  newMegaMenuDiv.innerHTML = megaMenuHTML;

  const megaMenuTriggerElement = document.querySelector(megamenutrigger);

  megaMenuTriggerElement?.addEventListener('click', () => {
    const arrowIcon = megaMenuTriggerElement.querySelector('object');
    arrowIcon && (arrowIcon.style.transform = 'rotate(-180deg)');

    const currentTopValue = parseInt(
      window.getComputedStyle(newMegaMenuDiv).top
    );

    if (currentTopValue > 0) {
      arrowIcon && (arrowIcon.style.transform = '');
    }
    newMegaMenuDiv.style.top = currentTopValue > 0 ? '-100%' : '69px';
  });
};

export default createMegaMenu;
