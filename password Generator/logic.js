const passSpan = document.querySelector('#password')
const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// const alphabet = []
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "="]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const characters = [...alphabet,...specialChar,...numbers]


let makePassword = () => {
    let pass = []
    let passLength = Math.floor(Math.random()*20)
    // console.log('button is clicked')

    for (let i=0;i<passLength; i++){
        pass.push(characters[Math.floor(Math.random() * characters.length)])
    }
    
    console.log(`the password is ${pass}`)

    
    inputText(pass.join(''))
}

let inputText = (passwordText) =>{
    passSpan.innerHTML = ''
    passSpan.innerHTML = passwordText
}