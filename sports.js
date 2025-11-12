// 1. Define the data for the sports cars
const sportsCars = [
    {
        name: "Ferrari F8 Tributo",
        link: "ferrari.html",
        imageSrc: "images/lance-asper-Wl6OeSGyOf4-unsplash.jpg",
        imageAlt: "Ferrari F8 Tributo"
    },
    {
        name: "Lamborghini Huracán EVO",
        link: "lamborghini.html",
        imageSrc: "images/krish-parmar-I70_S2OkWM4-unsplash.jpg",
        imageAlt: "Lamborghini Huracán EVO"
    },
    {
        name: "Porsche 911 Turbo S",
        link: "porsche.html",
        imageSrc: "images/willian-cittadin-HEJWQr_kS4Q-unsplash.jpg",
        imageAlt: "Porsche 911 Turbo S"
    },
    {
        name: "McLaren 720S",
        link: "mclaren.html",
        imageSrc: "images/cory-rogers-6l4CBNleEBE-unsplash.jpg",
        imageAlt: "McLaren 720S"
    },
    {
        name: "Aston Martin Vantage",
        link: "aston.html",
        imageSrc: "images/tyler-clemmensen-yxyIwykexwg-unsplash.jpg",
        imageAlt: "Aston Martin Vantage"
    }
];

// 2. Get the container element where the cards will go
const carContainer = document.querySelector('.car-container');

// 3. Loop through the car data and create the HTML elements for each car
sportsCars.forEach(car => {
    // Create the <a> element for the card link
    const cardLink = document.createElement('a');
    cardLink.href = car.link;
    cardLink.classList.add('car-card'); // Use the same class as in your HTML

    // Create the <img> element
    const image = document.createElement('img');
    image.src = car.imageSrc;
    image.alt = car.imageAlt;

    // Create the <h3> element for the car name
    const heading = document.createElement('h3');
    heading.textContent = car.name;

    // Append the image and heading to the <a> link
    cardLink.appendChild(image);
    cardLink.appendChild(heading);

    // Append the completed card link to the main container
    carContainer.appendChild(cardLink);
});