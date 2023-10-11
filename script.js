document.addEventListener('DOMContentLoaded', () => {
    fetchCats();
});

const fetchCats = () => {
    fetch('http://localhost:3000/cats')
    .then((response) => response.json())
    .then((data) => renderCats(data));
};

const renderCats = (cats) => {
    cats.forEach(cat => {
        const catContainer = document.getElementById('cat-container');
        const catButton = document.getElementById('add-cat-button');

        catButton.addEventListener('click', () => {
            window.location.href = 'add-cat.html';
        });

        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2');
        name.textContent = cat.name;

        const breed = document.createElement('p');
        breed.textContent = `Breed: ${cat.breed}`;

        const age = document.createElement('p');
        age.textContent = `Age: ${cat.age}`;

        const color = document.createElement('p');
        color.textContent = `Color: ${cat.color}`;

        const image = document.createElement('img');
        image.src = cat.image;
        image.alt = `${cat.color} ${cat.breed}`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(breed);
        card.appendChild(age);
        card.appendChild(color);

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });

        catContainer.appendChild(card);
    });
};
