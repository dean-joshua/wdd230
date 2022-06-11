let contentTitle = document.querySelector('#content-title');
let contentPrice = document.querySelector('#content-price');

document.querySelector('.button1').addEventListener("click",changeContentNonProf)
document.querySelector('.button2').addEventListener("click",changeContentBronze)
document.querySelector('.button3').addEventListener("click",changeContentSilver)
document.querySelector('.button4').addEventListener("click",changeContentGold)

function changeContentNonProf(){
    contentTitle.textContent = "Non-Profit";
    contentPrice.textContent = "Free";
}

function changeContentBronze(){
    contentTitle.textContent = "Bronze";
    contentPrice.textContent = "$10/month";
}
function changeContentSilver(){
    contentTitle.textContent = "Silver";
    contentPrice.textContent = "$30/month";
}
function changeContentGold(){
    contentTitle.textContent = "Gold";
    contentPrice.textContent = "$50/month";
}

