const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')


hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

document.querySelector("#lastmod").textContent = document.lastModified;
date = new Date();
document.querySelector("#copyDate").textContent = date.getFullYear();

const datefield = document.querySelector(".header-date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
