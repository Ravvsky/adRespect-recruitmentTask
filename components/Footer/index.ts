const footer = document.querySelector('footer');

const adRespectLogo = footer && footer.querySelector('#adRespectLogo');
const giardDesignLogo = footer && footer.querySelector('#giardDesignLogo');
giardDesignLogo?.classList.add('fill-gray');

fetch('../src/assets/adRespect-logo.svg')
  .then((response) => response.text())
  .then((svg) => adRespectLogo?.insertAdjacentHTML('afterbegin', svg));

fetch('../src/assets/logo.svg')
  .then((response) => response.text())
  .then((svg) => giardDesignLogo?.insertAdjacentHTML('afterbegin', svg));
