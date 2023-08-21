import { cards } from './DUMMY_DATA.json';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

const cardsWrapper = document.getElementById('cardsWrapper');
const cardClasses =
  'bg-white px-[2rem] py-[2.4rem] 2xl:px-[4rem] 2xl:py-[4.8rem] w-full md:w-auto flex flex-col rounded-[2.8rem] justify-between h-[37rem] group transition-all hover:scale-[1.1] hover:shadow-lg';
const titleClasses =
  'text-black leading-[115%] text-[2.8rem] font-second tracking-[-1.4px] font-medium';

const descriptionClasses = 'max-w-[29.8rem]';

const buttonClasses =
  'self-start border-b-[1px] border-solid border-green leading-[150%] text-green flex items-center gap-[1rem] pb-[0.4rem] transition-all group-hover:gap-[2rem]';
cards.forEach((card) => {
  const newCard = document.createElement('button');

  const icon = document.createElement('object');
  icon.setAttribute('data', `../src/assets/icons/${card.icon}-icon.svg`);
  icon.setAttribute('type', 'image/svg+xml');
  icon.setAttribute('aria-label', `${card.icon} icon`);
  icon.setAttribute('role', 'img');
  icon.classList.add('w-min', 'h-min');

  const title = document.createElement('span');
  title.innerHTML = card.title;
  title.classList.add(...titleClasses.split(' '));

  const description = document.createElement('span');
  description.innerHTML = card.description;
  description.classList.add(...descriptionClasses.split(' '));

  const textsDiv = document.createElement('div');
  textsDiv.classList.add('flex', 'flex-col', 'gap-[1.2rem]');

  textsDiv.appendChild(title);
  textsDiv.appendChild(description);

  const topDiv = document.createElement('div');
  topDiv.classList.add('flex', 'flex-col', 'gap-[3.2rem]', 'text-left');
  topDiv.appendChild(icon);
  topDiv.appendChild(textsDiv);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = card.buttonText;
  button.classList.add(...buttonClasses.split(' '));

  const svgContainer = document.createElement('div');
  svgContainer.classList.add('w-min', 'h-min', 'fill-green');

  fetch('../src/assets/icons/button-arrow-right-icon.svg')
    .then((response) => response.text())
    .then((svg) => {
      svgContainer.insertAdjacentHTML('afterbegin', svg);
      button.appendChild(svgContainer);
    });

  button.setAttribute('aria-label', `right arrow icon`);
  button.setAttribute('role', 'img');

  newCard.appendChild(topDiv);
  newCard.appendChild(button);
  newCard.classList.add(...cardClasses.split(' '));

  cardsWrapper?.appendChild(newCard);
});
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
CustomEase.create('customBounce', '.49,1.38,.88,1');

const cardsWrapperAfterAppending = document.querySelector('#cardsWrapper');
const cardsAfterAppending = cardsWrapperAfterAppending?.children;
const cardAnimation = gsap.timeline();

cardsAfterAppending &&
  [...cardsAfterAppending].forEach((card, index) => {
    gsap.set(card, { y: -160 });

    cardAnimation.to(card, {
      y: 0,
      duration: 0.3,
    });

    ScrollTrigger.create({
      trigger: card,
      animation: cardAnimation,
      start: 'top 115%',
      toggleActions: 'play none none reverse',
    });
  });
