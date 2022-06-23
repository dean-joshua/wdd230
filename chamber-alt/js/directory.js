const requestURL = './json/data.json';
const cards = document.querySelector('.cards-grid');
const gridbutton = document.querySelector("#discovery-grid-btn");
const listbutton = document.querySelector("#discovery-list-btn");
const display = document.querySelector("#main-div");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards-grid");
	display.classList.remove("cards-list");
});

listbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("cards-list");
	display.classList.remove("cards-grid");
});

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let link = document.createElement('a');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;
    address.textContent = `Located on: ${business.address}`;
    phone.textContent = `Contact: ${business.phone}`;
    link.textContent = `Visit Site`;
    link.setAttribute('href', business.weblink);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo for ${business.name}`);
    logo.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(link);
    
    
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards-grid').appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        businesses.forEach(displayBusiness);
    });