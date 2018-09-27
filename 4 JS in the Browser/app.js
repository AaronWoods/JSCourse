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
*/

var scores, roundScore, activePlayer;

document.querySelector('.btn-roll').addEventListener('click', function(){
    var currentScoreDOM = document.querySelector('#current-'+ activePlayer);
    var diceDOM = document.querySelector('.dice');
    var dice = Math.floor(Math.random() * 6) + 1;
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if(dice !== 1){
        roundScore += dice;
        currentScoreDOM.textContent = roundScore;
    }
    else{
        roundScore = 0;
        currentScoreDOM.textContent = roundScore;
        document.querySelector('.dice').style.display = 'none';
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

    if(scores[activePlayer] > 99){
        document.querySelector('.btn-roll').style.display = 'none';
    }else switchPlayers();
    
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').className = 'player-0-panel active';
    document.querySelector('.player-1-panel').className = 'player-1-panel';
    activePlayer = 0;

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
}

function switchPlayers(){
    var playerActive = document.querySelector('.player-'+ activePlayer +'-panel');
    playerActive.classList.remove("active");
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    var playerActive2 = document.querySelector('.player-'+ activePlayer +'-panel');
   playerActive2.classList.add('active');
}




