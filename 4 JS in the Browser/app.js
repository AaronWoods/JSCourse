/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

//document.querySelector('#current-'+ activePlayer).textContent = dice; //CONTEXT
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //DOM ELEMENT CHANGE

/*
var x = document.querySelector('#score-0').textContent;
console.log(x);

//CALLBACK FUNCTION
document.querySelector('.btn-roll').addEventListener('click', btn);
//ANON FUNCTION
document.querySelector('.btn-roll').addEventListener('click', function(){

//3 CHALLENGES
- two 6 rolls in a row result in player losing entire score
- Input field : Set the winning score (CAN read that value with .value property in JS)
- Add another dice ( if either lands on 1, current score lost - css and html changes needed here)
*/

var scores, roundScore, activePlayer, winningScore;

document.querySelector('.btn-roll').addEventListener('click', function(){
    var currentScoreDOM = document.querySelector('#current-'+ activePlayer);
    var playerScoreDOM = document.querySelector('#score-'+ activePlayer);
    var diceDOM = document.querySelector('#dice1');
    var dice2DOM = document.querySelector('#dice2');
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //dice=6;
    diceDOM.style.display = 'block';
    dice2DOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    dice2DOM.src = 'dice-' + dice2 + '.png';
 
    if(dice === 6 && dice2 === 6){
        scores[activePlayer] = 0;
        roundScore = 0;
        playerScoreDOM.textContent = roundScore;
        currentScoreDOM.textContent = roundScore;
        switchPlayers();
    }
    else if(dice !== 1 && dice2 !== 1){
        roundScore += dice;
        roundScore += dice2;
        currentScoreDOM.textContent = roundScore;
    }
    else{
        roundScore = 0;
        currentScoreDOM.textContent = roundScore;
        switchPlayers();
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    var playerScoreDOM = document.querySelector('#score-' + activePlayer);
    var currentScoreDOM = document.querySelector('#current-' + activePlayer);

    scores[activePlayer] += roundScore;

    roundScore = 0;
    playerScoreDOM.textContent = scores[activePlayer];
    currentScoreDOM.textContent = 0;

    if(scores[activePlayer] >= winningScore){
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
    }else{
        prevRoll = 0;
        switchPlayers();
    } 
    
});

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-change-win').addEventListener('click', function(){
    var val = document.querySelector('#winning-condition').value;
    val = parseInt(val);
    if(Number.isInteger(val)){
        winningScore = val;
        console.log("Score changed to:" + val);
    }
    else console.log("invalid val:"+ val);
    
    
})

function init(){
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').className = 'player-0-panel active';
    document.querySelector('.player-1-panel').className = 'player-1-panel';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    activePlayer = 0;

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winningScore = 100;

}

function switchPlayers(){
    var playerActive = document.querySelector('.player-'+ activePlayer +'-panel');
    playerActive.classList.remove("active");
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    var playerActive2 = document.querySelector('.player-'+ activePlayer +'-panel');
   playerActive2.classList.add('active');
}




