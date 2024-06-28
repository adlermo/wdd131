const lastModified = document.querySelector('#lastModified');
const copyrightYear = document.querySelector('#currentYear');

const today = new Date();

lastModified.innerHTML = `Last Modified in ${document.lastModified}`;
copyrightYear.innerHTML = `©${today.getFullYear()}`;

const toggleNavMenu = document.querySelector('#toggleNavMenu');
const navMenu = document.querySelector('#navMenu');

toggleNavMenu.addEventListener('change', () => {
  // Open menu checked, open menu
  navMenu.toggleAttribute('hidden');
});

navMenu.addEventListener('click', () => {
  // Menu option chosen, checking it
  navMenu.toggleAttribute('hidden');
  //   openMenu.firstChild.nextElementSibling.innerText = 'Menu';
});
