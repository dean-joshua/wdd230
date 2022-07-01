// Openweathermap API. Do not share it publicly.
const api = '4f3d1224dc503feb69acf2a78a01dc4f';

const iconImg = document.querySelector('.temp-icon');
const tempC = document.querySelector('.temp');
const desc = document.querySelector('.description');
const windspeed = document.querySelector('.wind-speed-span');
const windc = document.querySelector('.wind-chill-span');


const base = `https://api.openweathermap.org/data/2.5/weather?q=nassau,bs&appid=${api}&units=metric`;

// Using fetch to get data
fetch(base)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const {
            temp
        } = data.main;
        //   const place = data.name;
        const {
            speed
        } = data.wind;
        const {
            description,
            icon
        } = data.weather[0];
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
        const fahrenheit = (temp * 9) / 5 + 32;
        const windSpeedKmh = speed * 3.6;
        const windspeedMph = speed * 2.237;
        const windChill = 35.74 + 0.6215 * fahrenheit - 35.75 * windspeedMph ** 0.16 + 0.4275 * fahrenheit * windspeedMph ** 0.16;


        // Interacting with DOM to show data
        iconImg.src = iconUrl;
        windspeed.textContent = `${windSpeedKmh.toFixed(0)} km/h`;
        desc.textContent = `${description}`;
        tempC.textContent = `${temp.toFixed(0)} °C`;
        // windc.textContent = `${temp.toFixed(2)}`;

        if (fahrenheit <= 50 && windspeedMph > 3) {
            windc.textContent = `${windChill.toFixed(2)} °F`;
        } else {
            windc.textContent = "N/A";
        }
    });
