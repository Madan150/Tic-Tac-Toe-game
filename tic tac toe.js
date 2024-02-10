

let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#resetbtn");
let newgameBtn = document.querySelector("#NewBtn");
let message = document.querySelector("#msg");
let megContainer = document.querySelector(".msg-container")
let turnO = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnO = true
    enableBoxes();
    message.innerHTML=""
    
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // player O turn
        if (turnO) {
            box.innerHTML = "O"
            turnO = false;
        }
        else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner();

    })
})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const showWinner = (winner) => {
    message.innerHTML = `congratulations ,Winner is ${winner}`
    disableBoxes()
}

function checkWinner() {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerHTML
        let pos2Val = boxes[pattern[1]].innerHTML
        let pos3Val = boxes[pattern[2]].innerHTML
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner")
                showWinner(pos1Val);

            }
        }
    }
}
newgameBtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click",resetGame)
