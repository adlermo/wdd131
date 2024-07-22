// Array of product objects
const products = [
    { id: 'fc-1888', name: "flux capacitor", avgRating: 4.5 },
    { id: 'fc-2050', name: "power laces", avgRating: 4.7 },
    { id: 'fs-1987', name: "time circuits", avgRating: 3.5 },
    { id: 'ac-2000', name: "low voltage reactor", avgRating: 3.9 },
    { id: 'jj-1969', name: "warp equalizer", avgRating: 5.0 }
];

// Function to populate the select element with options
function populateProductSelect() {
    const select = document.getElementById('product');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        option.style.color = '#2b2826'
        select.appendChild(option);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateProductSelect);
