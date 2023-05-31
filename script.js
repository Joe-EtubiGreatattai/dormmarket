// Select necessary elements
const icon = document.querySelector('.icon');
const dropdown = document.querySelector('.dropdown');
const grid = document.querySelector('.grid');

// Toggle dropdown on icon click
icon.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Generate product cards
const products = [
    // Array of product data (image URL, name, price)
    [('', 'shoe', '200')]
];

products.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
    grid.appendChild(card);
});