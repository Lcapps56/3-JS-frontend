const startBtn = document.querySelector('.start'),
gameRunning = false
let gameBtns = document.querySelector('.game').getElementsByTagName('button')

gameBtns = Array.from(gameBtns)
console.log(gameBtns)

const gameVals = [
    false, false, false,
    false, false, false,
    false, false, false
]
const winningVals = {
    one: [0, 1, 2],
    two: [3, 4, 5],
    three: [6, 7, 8],
    four: [6, 4, 3], 
    five: [0, 4, 8],
    six: [0, 3, 6],
    seven: [1, 4, 5],
    eight: [2, 5, 8]
}




gameBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        gameVals[this.value] = true
        console.log(gameVals)
        checkGameState()
    })
})
let checkGameState = () => {
    for (val in winningVals){
        console.log(winningVals[val][0])
        
        if(gameVals[winningVals[val][0]] && gameVals[winningVals[val][1]] && gameVals[winningVals[val][2]]){
            alert('game won')
            gameRunning = false
        }else{
        }
    }
}


