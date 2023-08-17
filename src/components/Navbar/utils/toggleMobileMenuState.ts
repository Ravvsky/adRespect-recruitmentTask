const toggleMobileMenuState = (open: boolean) => {
  const mobileMenuContainer = document.getElementById('mobileMenuContainer');
  mobileMenuContainer?.classList.replace(
    open ? 'translate-x-full' : 'translate-x-0',
    open ? 'translate-x-0' : 'translate-x-full'
  );
};

export default toggleMobileMenuState;
