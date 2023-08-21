import appendComponentOnElement from '../../utils/appendComponentOnElement';

appendComponentOnElement('Button');
const svgContainer = document.getElementById('svgContainer');
svgContainer?.classList.add('fill-gray');

fetch('../src/assets/icons/button-arrow-right-icon.svg')
  .then((response) => response.text())
  .then((svg) => svgContainer?.insertAdjacentHTML('afterbegin', svg));
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-animate').forEach((textElement) => {
  gsap.from(textElement, {
    x: '100%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: textElement,
      start: 'top 80%',
    },
  });
});
