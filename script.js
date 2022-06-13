// Variables
const header = document.querySelector('#header');
const nav = document.querySelector('#nav');
const citiesData = 'navigation.json';
const toggle = document.querySelector('.toggle');

// Empty cities array to hold data
let citiesArray = [];

// Function to fetch the data from the json file
function fetchData(url) {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        // Create the nav links from the json data
        citiesArray = data.cities;
        citiesArray.forEach(item => {
            nav.innerHTML += `<a href='#' class='nav-item city'>${item.label}</a>`;
        });
    })
    .catch((err) => {
        console.log(`Error fetching data : ${err}`);
        document.querySelector('#nav').innerHTML = 'Error Loading Data';
    })
}

fetchData(citiesData);

// Handeling the active state of the nav items
nav.onclick = e => {
    var element = e.target;
    if (element.tagName != 'A') return;
    if (nav.querySelector('.active') !== null) {
        nav.querySelector('.active').classList.remove('active');
    }
    element.classList.add('active');
}