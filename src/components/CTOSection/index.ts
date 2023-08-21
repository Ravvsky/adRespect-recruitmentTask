import appendComponentOnElement from '../../utils/appendComponentOnElement';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
appendComponentOnElement('Button');

gsap.registerPlugin(ScrollTrigger);

const ctoElement = document.querySelector('.cto-animate');

if (ctoElement) {
  gsap.set(ctoElement, { x: 0 });

  const ctoAnimation = gsap.from(ctoElement, {
    x: '100%',
    duration: 1,
    ease: 'power3.out',
  });

  const triggerPosition =
    ctoElement.getBoundingClientRect().top + window.scrollY;

  ScrollTrigger.create({
    trigger: ctoElement,
    animation: ctoAnimation,
    start: triggerPosition + window.innerHeight * 0.8, // Adjust as needed
    toggleActions: 'play none none reverse',
  });
}
