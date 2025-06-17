let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#Reset");
let new_game = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#message");
let turnO = true;
let winPatterns = [[0, 1, 2],
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
        box.innerText="";
       ;


    }
}

const resetGame=() =>{
    turnO=true;
    enableboxes();
     msgContainer.classList.add("hide")

}


boxes.forEach((box) => {
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
        box.disabled = true;
        checkWinner();
    })
})

const Disableboxes = () => //to diable when winner is obtain
    {
    for (let box of boxes)
         {
        box.disabled = true;


    }
}


const showWinner = (winner) => {
    msg.innerText = `congatulations ,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    Disableboxes();//to diable all boxes when winner is obtaing so we can't play after getting a winner

}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        if (pos0 != 0 && pos1 != 0 && pos2 != 0) {
            if (pos0 === pos1 && pos1 === pos2) {
                // console.log("winner",pos0);
                showWinner(pos0);
            }
        }
    }
}
new_game.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);
