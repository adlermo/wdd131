const toggleNavMenu = document.querySelector('#toggleNavMenu');
const navMenu = document.querySelector('#navMenu');

toggleNavMenu.addEventListener('change', () => {
  // Open menu checked, open menu
  if (window.innerWidth <= 880) navMenu.toggleAttribute('hidden');
});

navMenu.addEventListener('click', () => {
  // Menu option chosen, checking it
  if (window.innerWidth <= 880) navMenu.toggleAttribute('hidden');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 880) navMenu.removeAttribute('hidden');
});
