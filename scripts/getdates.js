const lastModified = document.querySelector('#lastModified');
const copyrightYear = document.querySelector('#currentYear');

const today = new Date();

lastModified.innerHTML = document.lastModified;
copyrightYear.innerHTML = `Copyright ${today.getFullYear()}.`;
