const requestURL = './json/data.json';
const spotArray = [];
const permutArray = [];

function createRandoms(length, permutArray){
    for(let i = 0; i < length; i++)
        permutArray.push(i);

    permutArray.sort(function(a, b){return 0.5 - Math.random()});
}

function filterSpotlight(business){

    if ( business.memberlevel == "Gold" || business.memberlevel == "Non-Profit")
    {
        spotArray.push(business);
    }
        
}

function setSpot1(spotArray,permutArray){
    const h3 = document.querySelector('#spot-1-h3');
    const img = document.querySelector('#spot-1-img');
    const location = document.querySelector('#spot-1-location');
    const email = document.querySelector('#spot-1-email');
    const phone = document.querySelector('#spot-1-phone');

    h3.textContent = `${spotArray[permutArray[0]].name}`;
    location.textContent = `Located on: ${spotArray[permutArray[0]].address}`;
    email.textContent = `Email: ${spotArray[permutArray[0]].email}`;
    phone.textContent = `Phone: ${spotArray[permutArray[0]].phone}`;
    img.setAttribute('src', spotArray[permutArray[0]].logo)
    img.setAttribute('alt', `Logo for ${spotArray[permutArray[0]].name}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '100')
    img.setAttribute('height', '100')

}

function setSpot2(spotArray,permutArray){
    const h3 = document.querySelector('#spot-2-h3');
    const img = document.querySelector('#spot-2-img');
    const location = document.querySelector('#spot-2-location');
    const email = document.querySelector('#spot-2-email');
    const phone = document.querySelector('#spot-2-phone');

    h3.textContent = `${spotArray[permutArray[1]].name}`;
    location.textContent = `Located on: ${spotArray[permutArray[1]].address}`;
    email.textContent = `Email: ${spotArray[permutArray[1]].email}`;
    phone.textContent = `Phone: ${spotArray[permutArray[1]].phone}`;
    img.setAttribute('src', spotArray[permutArray[1]].logo)
    img.setAttribute('alt', `Logo for ${spotArray[permutArray[1]].name}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '100')
    img.setAttribute('height', '100')
}

function setSpot3(spotArray, permutArray){
    const h3 = document.querySelector('#spot-3-h3');
    const img = document.querySelector('#spot-3-img');
    const location = document.querySelector('#spot-3-location');
    const email = document.querySelector('#spot-3-email');
    const phone = document.querySelector('#spot-3-phone');

    h3.textContent = `${spotArray[permutArray[2]].name}`;
    location.textContent = ` Located on: ${spotArray[permutArray[2]].address}`;
    email.textContent = `Email: ${spotArray[permutArray[2]].email}`;
    phone.textContent = `Phone: ${spotArray[permutArray[2]].phone}`;
    img.setAttribute('src', spotArray[permutArray[2]].logo)
    img.setAttribute('alt', `Logo for ${spotArray[permutArray[2]].name}`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '100')
    img.setAttribute('height', '100')
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const businesses = jsonObject['businesses'];
        businesses.forEach(filterSpotlight);
        //console.table(spotArray);
        //console.log(spotArray[0].address)
        let length = spotArray.length;
        createRandoms(length, permutArray);
        //console.log(`This is ${permutArray}`);
        setSpot1(spotArray, permutArray);
        setSpot2(spotArray, permutArray);
        setSpot3(spotArray, permutArray);
        //console.log(length);
        
    });