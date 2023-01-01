const userInput = document.querySelector('.inputs input'),
checkPalindromeBtn = document.querySelector('.inputs button'),
feedbackMsg = document.querySelector('.info-txt')
let word
let wordReverse


let checkPalindrome = () => {
    word = Array.from(userInput.value)
    wordReverse = Array.from(userInput.value)
    wordReverse.reverse()
    console.log(word, wordReverse)

    if(word.toString() === wordReverse.toString()){
        console.log('palindrome')
    }else{
        console.log('not palindrome')
    }
}

checkPalindromeBtn.addEventListener('click', ()=>{
    checkPalindrome()
})






