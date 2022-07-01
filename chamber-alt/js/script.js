// Hamburger menu display
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove('responsive')
};

// Last modification display in footer
document.querySelector("#lastmod").textContent = document.lastModified;
date = new Date();
document.querySelector("#copyDate").textContent = date.getFullYear();

const datefield = document.querySelector(".header-date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(now);
datefield.textContent = fulldate;

// Join us banner
if(now.getDay() == 1 || now.getDay() == 5){
    const message = document.querySelector('.message');
    message.style.display = "block";
}

// Lazy loading images
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 1px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Last visit date display
let lastVisitDate;
const current = Date.now();

if (window.localStorage.getItem('last-visit-date')) {
    lastVisitDate = window.localStorage.getItem('last-visit-date');
} else {
    lastVisitDate = current;
}

window.localStorage.setItem('last-visit-date', current);

const secondsSinceLastVisit = Math.floor((current - lastVisitDate) / 1000); // number of milliseconds in a second
const daysSinceLastVisit = Math.floor(secondsSinceLastVisit / 86400); //Number of seconds in a day
document.querySelector('#days-ago').textContent = daysSinceLastVisit;