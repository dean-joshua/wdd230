const API = "4f3d1224dc503feb69acf2a78a01dc4f";
const lat = "39.011478";
const lon = "-77.111957";
const arr = []

const base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API}&units=imperial`;

fetch(base)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.table(data);
        const current = data.current;
        console.table(current);
        let currdate = new Date(current.dt * 1000);
        document.querySelector('#current-weather-date').textContent = currdate.toDateString();
        document.querySelector('.current-temp').textContent = `${current.temp.toFixed(0)} °F`;
        document.querySelector('.current-temp-humidity').textContent = `Humidity: ${current.humidity.toFixed(0)}%`;
        document.querySelector('.current-temp-desc').textContent = `${current.weather[0].description}`;
        document.querySelector('.current-temp-icon').src = `https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
        
        const today = data.daily[0];
        console.table(today);
        let todayDate = new Date(today.dt * 1000);
        document.querySelector('.day-1-date').textContent = todayDate.toDateString();
        document.querySelector('.day-1-temp').textContent = `${today.temp.day.toFixed(0)} °F`;
        document.querySelector('.day-1-desc').textContent = `${today.weather[0].description}`;
        document.querySelector('.day-1-weather').src = `https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png`;

        const tomorrow = data.daily[1];
        console.table(tomorrow);
        let tomorrowdate = new Date(tomorrow.dt * 1000);
        document.querySelector('.day-2-date').textContent = tomorrowdate.toDateString();
        document.querySelector('.day-2-temp').textContent = `${tomorrow.temp.day.toFixed(0)} °F`;
        document.querySelector('.day-2-desc').textContent = `${tomorrow.weather[0].description}`;
        document.querySelector('.day-2-weather').src = `https://openweathermap.org/img/wn/${tomorrow.weather[0].icon}@4x.png`;
        

        const thirdDay = data.daily[2];
        console.table(thirdDay);
        let thirddate = new Date(thirdDay.dt * 1000);
        document.querySelector('.day-3-date').textContent = thirddate.toDateString();
        document.querySelector('.day-3-temp').textContent = `${thirdDay.temp.day.toFixed(0)} °F`;
        document.querySelector('.day-3-desc').textContent = `${thirdDay.weather[0].description}`;
        document.querySelector('.day-3-weather').src = `https://openweathermap.org/img/wn/${thirdDay.weather[0].icon}@4x.png`;

        const alertArr = data.alerts;
        if(alertArr){
            document.querySelector('.alert').style.display = "block";
            document.querySelector('.alert-text').textContent = `${alertArr[0].event}: ${alertArr[0].description}`;
            console.log(alertArr);
        }
        else{
            document.querySelector('.alert').style.display = "none";
        }

    });