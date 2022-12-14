// POP UP SHOWING AND CLOSNG **START**

const addBtn = document.querySelector('.add-box')
const popup = document.querySelector('.popup-box')
const popupClose = document.querySelector('.close')
// Get notes from localstorage and parse it to JS or pass an empty array as notes
const notes = JSON.parse(localStorage.getItem('notes') || "[]")

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
const months = ['January', "February", 'March', 'April', 'May', "June", 'July', 'August', 'September', 'October', 'November', "December"]

addNote.addEventListener('click', (e) => {
    e.preventDefault()
    let noteTitle = titleTag.value 
    let noteDesc = descTag.value
    if(noteTitle || noteDesc){
        // getting date
        let dateObj = new Date()
        let month = months[dateObj.getMonth()]
        let day = dateObj.getDay()
        let year = dateObj.getFullYear()
        let dateStr = `${month} ${day}, ${year}`

        let newNote = {
            title: noteTitle,
            desc: noteDesc,
            date: dateStr
        }
        notes.push(newNote)

        localStorage.setItem('notes', JSON.stringify(notes))
        console.log(newNote)
        popupClose.click()
    }

    titleTag.value = ""
    descTag.value = ""
})

// DISPLAYING ALL NOTES
