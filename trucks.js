
const trucks = [
    {
        name: "Ford F-150 Raptor",
        imgSrc: "images/vadym-kudriavtsev-yvDApyRSNso-unsplash.jpg",
        altText: "Ford F-150 Raptor",
        link: "ford-f150.html"
    },
    {
        name: "Ram 1500 TRX",
        imgSrc: "images/stevosdisposable-6DnSGv4VZlo-unsplash.jpg",
        altText: "Ram 1500 TRX",
        link: "ram.html"
    },
    {
        name: "Chevrolet Silverado",
        imgSrc: "images/jeff-james-l5OokgbjqCQ-unsplash.jpg",
        altText: "Chevrolet Silverado",
        link: "chevy.html"
    },
    {
        name: "Toyota Tundra",
        imgSrc: "images/2022_Toyota_Tundra_Limited_05.jpg",
        altText: "Toyota Tundra",
        link: "toyota.html"
    },
    {
        name: "GMC Sierra AT4",
        imgSrc: "images/GMC.png",
        altText: "GMC Sierra AT4",
        link: "gmc.html"
    }
];


const carContainer = document.getElementById('car-container');


trucks.forEach(truck => {
    
    const card = document.createElement('a');
    card.href = truck.link;
    card.classList.add('car-card');

  
    const img = document.createElement('img');
    img.src = truck.imgSrc;
    img.alt = truck.altText;

 
    const heading = document.createElement('h3');
    heading.textContent = truck.name;

    card.appendChild(img);
    card.appendChild(heading);
    carContainer.appendChild(card);
});