let userScore = 0;
let computerScore = 0;
const scoreboard_div = document.querySelector(".score-board");
const userlabel_span = document.getElementById("user-label");
const computerlabel_span = document.getElementById("computer-label");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// win, lost and draw function
function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById
}
function lost() {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
function draw() {

}

// Win and Loss deiciding factor
function win_loss(userChoice, computer_choice) {
    if (userChoice == "r") {
        if (computer_choice == "p") {
            console.log("Comp Wins!" + computer_choice)
            lost();
        }
        if (computer_choice == "s") {
            console.log("User Wins!" + userChoice)
            win();
        }
        if (computer_choice == "r") {
            console.log("Draw")
            draw();
        }
    }
    if (userChoice == "p") {
        if (computer_choice == "r") {
            console.log("User Wins!" + userChoice)
            win();
        }
        if (computer_choice == "s") {
            console.log("Comp Wins!" + computer_choice)
            lost();
        }
        if (computer_choice == "p") {
            console.log("Draw")
            draw();
        }
    }
    if (userChoice == "s") {
        if (computer_choice == "r") {
            console.log("Comp Wins!" + computer_choice)
            lost();
        }
        if (computer_choice == "p") {
            console.log("User Wins!" + userChoice)
            win();
        }
        if (computer_choice == "s") {
            console.log("Draw")
            draw();
        }
    }
}
// WinLoss function defined above

// Computer Choice function
function comp_choice() {
    const choices_array = ["r", "p", "s"];
    return (choices_array [Math.floor(Math.random()*3)]);
}

// Defines Game function here
function game(userChoice) {
    const comp_input = comp_choice();
    console.log("So, you hit the -->" + userChoice);
    console.log("Computer hit -->" + comp_input);
    win_loss(userChoice, comp_input);
}

// Defined main function here
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}


// Main Function running
main();