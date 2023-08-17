import { NavItem } from '../types/NavItem';

const createMobileMenu = (menuItems: NavItem[], isNested: boolean) => {
  let navItemsString = `<ul class="flex flex-col ${
    isNested && 'hidden'
  }  gap-[2rem]">`;

  const arrowIcon = ` <object
        class="transition-all"
        data="../src/assets/icons/arrow-down-icon.svg"
        type="image/svg+xml"
        aria-label="arrow icon"
        role="img"></object>`;

  menuItems.map((item: NavItem, index) => {
    if (typeof item === 'object') {
      navItemsString += `<li data-nestednav=${index} class="flex flex-col gap-[0.5rem] cursor-pointer  "><div class="flex gap-[1rem]">${
        item.name
      } ${arrowIcon}</div> ${
        item.items && createMobileMenu(item.items, true)
      }</li>`;
      return;
    }
    navItemsString += `<li class=" cursor-pointer">${item}</li>`;
  });

  navItemsString += `</ul>`;
  return navItemsString;
};

export default createMobileMenu;
