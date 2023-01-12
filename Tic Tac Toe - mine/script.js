const startBtn = document.querySelector('.start')

let gameBtns = document.querySelector('.game').getElementsByTagName('button')

gameBtns = Array.from(gameBtns)

console.log(gameBtns)

const gameVals = [
    false, false, false,
    false, false, false,
    false, false, false
]

gameBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        gameVals[this.value] = true
        checkGameState()
    })
})
let checkGameState = () => {
    checkRows()
    checkDiags()
    checkCols()
    1 2 3
    4 5 6
    7 8 9

    7 5 3
    1 5 9

    1 4 7
    2 5 6
    3 6 9

}