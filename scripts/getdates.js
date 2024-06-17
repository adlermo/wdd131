const lastModified = document.querySelector('#lastModified');
const copyrightYear = document.querySelector('#currentYear');

const today = new Date();

lastModified.innerHTML = `Last Modified in ${document.lastModified}`;
copyrightYear.innerHTML = `©${today.getFullYear()}`;
