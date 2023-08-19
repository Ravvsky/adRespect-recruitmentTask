import { cards } from './DUMMY_DATA.json';
const cardsWrapper = document.getElementById('cardsWrapper');
const cardClasses =
  'bg-white px-[2rem] py-[2.4rem] 2xl:px-[4rem] 2xl:py-[4.8rem] w-full md:w-auto flex flex-col rounded-[2.8rem] justify-between h-[37rem]';
const titleClasses =
  'text-black leading-[115%] text-[2.8rem] font-second tracking-[-1.4px] font-medium';

const descriptionClasses = 'max-w-[29.8rem]';

const buttonClasses =
  'self-start border-b-[1px] border-solid border-green leading-[150%] text-green flex items-center gap-[1rem] pb-[0.4rem]';
cards.forEach((card) => {
  const newCard = document.createElement('div');

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
  topDiv.classList.add('flex', 'flex-col', 'gap-[3.2rem]');
  topDiv.appendChild(icon);
  topDiv.appendChild(textsDiv);

  const buttonIcon = document.createElement('object');
  buttonIcon.setAttribute(
    'data',
    `../src/assets/icons/button-arrow-right-icon.svg`
  );
  buttonIcon.setAttribute('type', 'image/svg+xml');
  buttonIcon.setAttribute('aria-label', `right arrow icon`);
  buttonIcon.setAttribute('role', 'img');
  buttonIcon.classList.add('w-min', 'h-min');

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.innerHTML = card.buttonText;
  button.appendChild(buttonIcon);
  button.classList.add(...buttonClasses.split(' '));

  newCard.appendChild(topDiv);
  newCard.appendChild(button);
  newCard.classList.add(...cardClasses.split(' '));
  cardsWrapper?.appendChild(newCard);
});
