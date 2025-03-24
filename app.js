const choices = document.querySelectorAll(".boxes");
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");
const msgBox = document.querySelector(".msg-box");

let userScore = 0;
let comScore = 0;

// If the game draw
const drawGame = (userChoice) =>{
   msgBox.innerText = `Both are selected ${userChoice}. So, Match Tied!!! 😂`;
   msgBox.style.backgroundColor = "LightGray";
   msgBox.style.color = "Black";
   msgBox.style.border = "3px solid rgb(153, 8, 131)";
   msgBox.style.boxShadow = "0px 0px 25px rgb(255, 255, 255)";

}

// User Winning details
const userWin = (userChoice, comChoice) =>{
    msgBox.innerText = `You Select <${userChoice}> beats Computer Choice <${comChoice}> Wohoo!!!🥳🎉`;
    msgBox.style.backgroundColor = "Green";
    msgBox.style.color = "Yellow";
    msgBox.style.border = "2px solid Yellow";
    userScore++;
    userScorePara.innerText = userScore;
    msgBox.style.boxShadow = "0px 0px 25px rgb(133, 248, 57)";
}

// Computer Winning details
const comWin = (userChoice, comChoice) =>{
    msgBox.innerText = `Computer Select <${comChoice}> beats Your Choice <${userChoice}> 😭`;
    msgBox.style.backgroundColor = "#f24646";
    msgBox.style.color = "#Yellow";
    msgBox.style.border = "2px solid rgb(54, 100, 237)";
    comScore++;
    comScorePara.innerText = comScore;
    msgBox.style.boxShadow = "0px 0px 25px rgb(241, 78, 78)";

}
// Click or select your choice to start and play
choices.forEach((choice) =>{
   choice.addEventListener("click", ()=>{
   startGame(choice.innerText);

   })
})



//Logic for the game start...
const startGame = (userChoice) =>{
const trunSelect = ["Rock","Paper","Scissor"];
let indx = Math.floor(Math.random()*3);
let comChoice = trunSelect[indx];
  if(userChoice === comChoice){
     drawGame(userChoice);
  } else {(userChoice=== "Rock" && comChoice === "Scissor") || 
  (userChoice=== "Scissor" && comChoice === "Paper") ||
  (userChoice=== "Paper" && comChoice === "Rock") ?
   userWin(userChoice,comChoice) :
   comWin(userChoice,comChoice);
  }
 }
