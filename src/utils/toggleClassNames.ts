const toggleClassNames = (
  element: Element,
  classesArray: string[],
  action: 'ADD' | 'REMOVE'
) => {
  classesArray.forEach((className) => {
    if (action === 'ADD') {
      element.classList.add(className);
    } else if (action === 'REMOVE') {
      element.classList.remove(className);
    }
  });
};

export default toggleClassNames;
