const mobileMenu = document.querySelector('.mobile-nav');

if (mobileMenu) {
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !mobileMenu.open) return;
    const focusWasInMenu = mobileMenu.contains(document.activeElement);
    mobileMenu.open = false;
    if (focusWasInMenu) mobileMenu.querySelector('summary')?.focus();
  });

  mobileMenu.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', () => { mobileMenu.open = false; });
  });

  window.matchMedia('(min-width: 841px)').addEventListener('change', (event) => {
    if (event.matches) mobileMenu.open = false;
  });
}
