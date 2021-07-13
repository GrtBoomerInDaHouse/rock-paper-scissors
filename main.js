//Making computer throw out signs randomly
function roboArm() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


//This is our first round vs. computer
function setRound(human, computer) {
  let humanSign = human.toUpperCase();
  let roboSign = computer.toUpperCase();

  if (
    (humanSign === "ROCK" && roboSign === "SCISSORS") ||
    (humanSign === "PAPER" && roboSign === "ROCK") ||
    (humanSign === "SCISSORS" && roboSign === "PAPER")
  ) {
    return `You win ${humanSign} beats ${roboSign}`;

  } else if (humanSign === roboSign) {
    return "DRAW";

  } else {
    return `You lose ${roboSign} beats ${humanSign}`;
  }
}


// ScoreTable.

let humanScore = 0;
let roboScore = 0;

//  In case there is no winner in 5 turns(human:2, computer:2 draw:1)

let circle = () =>{

    if (humanScore === 3){
          
        alert(`You kicked his roboass, gg wp! Human: ${humanScore} Robot: ${roboScore}`);
        return 3;
      
    }else if (roboScore === 3) {
        alert(`You're so dead. RUN! Human: ${humanScore} Robot: ${roboScore}`);
        return 3;
       
    } else{return Infinity;}
};




function game() {        

    for(i=0; i<circle(); i++){
      
        let humanArm = window.prompt("Choose your sign:", "Rock, Scissors, Paper"); // input

        let rounds = setRound(humanArm, roboArm());

        if (rounds.substring(4,7) === "win"){
            humanScore++;
            alert(`${rounds.substring(0)}, Human: ${humanScore} Robot: ${roboScore}`);
            
        }else if(rounds.substring(4,8) === "lose"){
            roboScore++;
            alert(`${rounds.substring(0)},  Robot: ${roboScore} Human: ${humanScore}`);
           }else {alert(`${rounds.substring(0)},  Robot: ${roboScore} Human: ${humanScore}`)}
    }
   

 
}



game()

