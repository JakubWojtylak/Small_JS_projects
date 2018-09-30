

function playSound(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // stop the function from running all together

    console.log(audio);
    audio.currentTime = 0; // rewind o the start
    audio.play();
    console.log(key);
    key.classList.add('playing');






};

function removeTransition(e)
{
if(e.propertyName !=='transform') return; // skip if its not the transtition
console.log(e.propertyName);
this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));


window.addEventListener('keydown',playSound);