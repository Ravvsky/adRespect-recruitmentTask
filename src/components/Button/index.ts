const buttons = document.querySelectorAll('[data-componentname="Button"]');

buttons.forEach((button) => {
  button.classList.add(
    'px-[2.4rem]',
    'pt-[1.2rem]',
    'pb-[1.4rem]',
    'rounded-[20rem]',
    'leading-[150%]',
    'transition-all'
  );
  if (button.getAttribute('data-variant') === 'main') {
    button.classList.add('bg-green', 'text-gray', 'hover:opacity-90');
  }

  if (button.getAttribute('data-variant') === 'secondary') {
    button.classList.add(
      'border-solid',
      'border-green',
      'border-[1px]',
      'text-green',
      'hover:bg-white/40'
    );
  }
});
