

'use strict';

const wrapper = document.querySelector('.wrapper');
const myCards = document.querySelectorAll('.ancients__card');
const difficulties = document.querySelector('.difficulties');
const levels = document.querySelectorAll('.difficulties__item');
const deckTitle = document.querySelector('.deck-title');
const stages = document.querySelector('.stages');
const deck = document.querySelector('.deck');
const sortCard = document.querySelector('.sort-card');
const firstStageTitle = document.querySelector('.first-stage');
const secondStageTitle = document.querySelector('.second-stage');
const thirdStageTitle = document.querySelector('.third-stage');
const firstGreenDot = document.getElementById('first-green');
const firstBlueDot = document.getElementById('first-blue');
const firstBrownDot = document.getElementById('first-red');
const secondGreenDot = document.getElementById('second-green');
const secondBlueDot = document.getElementById('second-blue');
const secondBrownDot = document.getElementById('second-red');
const thirdGreenDot = document.getElementById('third-green');
const thirdBlueDot = document.getElementById('third-blue');
const thirdBrownDot = document.getElementById('third-red');
const downBox = document.querySelector('.down-box');
const haventCard = document.querySelector('.havent-card')


/

// выделение карты по клику.
myCards[0].addEventListener('click' , ()=>{
    
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[0].classList.add('chosenCard');
});

myCards[1].addEventListener('click' ,()=>{
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[1].classList.add('chosenCard');
});

myCards[2].addEventListener('click' , ()=>{
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[2].classList.add('chosenCard');
});

myCards[3].addEventListener('click' , ()=>{
    for(let i = 0; i < myCards.length; i++){
        if(myCards[i].classList.contains('chosenCard')){
            myCards[i].classList.remove('chosenCard');
        } 
    }
    myCards[3].classList.add('chosenCard');
})

// появление выбора кнопок сложности
function getDifficulties() {
    difficulties.style.opacity = '1';
    difficulties.style.visibility = 'visible';
}
// Клік по картках картці
myCards[0].addEventListener('click',getDifficulties);
myCards[1].addEventListener('click',getDifficulties);
myCards[2].addEventListener('click',getDifficulties);
myCards[3].addEventListener('click',getDifficulties);

// выделение выбранного уровня
function chosenLevel(){
    levels[2].style.backgroundColor = 'rgba(109, 106, 247, 0.3)';
}

// Зміна виклику функції в залежності від обраної картки
let currentCarrd = 0;
myCards[0].addEventListener('click', ()=>{
    if(currentCarrd !== 1){
        downBox.style.opacity = '0';
        sortCard.style.transform = `translateX(512px)`;
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        haventCard.textContent =''
    }
    currentCarrd = 1;

})
myCards[1].addEventListener('click', ()=>{
    if(currentCarrd !== 2){
        sortCard.style.transform = `translateX(512px)`;
        downBox.style.opacity = '0';
        deckTitle.style.opacity ='0';
        deckTitle.style.visibility ='hidden';
        haventCard.textContent =''

    }
    currentCarrd = 2;
    
})
myCards[2].addEventListener('click', ()=>{
    currentCarrd = 3;
})
myCards[3].addEventListener('click', ()=>{
    currentCarrd = 4;
})

// Клік по третьому рівню складності
levels[2].addEventListener('click',()=>{
    chosenLevel();
});

// Зміна стилів для непрацюючих рівнів
//for (let i = 0; i < levels.length; i++){
    //levels[i].style.textDecoration = `line-through`;
    //levels[i].style.opacity = `0.5`;
    //levels[2].style.textDecoration = `none`;
    //levels[2].style.opacity = `1`;
//}

// кнопка замешать колоду
function createDeck(){
    deckTitle.style.opacity = '1';
    deckTitle.style.visibility = 'visible';
}

levels[2].addEventListener('click' , createDeck);

// Вызов кнопки колоды и самой колоды
function getStages(){
    stages.style.opacity = '1';
    stages.style.visibility = 'visible';
    deck.style.opacity = '1';
    deck.style.visibility = 'visible';
}
deckTitle.addEventListener('click' , getStages);
deckTitle.addEventListener('click' , () =>{
    downBox.style.opacity = '1';
    sortCard.style.transform = `translateX(512px)`
    if(currentCarrd == 1) aza()
    if(currentCarrd == 2) cthuhlu()
})


