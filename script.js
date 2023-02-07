function getComputerChoise(){
    let arr = [
        "rock",
        "paper",
        "scissors"
    ];
    // get random inde value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const Computerselection = arr[randomIndex];
    return Computerselection;
}
console.log(getComputerChoise());

function playRound(playerSelection,Computerselection){
    if((playerSelection=="rock"&&Computerselection=="scissor")||(playerSelection=="scissor"&&Computerselection=="paper")||(playerSelection=="paper"&&Computerselection=="rock")){
        return "You Win!";
    }
    else if((playerSelection=="scissor"&&Computerselection=="rock")||(playerSelection=="spaper"&&Computerselection=="scissor")||(playerSelection=="rock"&&Computerselection=="paper")){
        return "You Lose!";
    }
    else{
        return "Try Again";
    }
}