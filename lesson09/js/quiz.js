const requestURL = './data.json';
const div = document.querySelector('.info');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const info = jsonObject['info'];
        console.log(info['firstName']);
        div.textContent = `Hi I am ${info["firstName"]} - ${info.lastName} and I am ${info.age} years old.`
        
    });