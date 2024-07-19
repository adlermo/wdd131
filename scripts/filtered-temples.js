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

const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'São Paulo Brazil',
    location: 'São Paulo, Sao Paulo, Brazil',
    dedicated: '1978, October, 30',
    area: 59246,
    imageUrl:
      'https://churchofjesuschrist.org/imgs/43bc3d5ccf08d18c729b6b64777207cf5b102ae8/full/400%2C/0/default',
  },
  {
    templeName: 'Curitiba Brazil',
    location: 'Curitiba, Parana, Brazil',
    dedicated: '2008, June, 1',
    area: 27850,
    imageUrl:
      'https://churchofjesuschrist.org/imgs/4a9292199a4f481a72d7fe4c4c67845a4b2d83e6/full/400%2C/0/default',
  },
  {
    templeName: 'Campinas Brazil',
    location: 'Campinas, Sao Paulo, Brazil',
    dedicated: '2002, May, 17',
    area: 49100,
    imageUrl:
      'https://www.churchofjesuschrist.org/imgs/8540649d4237393e9b6ae327ab4aac3992f62bd9/full/400%2C/0/default',
  },
];

const createTempleCards = (templeList = temples) => {
  templeList.forEach((temple) => {
    const card = document.createElement('section');
    const name = document.createElement('h3');
    const location = document.createElement('p');
    const dedication = document.createElement('p');
    const area = document.createElement('p');
    const img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span> Location: </span> ${temple.location}`;
    dedication.innerHTML = `<span> Dedicated: </span> ${temple.dedicated}`;
    area.innerHTML = `<span> Area: </span> ${temple.area} sq ft`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.teampleName} Temple`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(document.createElement('figure').appendChild(img));

    document.getElementById('templeCardList').appendChild(card);
  });
};

createTempleCards();

const filterTemplesByDate = (filter = 'ot', value = '1900') => {
  let filteredTemples = [];

  // Older than
  if (filter == 'ot')
    filteredTemples = temples.filter(
      (t) => new Date(t.dedicated) < new Date(value)
    );

  // Newer than
  if (filter == 'nt')
    filteredTemples = temples.filter(
      (t) => new Date(t.dedicated) > new Date(value)
    );

  document.getElementById('templeCardList').innerHTML = '';

  createTempleCards(filteredTemples);
};

const filterTemplesBySize = (filter = 'gt', value = '90000') => {
  let filteredTemples = [];

  // Greater than
  if (filter == 'gt') filteredTemples = temples.filter((t) => t.area > value);

  // Lesser than
  if (filter == 'lt') filteredTemples = temples.filter((t) => t.area < value);

  document.getElementById('templeCardList').innerHTML = '';

  createTempleCards(filteredTemples);
};
