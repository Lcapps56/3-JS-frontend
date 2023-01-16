const startBtn = document.querySelector('.startS'),
startComp = document.querySelector('.startC')
let gameRunning = false
let gameBtns = document.querySelector('.game').getElementsByTagName('button')
let currentPlayer = "X"
gameBtns = Array.from(gameBtns)
console.log(gameBtns)

let XgameVals = [
    false, false, false,
    false, false, false,
    false, false, false
]
let OgameVals = [
    false, false, false,
    false, false, false,
    false, false, false
]
const winningVals = {
    one: [0, 1, 2],
    two: [3, 4, 5],
    three: [6, 7, 8],
    four: [6, 4, 2], 
    five: [0, 4, 8],
    six: [0, 3, 6],
    seven: [1, 4, 7],
    eight: [2, 5, 8]
}



startBtn.addEventListener('click', function(){singlePlayer()})
startComp.addEventListener('click', function(){computerGame()})

let computerGame = () => {
    gameRunning = true
    gameBtns.forEach(function(btn){
        btn.addEventListener('click', function(){
            if (currentPlayer === "X"){
                if(!this.textContent){
                    this.innerHTML = currentPlayer
                        XgameVals[this.value] = true
                        checkGameState()
                        currentPlayer = "O"
                }else{
                    alert("you cannot click this")
                }
            }
        })
    })
}

let singlePlayer = () => {
    gameRunning = true
    gameBtns.forEach(function(btn){
        btn.innerHTML = ''
        btn.addEventListener('click', function(){
            // if the spot clicked is available
            if(!this.textContent){
                // put current palyers mark in spot
                this.innerHTML = currentPlayer
                // changing the currentplayers array of scores (true and false array)
                if(currentPlayer === "X"){
                    XgameVals[this.value] = true
                    checkGameState()
                    currentPlayer = "O"
                }else{
                    OgameVals[this.value] = true
                    console.log(OgameVals)
                    checkGameState()
                    currentPlayer = "X"
                }
            }else{
                alert('you cannont cick this')
            }
    
        })
    }) 
}
    


let checkGameState = () => {
    if(gameRunning){
        for (val in winningVals){
            if(XgameVals[winningVals[val][0]] && XgameVals[winningVals[val][1]] && XgameVals[winningVals[val][2]] || OgameVals[winningVals[val][0]] && OgameVals[winningVals[val][1]] && OgameVals[winningVals[val][2]]){
                alert('game won')
                gameRunning = false
                location.reload()
            }else{
            }
        }
    }else{
    }
}

function computerTurn(){

}