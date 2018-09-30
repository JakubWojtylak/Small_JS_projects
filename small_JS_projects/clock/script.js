
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function  setDat() {

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) *360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins/60)*360)+90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hrs = now.getHours();
    const hrsDegrees = ((hrs/24)*360)+90;
    hourHand.style.transform = `rotate(${hrsDegrees}deg)`;
}

setInterval(setDat, 1000);