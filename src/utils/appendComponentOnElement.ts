const appendComponentOnElement = async (
  name: string,
  path?: string
): Promise<void> => {
  if (!name) return;

  try {
    const response = await fetch(
      path ? path : `./components/${name}/index.html`
    );
    const htmlText = await response.text();

    if (!htmlText) {
      console.error('Fetched HTML is empty');
      return;
    }

    const targetElements: NodeList = document.querySelectorAll(
      `[data-componentName="${name}"]`
    );

    if (targetElements.length === 0) {
      console.error(`Elements with [data-componentName="${name}"] not found`);
      return;
    }

    const temporaryContainer: HTMLDivElement = document.createElement('div');
    temporaryContainer.innerHTML = htmlText;

    if (temporaryContainer.children.length !== 1) {
      console.error('Component must have one parent element');
      return;
    }

    const newComponent: HTMLElement = temporaryContainer.children.item(
      0
    ) as HTMLElement;

    const originalAttributes = (targetElements[0] as Element).attributes;
    for (let i = 0; i < originalAttributes.length; i++) {
      const attr = originalAttributes[i];
      newComponent.setAttribute(attr.name, attr.value);
    }
    targetElements.forEach((targetElement) => {
      const parentElement = targetElement.parentElement;
      if (parentElement) {
        const clonedComponent = newComponent.cloneNode(true) as HTMLElement;

        const originalAttributes = (targetElement as Element).attributes;
        for (let i = 0; i < originalAttributes.length; i++) {
          const attr = originalAttributes[i];
          clonedComponent.setAttribute(attr.name, attr.value);
        }
        while (targetElement.firstChild) {
          clonedComponent.appendChild(targetElement.firstChild);
        }

        parentElement.replaceChild(clonedComponent, targetElement);
      }
    });

    const scripts = newComponent.querySelectorAll('script');
    const scriptPromises: Promise<void>[] = [];

    for (const script of scripts) {
      if (script.src) {
        scriptPromises.push(loadScript(script.src));
      } else if (script.innerText.trim() !== '') {
        eval(script.innerText);
      }
    }

    await Promise.all(scriptPromises);
  } catch (error) {
    console.error('Fetching error', error);
  }
};

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = (error) => {
      console.error('Error loading script:', error);
      reject(error);
    };
    document.head.appendChild(script);
  });
};

export default appendComponentOnElement;
