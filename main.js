function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();

  while (playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors") {
      alert('You can only enter : "rock", "paper", or "scissors" !');
      playerSelection = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();
      playerSelection;
  }

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection} ! `;
  }

  else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playAgain(){
  let wannaPlay = prompt('Wanna play again ? \nType "yes" or "no"').toLowerCase();
    if (wannaPlay === "yes"){
      game();
    }
    else if (wannaPlay ==="no"){
      alert("Goodbye ! See you soon !");
    }
    else{
      alert('You must only enter "yes" or "no".');
      playAgain();
    }
}

function game() {

  let score = 0;
  for (let i = 0; i < 4; i++) {
    let result = playRound(prompt("What will you chose ? :\n- rock\n- paper\n- scissors"));
    console.log(result);
    if (result.includes("Win")) {
      score++;
    }
  }
  if (score >= 3) {
    console.log(`You win the game! You got a score of ${score}/5`);
    alert(`You win the game! You got a score of ${score}/5`);
    playAgain();
  } else {
    console.log(`You lost the game! Your score is ${score}/5`);
    alert(`You lost the game! Your won ${score} rounds on 5 !`);
    playAgain();
  }

}

let nickname = prompt("Welcome ! What is your name ?");
let greetings = alert(`Hi ${nickname} ! Let's play !`);
let playerSelection = prompt("What will you chose ? :\n- rock\n- paper\n- scissors");
const computerSelection = computerPlay();
let result = playRound(playerSelection, computerPlay());

console.log(result);
let score;
game();
console.log(score)
