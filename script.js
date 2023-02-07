function getComputerChoise(){
    let arr = [
        "rock",
        "paper",
        "scissors"
    ];
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const Computerselection = arr[randomIndex];
    return Computerselection;
}

function playRound(playerSelection,Computerselection){
    if((playerSelection=="rock"&&Computerselection=="scissor")||(playerSelection=="scissor"&&Computerselection=="paper")||(playerSelection=="paper"&&Computerselection=="rock")){
        return "You Win!";
    }
    else if((playerSelection=="scissor"&&Computerselection=="rock")||(playerSelection=="spaper"&&Computerselection=="scissor")||(playerSelection=="rock"&&Computerselection=="paper")){
        return "You Lose!";
    }
    else if(playerSelection!="rock"||playerSelection!="paper"||playerSelection!="scissor"){
        return "Enter a Valid Option ";
    }
    else{
        return "Try Again";
    }
}


function game(){
    const playerSelection = prompt("What is your choise ").toLowerCase();
    const Computerselection= getComputerChoise();
    return (playRound(playerSelection,Computerselection));
}

