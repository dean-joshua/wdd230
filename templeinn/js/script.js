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

function navFunction() {
    var x = document.querySelector("#my-nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}
