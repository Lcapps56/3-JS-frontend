const passSpan = document.querySelector('.input-box input'),
passLower = document.querySelector('#lowercase'),
passUpper = document.querySelector("#uppercase"),
passNumbers = document.querySelector("#numbers"),
passSymbols = document.querySelector("#symbols"),
generateBtn = document.querySelector('.generate-btn'),
settingsList = document.querySelector('.options'),
settings = settingsList.getElementsByTagName('input')

let lowerCase
let upperCase
let numbers
let symbols



generateBtn.addEventListener('click', ()=> {
    checkParam()
})

let checkParam = () =>{
    for(let i=0; i<settings.length; i++){
        console.log(settings[i].checked)
    }

    // settings.forEach(()=>{
    //     if(setting.checked){
    //         console.log(checked)
    //     }
    // })
    console.log(settings)
}























// const passSpan = document.querySelector('#password')
// const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// // const alphabet = []
// const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "="]
// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
// const characters = [...alphabet,...specialChar,...numbers]


// let makePassword = () => {
//     let pass = []
//     let passLength = Math.floor(Math.random()*20)
//     // console.log('button is clicked')

//     for (let i=0;i<passLength; i++){
//         pass.push(characters[Math.floor(Math.random() * characters.length)])
//     }
    
//     console.log(`the password is ${pass}`)

    
//     inputText(pass.join(''))
// }

// let inputText = (passwordText) =>{
//     passSpan.innerHTML = ''
//     passSpan.innerHTML = passwordText
// }