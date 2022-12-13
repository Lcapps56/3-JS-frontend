// POP UP SHOWING AND CLOSNG **START**

const addBtn = document.querySelector('.add-box')
const popup = document.querySelector('.popup-box')
const popupClose = document.querySelector('.close')

addBtn.addEventListener('click', () => {
    popup.style.display = 'block'
})
popupClose.addEventListener('click', () => {
    popup.style.display = 'none'
})

// POP UP SHOWING AND CLOSNG **END**

// GATHERING DATA FROM POPUP WINDOW **START**
const addNote = document.querySelector('.addNote')
const titleTag = document.querySelector('#title')
const descTag = document.querySelector('#desc')

addNote.addEventListener('click', (e) => {
    e.preventDefault()
    let noteTitle = titleTag.value 
    let noteDesc = descTag.value
    if(noteTitle || noteDesc){
        console.log(noteTitle, noteDesc)
    }
    
    titleTag.value = ""
    descTag.value = ""
})


let newNote = (title, desc) => {
    title = title
    desc = desc
}
