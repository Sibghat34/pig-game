'use strict';

// selecting elements

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let currentPlayer0 = document.querySelector('#current--0');
let currentPlayer1 = document.querySelector('#current--1');
let palyer0 = document.querySelector('.player--0');
let palyer1 = document.querySelector('.player--1');
let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

// starting condition

let playing , score , activePlayer , currentScore;

const inti = function(){
     playing = true;
     score = [0 , 0];
     activePlayer = 0;
     currentScore = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentPlayer0.textContent = 0;
    currentPlayer1.textContent = 0;

    diceEl.classList.add('hidden');
    palyer0.classList.remove('player--winner');
    palyer1.classList.remove('player--winner');
    palyer0.classList.add('player--active');
    palyer1.classList.remove('player--active');
}

inti();

diceEl.classList.add('hidden');


const playerSwitch = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    palyer0.classList.toggle('player--active');
    palyer1.classList.toggle('player--active');
}

// rolling functionality

btnRoll.addEventListener('click' , function(){
    if(playing){

    
    // generating a random no for dice

    let diceNo = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNo);

    // displaying the dice 

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNo}.png`;

    if(diceNo !== 1){
        //displaiyng the current score

        currentScore += diceNo;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
        // switching player

       playerSwitch();
    }
}
});

btnHold.addEventListener('click' , function(){
    if(playing){

    
    // adding current score to final score

    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    // checking if score is >= 100

    if(score[activePlayer] >=20){
        playing = false;
        diceEl.classList.add('hidden');
        console.log(score[activePlayer]);
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    else{
    // switching player

    playerSwitch();
    }
}
});

btnNew.addEventListener('click' , inti);