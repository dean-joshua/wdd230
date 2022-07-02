let contentTitle = document.querySelector('#content-title');
let contentPrice = document.querySelector('#content-price');
let contentBenefits = document.querySelector('#join-benefits')
let hiddenDate = new Date().toLocaleString();
let hiddenValue = document.querySelector('.hiddenVal');
hiddenValue.setAttribute('value', hiddenDate);


document.querySelector('.button1').addEventListener("click",changeContentNonProf)
document.querySelector('.button2').addEventListener("click",changeContentBronze)
document.querySelector('.button3').addEventListener("click",changeContentSilver)
document.querySelector('.button4').addEventListener("click",changeContentGold)

function changeContentNonProf(){
    contentTitle.textContent = "Non-Profit";
    contentPrice.textContent = "$100";
    contentBenefits.textContent = "Spotlight on homepage, Event updates on homepage, Directory listing";
}

function changeContentBronze(){
    contentTitle.textContent = "Bronze";
    contentPrice.textContent = "$200";
    contentBenefits.textContent = "Event updates on homepage, Directory listing, Access to business training seminar twice a year";
}
function changeContentSilver(){
    contentTitle.textContent = "Silver";
    contentPrice.textContent = "$400";
    contentBenefits.textContent = "Event updates on homepage, Directory listing, Access to business training seminar every quarter, 26 yearly Luncheon tickets";
}
function changeContentGold(){
    contentTitle.textContent = "Gold";
    contentPrice.textContent = "$1000";
    contentBenefits.textContent = "Spotlight on homepage, Event updates on homepage, Directory listing, Access to business training seminar on request, 52 yearly Luncheon tickets";

}

