const frontCard = document.querySelector(".card-front");
const card = document.querySelector(".card");
const cardBack = document.querySelector(".card-back");
const cardAudio = new Audio('songs/Fire.mp3');
window.addEventListener('mouseover', () => {
    frontCard.style.backgroundImage = "url('images/moneyheist.jpg')";
    frontCard.style.border="5px inset green"
});

window.addEventListener('mouseleave', () => {
    frontCard.style.backgroundImage = "";
    frontCard.style.border="none"
});

card.addEventListener('mouseover', () => {
    cardBack.style.backgroundImage = "url('images/music.png')";
});

card.addEventListener('click', () => {
    cardBack.style.backgroundImage = "url('images/music.png')";
    cardAudio.play();
});

card.addEventListener('mouseout', () => {
    cardBack.style.backgroundImage = ""; 
    cardAudio.pause(); 
    cardAudio.currentTime = 0; 
});

card.addEventListener('mouseleave', () => {
    frontCard.style.backgroundImage = "";
});