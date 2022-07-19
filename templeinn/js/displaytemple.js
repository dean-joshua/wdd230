const requestURL = '../json/temple.json';
const cards = document.querySelector('.cards-grid');
const display = document.querySelector("#main-div");
let count = 0;
let liked = [false, false, false, false, false, false];

// window.localStorage.setItem('liked-arr', liked);
// liked = window.localStorage.getItem('liked-arr', liked);
// console.log(liked);
// if (window.localStorage.getItem('liked-arr')) {
//     let newArr = window.localStorage.getItem('liked-arr');
//     liked = newArr;
//     console.log(newArr);
// } else {
//     newArr = [false, false, false, false, false, false];
//     liked = newArr;
// }




// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

function displayTemple(temple) {
    // Create elements to add to the document

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let history = document.createElement('p');
    let closures = document.createElement('p');
    let like = document.createElement('button');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${temple.name}`;
    address.textContent = `Located on: ${temple.address}`;
    phone.textContent = `Contact: ${temple.phone}`;
    history.textContent = `${temple.history}`;
    closures.textContent = `Will be closed: ${temple.closures}`
    like.classList.add(`like-button-${count}`);

    if (liked[count] == true) {
        like.textContent = "Liked ♥";
    } else {
        like.textContent = "Like 🖒";
    }

    like.addEventListener('click', () => {
        if (like.className === "like-button-0") {
            if (like.textContent === "Like 🖒") {
                like.textContent = "Liked ♥";
                liked[0] = true;
            } else {
                like.textContent = "Like 🖒";
                liked[0] = false;
            }
            window.localStorage.setItem('liked-arr', liked);
        } else if (like.className === "like-button-1") {
            if (like.textContent === "Like 🖒") {
                like.textContent = "Liked ♥";
                liked[1] = true;
            } else {
                like.textContent = "Like 🖒";
                liked[1] = false;
            }
            window.localStorage.setItem('liked-arr', liked);
        } else if (like.className === "like-button-2") {
            if (like.textContent === "Like 🖒") {
                like.textContent = "Liked ♥";
                liked[2] = true;
            } else {
                like.textContent = "Like 🖒";
                liked[2] = false;
            }
            window.localStorage.setItem('liked-arr', liked);
        } else if (like.className === "like-button-3") {
            if (like.textContent === "Like 🖒") {
                like.textContent = "Liked ♥";
                liked[3] = true;
            } else {
                like.textContent = "Like 🖒";
                liked[3] = false;
            }
            window.localStorage.setItem('liked-arr', liked);
        } else if (like.className === "like-button-4") {
            if (like.textContent === "Like 🖒") {
                like.textContent = "Liked ♥";
                liked[4] = true;
            } else {
                like.textContent = "Like 🖒";
                liked[4] = false;
            }
            window.localStorage.setItem('liked-arr', liked);
        } else if (like.className === "like-button-5") {
            if (like.textContent === "Like 🖒") {
                like.textContent = "Liked ♥";
                liked[5] = true;
            } else {
                like.textContent = "Like 🖒";
                liked[15] = false;
            }
            window.localStorage.setItem('liked-arr', liked);
        }
    });

    count += 1;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `../images/${temple.image}`);
    logo.setAttribute('alt', `photo of ${temple.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '300')
    logo.setAttribute('height', '200')

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(history);
    card.appendChild(closures);
    card.appendChild(like);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards-grid').appendChild(card);
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        temples.forEach(displayTemple);

    });