let lines = localStorage.getItem('lines')

if (lines != null || lines.length == 0) {
    lines = [
        { id: "Alpha", address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.4791080620844!2d-46.735045855210686!3d-23.639977425443018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5142e22e24ab%3A0x9fff96ed2e1bbeb9!2sAv.%20Giovanni%20Gronchi%2C%206701!5e0!3m2!1spt-BR!2sbr!4v1721701026697!5m2!1spt-BR!2sbr" },
        { id: "Beta", address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.424364624706!2d-46.73489132468403!3d-23.642749857115465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5169b09daf09%3A0xaa529b190fe279c!2sAv.%20Alberto%20Augusto%20Alves%2C%2050!5e0!3m2!1spt-BR!2sbr!4v1721700956992!5m2!1spt-BR!2sbr" },
        { id: "Gamma", address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.152566834691!2d-46.736196014939814!3d-23.634706646333022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51453e115595%3A0x27935caf507bc4bd!2sAv.%20Giovanni%20Gronchi%2C%206195!5e0!3m2!1spt-BR!2sbr!4v1721701054282!5m2!1spt-BR!2sbr" },
        { id: "Delta", address: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2584.736864655076!2d-46.735672350844375!3d-23.62691945583739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce514ea07cfdb9%3A0x2cbea9895a09db7a!2sAv.%20Giovanni%20Gronchi%2C%205351!5e0!3m2!1spt-BR!2sbr!4v1721701095388!5m2!1spt-BR!2sbr" }
    ]
}

localStorage.setItem('lines', JSON.stringify(lines))


// Function to populate the existing lines
const populateLines = () => {
    const ul = document.getElementById('lineList');

    const addButton = ul.firstElementChild;
    ul.innerHTML = '';

    lines.forEach(line => {
        const a = document.createElement('a');
        const li = document.createElement('li');

        a.innerText = `Line ${line.id}`;
        a.setAttribute('href', line.address);

        a.addEventListener('click', toggleActiveClass)

        li.appendChild(a);
        ul.appendChild(li);
    });

    ul.appendChild(addButton);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateLines);

const changeIframeSrcByLine = (line) => {
    const lineAddress = lines.filter(l => l.id == line.split(' ')[1])

    const iframe = document.getElementById('busStopAddress');
    iframe.setAttribute('src', lineAddress[0].address);
}

// Function makes the effect of lines list button extending to the map
const toggleActiveClass = (e) => {
    e.preventDefault();

    const tagA = e.target;
    const oldTagA = document.getElementsByClassName('active');
    if (oldTagA.length > 0) oldTagA[0].removeAttribute('class');
    tagA.setAttribute('class', 'active');

    changeIframeSrcByLine(oldTagA[0].innerText)
}