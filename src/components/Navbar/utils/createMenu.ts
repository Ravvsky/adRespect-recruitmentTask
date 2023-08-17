import { NavItem } from '../types/NavItem';

const createMenu = (menuItems: NavItem[], isNested: boolean) => {
  let navItemsString = `<ul class="flex ${
    isNested && 'flex-col hidden'
  }  gap-[2rem] md:gap-[4.8rem] whitespace-nowrap	ml-[1rem]">`;

  const arrowIcon = ` <object
    class="transition-all"
    data="../src/assets/icons/arrow-down-icon.svg"
    type="image/svg+xml"
    aria-label="giard design Logo"
    role="img"></object>`;

  menuItems.map((item: NavItem, index) => {
    if (typeof item === 'object') {
      navItemsString += `<li data-megamenutrigger=${index} class="flex items-center gap-[0.5rem] cursor-pointer  ">${item.name} ${arrowIcon}</li>`;
      return;
    }
    navItemsString += `<li class=" cursor-pointer">${item}</li>`;
  });

  navItemsString += `</ul>`;
  return navItemsString;
};

export default createMenu;
