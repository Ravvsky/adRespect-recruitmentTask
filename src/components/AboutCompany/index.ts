import appendComponentOnElement from '../../utils/appendComponentOnElement';

appendComponentOnElement('Button');
const svgContainer = document.getElementById('svgContainer');
svgContainer?.classList.add('fill-gray');

fetch('../src/assets/icons/button-arrow-right-icon.svg')
  .then((response) => response.text())
  .then((svg) => svgContainer?.insertAdjacentHTML('afterbegin', svg));
