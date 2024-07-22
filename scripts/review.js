// Function to update review counter in localStorage
function updateReviewCounter() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Display the counter
    const counterElement = document.getElementById('reviewCounter');
    if (counterElement) {
        counterElement.textContent = `Total reviews completed: ${reviewCount}`;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateReviewCounter);