const roboWeapon = document.querySelector(".robo-weapon");

const roboRock = roboWeapon.querySelector(".btn-rob-rock");
const roboPaper = roboWeapon.querySelector(".btn-rob-paper");
const roboSci = roboWeapon.querySelector(".btn-rob-scissors");

let roboArm;
let humanArm;
let humanScore = 0;
let roboScore = 0;

const humanBtn = document.querySelector(".human-weapon");

const humanRock = humanBtn.querySelector(".btn-hum-rock");
const humanPaper = humanBtn.querySelector(".btn-hum-paper");
const humanSci = humanBtn.querySelector(".btn-hum-scissors");

const btn = humanBtn.querySelectorAll("button");
btn.forEach((elem) => elem.addEventListener("click", listen));

function listen(event) {
  console.log(event.target.parentElement.className);
  let element = event.target;

  if (element.parentElement.className === "btn-hum-paper") {
    humanArm = humanPaper;
  } else if (element.parentElement.className === "btn-hum-rock") {
    humanArm = humanRock;
  } else if (element.parentElement.className === "btn-hum-scissors") {
    humanArm = humanSci;
  }
  setRound(humanArm, setRoboWeapon());
  stopGame();
}

//Making computer throw out signs randomly

function setRoboWeapon() {
  let random = Math.floor(Math.random() * 3 + 1);

  if (random === 1) {
    roboArm = roboRock;
    return roboArm;
  } else if (random === 2) {
    roboArm = roboPaper;
    return roboArm;
  } else {
    roboArm = roboSci;
    return roboArm;
  }
}

//This is our first round vs. computer
function setRound(human, computer) {
  let arm1 = human.className.substring(8);

  let arm2 = computer.className.substring(8);

  if (arm1 === arm2) {
    human.classList.add("win");
    setTimeout(() => {
      human.classList.remove("win");
    }, 1000);

    computer.classList.add("win");
    setTimeout(() => {
      computer.classList.remove("win");
    }, 1000);
  } else if (
    (arm1 === "rock" && arm2 === "scissors") ||
    (arm1 === "paper" && arm2 === "rock") ||
    (arm1 === "scissors" && arm2 === "paper")
  ) {
    human.classList.add("win");
    setTimeout(() => {
      human.classList.remove("win");
    }, 1000);

    computer.classList.add("lost");
    setTimeout(() => {
      computer.classList.remove("lost");
    }, 1000);

    humanScore++;

    document
      .getElementById(`human${humanScore}`)
      .setAttribute("style", "opacity:1");
  } else {
    human.classList.add("lost");

    setTimeout(() => {
      human.classList.remove("lost");
    }, 1000);

    computer.classList.add("win");

    setTimeout(() => {
      computer.classList.remove("win");
    }, 1000);

    roboScore++;

    document
      .getElementById(`robo${roboScore}`)
      .setAttribute("style", "opacity:1");
  }
}

function stopGame() {
  if (humanScore === 5) {
    document.querySelector("div.main").remove();
    humanWins();
  } else if (roboScore === 5) {
    document.querySelector("div.main").remove();
    robotWins();
  }
}

function humanWins() {
  const cont = document.querySelector(".container");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  div.classList.add("stop-game");
  img.setAttribute("src", "images/human-wins.png");
  img.classList.add("img-wins");
  h1.textContent = "Hey, Robot...";

  cont.appendChild(div);
  div.appendChild(h1);
  div.appendChild(img);
}

function robotWins() {
  const cont = document.querySelector(".container");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  div.classList.add("stop-game");
  img.setAttribute("src", "images/bender-wins.png");
  img.classList.add("img-wins");
  h1.textContent = "Hey, Human...";

  cont.appendChild(div);
  div.appendChild(h1);
  div.appendChild(img);
}
