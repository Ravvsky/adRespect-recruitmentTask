const buttons = document.querySelectorAll('[data-componentname="Button"]');

buttons.forEach((button) => {
  const variant = button.getAttribute('data-variant');
  const color = button.getAttribute('data-color');

  button.classList.add(
    'px-[2.4rem]',
    'pt-[1.2rem]',
    'pb-[1.4rem]',
    'rounded-[20rem]',
    'leading-[150%]',
    'transition-all'
  );

  switch (variant) {
    case 'main':
      button.classList.add('hover:opacity-90');
      if (color === 'white') {
        button.classList.add('bg-gray', 'text-green');
      } else {
        button.classList.add('bg-green', 'text-gray');
      }
      break;
    case 'secondary':
      button.classList.add('border-solid', 'border-[1px]');
      if (color === 'white') {
        button.classList.add('border-gray', 'text-gray', 'hover:bg-black/20');
      } else if (color === 'black') {
        button.classList.add('border-black', 'text-black', 'hover:bg-black/10');
      } else {
        button.classList.add('border-green', 'text-green', 'hover:bg-white/40');
      }
      break;
    default:
      break;
  }
});
