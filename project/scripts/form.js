const saveBusLine = (name, url) => {
    let lines = JSON.parse(localStorage.getItem('lines'));

    if (lines == null || lines.length == 0) lines = []

    lines.push({ id: name, address: url });

    localStorage.setItem('lines', JSON.stringify(lines));
}


document.addEventListener('submit', (e) => {
    alert('New stop request successfully sent!');

    const lineId = e.target.querySelector('#lineId');
    const address = e.target.querySelector('#address');

    saveBusLine(lineId.value, address.value);
})