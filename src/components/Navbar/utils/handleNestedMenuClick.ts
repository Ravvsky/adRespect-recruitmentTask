function handleNestedMenuClick(nestedMenu: Element) {
  const ulElement = nestedMenu.querySelector('ul');
  const arrowIcon = nestedMenu.querySelector('object');

  if (ulElement) {
    if (ulElement.style.display === 'none') {
      ulElement.style.display = 'flex';
      arrowIcon && (arrowIcon.style.transform = 'rotate(-180deg)');
    } else {
      ulElement.style.display = 'none';
      arrowIcon && (arrowIcon.style.transform = '');
    }
  }
}

export default handleNestedMenuClick;
