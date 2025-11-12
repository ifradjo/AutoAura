
const suvs = [
    {
        name: "Jeep Grand Cherokee",
        imgSrc: "images/Jeep-01.jpg",
        altText: "Jeep Grand Cherokee",
        link: "jeep.html"
    },
    {
        name: "Toyota 4Runner",
        imgSrc: "images/4Runner.PNG",
        altText: "Toyota 4Runner",
        link: "4runner.html"
    },
    {
        name: "Chevrolet Tahoe",
        imgSrc: "images/tahoe-01.jpeg",
        altText: "Chevrolet Tahoe",
        link: "tahoe.html"
    },
    {
        name: "Toyota Highlander",
        imgSrc: "images/highlander-01.jpeg",
        altText: "Toyota Highlander",
        link: "highlander.html"
    },
    {
        name: "Ford Bronco",
        imgSrc: "images/bronco-01.jpeg",
        altText: "Ford Bronco",
        link: "bronco.html"
    }
];


const carContainer = document.getElementById('car-container');


suvs.forEach(car => {
    
    const card = document.createElement('a');
    card.href = car.link;
    card.classList.add('car-card');

    const img = document.createElement('img');
    img.src = car.imgSrc;
    img.alt = car.altText;

    const heading = document.createElement('h3');
    heading.textContent = car.name;

    card.appendChild(img);
    card.appendChild(heading);
    carContainer.appendChild(card);
});