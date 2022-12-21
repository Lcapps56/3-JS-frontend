const passSpan = document.querySelector('#password')
const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "="]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let pass = []

let makePassword = () => {
    alphabet.forEach((letter)=> {
        pass.push(letter)
    })
    
    console.log(pass.toString())
}