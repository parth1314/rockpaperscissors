let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const compIdx = Math.floor(Math.random()*3);
    return options[compIdx];
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin>0){
        user_score+=1;
        userScore.innerText = user_score;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else if(userWin<0){
        comp_score+=1;
        compScore.innerText = comp_score;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }else{
        msg.innerText = `Draw. You both played ${userChoice}`;
        msg.style.backgroundColor = "black";
    }
}

const playGame = (userChoice) =>{
    let userWin = 1;
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        userWin = 0;
    }else{
        if(userChoice==="rock"){
            userWin = (compChoice==="paper")? -1 : 1;
        }else if(userChoice==="paper"){
            userWin = (compChoice==="scissors")? -1 : 1;
        }else{
            userWin = (compChoice==="rock")? -1 : 1;
        }
    }
    showWinner(userWin,userChoice,compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener(("click"),() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});