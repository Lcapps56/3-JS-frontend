const lengthSlider = document.querySelector('.pass-length input'),
generateBtn = document.querySelector('.generate-btn'),
options = document.querySelectorAll('.option input')
const passText = document.querySelector('.input-box input')

let characters = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    special: '^!$%&|[](){}:;.,*+-#@<>~'
}
let staticPassword = ''

let generatePassword = () =>{

    let randomPassword = ''
    let passLength = lengthSlider.value
    let excludeDuplicats = false

    options.forEach(option =>{
        if(option.checked){
            if(option.id !== 'exc-duplicate' && option.id !== 'spaces'){
                staticPassword += characters[option.id]
            } else if(option.id === 'spaces'){
                staticPassword += ` ${staticPassword} `
            } else{
                excludeDuplicats = true
            }
        }
    })

    for (let i=0;i<passLength; i++){
        let randomChar = staticPassword[Math.floor(Math.random()*staticPassword.length)]
        if(excludeDuplicats){
            !randomPassword.includes(randomChar) || randomChar == " " ?randomPassword += randomChar : i--
        } else{
            randomPassword += randomChar
        }
    }

    passText.placeholder = randomPassword


    console.log(randomPassword)

}


const updateSlider = () => {
    document.querySelector('.pass-length span').innerText = lengthSlider.value
}

lengthSlider.addEventListener('input', updateSlider)
generateBtn.addEventListener('click', generatePassword)















// const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
// specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "="],
// numbersUse = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
// characters = [...alphabet, ...specialChar, ...numbersUse],
// passSpan = document.querySelector('.input-box input'),
// passLower = document.querySelector('#lowercase'),
// passUpper = document.querySelector("#uppercase"),
// passNumbers = document.querySelector("#numbers"),
// passSymbols = document.querySelector("#symbols"),
// generateBtn = document.querySelector('.generate-btn'),
// settingsList = document.querySelector('.options'),
// settingsText = settingsList.getElementsByTagName('input')

// // let settings = []
// let pass = []
// let lowerCase,
// upperCase,
// numbers,
// symbols

// generateBtn.addEventListener('click', ()=> {
//     checkParam()
//     makePassword()
//     cleanPassword(pass, lowerCase, upperCase, numbers, symbols)
// })

// let checkParam = () =>{
//     lowerCase = settingsText[0].checked
//     upperCase = settingsText[1].checked
//     numbers = settingsText[2].checked
//     symbols = settingsText[3].checked

//     return lowerCase, upperCase, numbers, symbols
// }

// let makePassword = () => {
//     let passLength = Math.floor(Math.random()*20)
//     // console.log('button is clicked')
//     for (let i=0;i<passLength; i++){
//         pass.push(characters[Math.floor(Math.random() * characters.length)])
//     } 
//     // pass = pass.join('')
//     return pass
// }

// let cleanPassword = (CPass, lower, upper, numb, symb) => {
//     if(lower){
//         for (let i=0; i<CPass.length; i++){
//             for(let x=0; x<alphabet.length; x++){
//                 if (CPass[i].includes(alphabet[x].toLowerCase)){
//                     CPass = CPass.splice(i, 1)
//                     return CPass
//                 }
//             }
//         }
//     }else {}
//     if(upper){
//         for (let i=0; i<CPass.length; i++){
//             for(let x=0; x<alphabet.length; x++){
//                 if (CPass[i].includes(alphabet[x])){
//                     console.log(CPass)
//                     CPass = CPass.splice(i, 1)
//                     console.log(CPass)
//                     return CPass
//                 }
//             }
//         }
//     } else{}
//     console.log(`the password now is${CPass.join('')}`)
// }

