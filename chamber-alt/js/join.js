let contentTitle = document.querySelector('#content-title');
let contentPrice = document.querySelector('#content-price');
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
}

function changeContentBronze(){
    contentTitle.textContent = "Bronze";
    contentPrice.textContent = "$200";
}
function changeContentSilver(){
    contentTitle.textContent = "Silver";
    contentPrice.textContent = "$400";
}
function changeContentGold(){
    contentTitle.textContent = "Gold";
    contentPrice.textContent = "$1000";
}

