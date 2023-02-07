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



