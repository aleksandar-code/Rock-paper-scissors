let rounds = 0;
let stopit = document.getElementById('stop');

let finished = 1;

let playerScore = 0;
let computerScore = 0;

let body = document.querySelector("body");

body.addEventListener('mousemove', function (e) {
    
        console.log(e);
        document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    
})

function computerPlay() {
    computerPlayed = Math.floor(Math.random()*3) + 1;
    
    if (computerPlayed === 1) {
        return "Rock";
    }
    else if (computerPlayed === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

    
}
function playRound(playerSelection, computerSelection) {

    let player = playerSelection;
    let computer = computerSelection;

        if (computer === player) {
            return "tie";
        }
     
         else if (player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper" || player === "Rock" && computer === "Scissors") {
            return "player";
        }
        else {
            
            return "computer";
        }
     
}
function dothis (e){
    let score;
    let player;
    let computer;
        
        if (rounds > 4) {
            
        while (stopit.firstChild) {
            stopit.removeChild(stopit.firstChild);
          }
          
          gameResult(true);
            finished = 1;
            rounds = 0;
            computerScore = 0;
            playerScore = 0;
         }
        else if (e.target == rock){
            player = "Rock";
            computer = computerPlay();
            score = playRound(player, computer );
            console.log(player);
            console.log(computer);
            console.log(score);
            roundResult(score, player, computer);
            ++rounds;
            
        }
        else if (e.target == paper) {
            player = "Paper";
            computer = computerPlay();
            score = playRound(player, computer);
            console.log(player);
            console.log(computer);
            console.log(score);
            roundResult(score, player, computer);

            ++rounds;

        }
         else if (e.target == scissors) {
            player = "Scissors";
            computer = computerPlay();
            score = playRound(player, computer);
            console.log(player);
            console.log(computer);
            console.log(score);
            roundResult(score, player, computer);
            ++rounds;
            
        }
        else ++rounds;


        
        gameResult(score);
        if (rounds > 4) {
            
            while (stopit.firstChild) {
                stopit.removeChild(stopit.firstChild);
              }
              finished = 1;
              rounds = 0;
              computerScore = 0;
              playerScore = 0;
            
            
            }
       
        

}

let gameStart = document.getElementById("start");
gameStart.addEventListener("click", startThegame);

function roundResult (score, p, c) {
    
    

    switch(score) {
        case "player":
            newDiv.textContent = "You win!" +  ` ${p}` + " beats " + `${c}\n\n\n`;
        break;

        case "computer":
            newDiv.textContent = "You lost!" +  ` ${c}` + " beats " + `${p}\n\n\n`;
        break;
            
        default: 
            newDiv.textContent = `${p}` + " and " + `${c}` + " Make's a tie \n\n\n";
        break;

        
    }
}




function startThegame(e) {
        if (e && finished === 1) {
    let rock = document.createElement('img');
    let paper = document.createElement('img');
    let scissors = document.createElement('img');
        
    rock.setAttribute('id','rock');
    paper.setAttribute('id','paper');
    scissors.setAttribute('id','scissors');

    rock.src="imgs/Rock.jpg";
    paper.src="imgs/Paper.jpg";
    scissors.src="imgs/Scissors.jpg";

    // rock.textContent = "Rock";
    // paper.textContent = "Paper";
    // scissors.textContent = "Scissors";


    stopit.appendChild(rock);
    stopit.appendChild(paper);
    stopit.appendChild(scissors);


    rock.addEventListener('click', dothis);
    paper.addEventListener('click', dothis);
    scissors.addEventListener('click', dothis);

    finished = 0;

}

}

let newDiv = document.querySelector('.text');






function gameResult(score) {
        
        

        
            switch (score) {
            case "player":
                playerScore++;
            break;

            case "computer":
                
                computerScore++;
            break;

            


    }
if (rounds === 5) {
    if (playerScore > computerScore) {
        newDiv.textContent = "You won the game \n\n" + "Player Result: " +`${playerScore}\n\n` + "Computer Result: " + `${computerScore}`;
    }
    else if (playerScore < computerScore) {
        newDiv.textContent = "You lost the game \n\n" + "Player Result: " +`${playerScore}\n\n` + "Computer Result: " + `${computerScore}`;
    }
    else if (playerScore === computerScore){
        newDiv.textContent = "The game is a tie \n\n" + "Player Result: " +`${playerScore}\n\n` + "Computer Result: " + `${computerScore}`;
    }
}
           
}
