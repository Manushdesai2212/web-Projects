let boxes = document.querySelectorAll(".box");//select all the box
let reset_btn = document.querySelector("#Reset");//reset button is getted
let new_game = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#message");
let turnO = true;//to make one turn true 
let winPatterns =//all win patterns 
    [[0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6,],
    [3, 4, 5],
    [6, 7, 8],
    ]

/*Remaining task*/

const enableboxes = () => //to enable when new game or reset is done
{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        ;


    }
}
//it will reset the conditions 
const resetGame = () => {
    turnO = true;
    enableboxes();//enacle all box and make it empty
    msgContainer.classList.add("hide")

}

const draw = () => {
    msg.innerText = "It's a draw";
    msgContainer.classList.remove("hide");
    Disableboxes();
}

//here as there is multiple class box it is an array. fireach method applied
boxes.forEach((box) => {
    //at click if turno true print O and vise varsa
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turnO) {
            box.innerText = "o";
            turnO = false;

        }
        else {
            box.innerText = "x";
           
            turnO = true;

        }

        box.disabled = true;//this will disable the button which is clicked so we can't change
        let winnerFound = checkWinner();
        if (!winnerFound) {
            let allFilled = true;
            for (let b of boxes) {
                if (b.innerText === "") {
                    allFilled = false;
                    break;
                }
            }
            if (allFilled) {
                draw();
            }
        }

    })
})

const Disableboxes = () => //this will disable all the buttons as winner is obtain
{
    for (let box of boxes) {
        box.disabled = true;


    }
}

//this will show who is the winner
const showWinner = (winner) => {
    msg.innerText = `congatulations ,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    Disableboxes();//to diable all boxes when winner is obtaing so we can't play after getting a winner

}
//here the array is 3d aray so each index has another array
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos0 = boxes[pattern[0]].innerText;//here it will take all value of an index and check
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 === pos1 && pos1 === pos2) {
                // console.log("winner",pos0);
                showWinner(pos0);
                return true;
            }
        }

    }
    return false;

};

new_game.addEventListener("click", resetGame);//when we click it will call reset function
reset_btn.addEventListener("click", resetGame);
