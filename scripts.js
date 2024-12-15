let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_point=document.querySelector("#user-score");
const comp_point=document.querySelector("#comp-score");

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("user win");
        msg.innerText=`You win! Your's ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green"
        userScore++;
        console.log(userScore);
        user_point.innerText=userScore;
    }
    else{
        console.log("lose")
        msg.innerText=`You win! Computer's ${compChoice} beats your's ${userChoice}`;
        msg.style.backgroundColor="red"
        compScore++;
        console.log(compScore);
        comp_point.innerText=compScore;
    }
};

const drawGame=()=>{
    console.log("The game was draw");
    msg.innerText="The game was draw, Play Again";
    msg.style.backgroundColor="#081b31"
};

const generateComupterChoice=()=>{
    const opt=["rock","paper","scissors"];
    var n=Math.random();
    n=Math.floor(n*3);
    return opt[n];
};

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    const compChoice=generateComupterChoice();
    console.log("comp choice = ",compChoice);
    //generate comp choice

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
      }
    };

 choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
    
    })

