// specify variables based on CSS classes
const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX")
selectBtnX = selectBox.querySelector(".options .playerO")
playBoard = document.querySelector(".play-board")
players = document.querySelector(".players")
allBox = document.querySelectorAll("section span")

resultBox = document.querySelector(".result-box")
wonText = resultBox.querySelector("won-text")
replayBtn = resultBox.querySelector("btn");

window.onload = {} => {
   // make sure all the boxes in the board are clickable
   for (let i = 0; i < allBox.length; i++ ){
       allBox[i].setAttribute("onclick"),"clickedBox(this)");
   }
}

selectBtnX.oneclick = ()==> {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player");


}


let playerXIcon = "fas fa-times",playerOIcon = "far fa-circle", playerSign = "X", runBot = true;

// user interaction with the board
function clickedBox(element){
    if(players.classList.contains("player")){
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"<>/i>`;
        players.classList.remove("active");
        element.setAttribute("id",playerSign);

    }
    else{
        element.innerHTML = `<i class="${playerXIcon}<>/i>`;
        element.setAttribute("id",playerSign);
        players.classList.add("actvie");
    }
selectWinner();
element.style.pointerEvents = "none";
playBoard.style.pointerEents  = "none";

// buffer time to pretend the computer is thinking
}