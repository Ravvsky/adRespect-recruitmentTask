import createMegaMenu from './createMegaMenu';
import createMenu from './createMenu';
import createMobileMenu from './createMobileMenu';
import handleNestedMenuClick from './handleNestedMenuClick';
import { megaMenuContent, navItems } from '../DUMMY_DATA.json';

function renderNavigation(navbarElement: Element | null) {
  const navElement = navbarElement?.querySelector('nav');
  const domParser = new DOMParser();

  if (navElement) {
    const parsedMenu = domParser.parseFromString(
      createMenu(navItems, false),
      'text/html'
    );
    const menuElement = parsedMenu.body.firstChild;
    if (menuElement) {
      navElement.insertBefore(menuElement, navElement.firstChild);
      createMegaMenu(
        '.container',
        '[data-megamenutrigger="0"]',
        megaMenuContent
      );
    }
  }

  const mobileNavElement = navbarElement?.querySelector('.mobileul');

  if (mobileNavElement) {
    const parsedMenu = domParser.parseFromString(
      createMobileMenu(navItems, false),
      'text/html'
    );
    const menuElement = parsedMenu.body.firstChild;
    if (menuElement) {
      mobileNavElement.insertBefore(menuElement, mobileNavElement.firstChild);
    }

    const nestedMenu = mobileNavElement.querySelector('[data-nestednav="0"]');
    nestedMenu?.addEventListener('click', () => {
      handleNestedMenuClick(nestedMenu);
    });
  }
}

export default renderNavigation;
