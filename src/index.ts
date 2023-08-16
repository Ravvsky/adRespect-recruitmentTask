import appendComponentOnElement from './utils/appendComponentOnElement'; // Use relative path
document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.body;
  const childrenElements = bodyElement.querySelectorAll('*');
  childrenElements.forEach((element) => {
    const componentName = (element as HTMLElement).getAttribute(
      'data-componentName'
    );

    if (componentName) {
      appendComponentOnElement(componentName);
    }
  });
});
