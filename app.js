let userscore = 0;
let compscore = 0;

const maincontainer = document.querySelectorAll('.cont');
const msg=document.querySelector('.result');


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
};

const drawGame = () => {
    msg.innerText = "It's a draw!"; 
    msg.style.backgroundColor = "rgb(169, 169, 171)"; 
};

const user=document.querySelector('.yourScore');
const comp=document.querySelector('.compScore');

const showWinner = (userWins,compChoice,userChoice) => {
    if(userWins) {
        userscore++;
        user.innerText=userscore;
        msg.innerText = `You win! ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "rgba(17, 167, 42, 1)"; 
    }
    else {
        compscore++;
        comp.innerText=compscore;
        msg.innerText = `You lose! ${compChoice} beats Your's ${userChoice}`;
        msg.style.backgroundColor = "rgba(221, 40, 40, 1)";
    }
};


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWins = false;
        if(userChoice === "rock"){
            compChoice === "paper" ? userWins = false : userWins = true;
        }
        else if(userChoice === "paper"){
            compChoice === "scissors" ? userWins = false : userWins = true;
        }
        else if(userChoice === "scissors"){
            compChoice === "rock" ? userWins = false : userWins = true;
        }
        showWinner(userWins, compChoice,userChoice);
    }
};


maincontainer.forEach((cont) => {
    cont.addEventListener('click', () => {
        const userChoice = cont.getAttribute("id");
        playGame(userChoice);
    });
});


const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click' , () => {
    compscore = 0;
    userscore = 0;
    user.innerText = userscore;
    comp.innerText = compscore;
    msg.innerText = "Pick Your Move!";
    msg.style.backgroundColor = "rgba(0, 0, 0, 1)";
    
})