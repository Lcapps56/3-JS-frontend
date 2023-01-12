const startBtn = document.querySelector('.start')

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
    2: [3, 4, 5],
    3: [6, 7, 8],
    4: [6, 4, 3], 
    5: [0, 4, 8],
    6: [0, 3, 6],
    7: [1, 4, 5],
    8: [2, 5, 8]
}

gameBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        gameVals[this.value] = true
        console.log(gameVals)
        checkGameState()
    })
})
let checkGameState = () => {
    // console.log(gameVals[winningVals.one[0]])
    
    // THIS CODE WORKS JUST REPEAT FOR EACH
    if (gameVals[winningVals.one[0]] && gameVals[winningVals.one[1]] && gameVals[winningVals.one[2]]){
        console.log("won")
    }else{
        console.log('not won')
    }








    // for (let i=0; i<winnigVals.length; i++){
        
    // }

}