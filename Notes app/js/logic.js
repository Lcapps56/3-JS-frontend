// POP UP SHOWING AND CLOSNG **START**

const addBtn = document.querySelector('.add-box')
const popup = document.querySelector('.popup-box')
const popupTitle = document.querySelector('header p')
const popupClose = document.querySelector('.close')
// Get notes from localstorage and parse it to JS or pass an empty array as notes
const notes = JSON.parse(localStorage.getItem('notes') || "[]")
let isUpdate = false, updateID

addBtn.addEventListener('click', () => {

    popup.style.display = 'block'
})
popupClose.addEventListener('click', () => {
    titleTag.value = ""
    descTag.value = ""
    popupTitle.innerText = "Add a new note"
    addNote.innerText = "Create note"
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
        if(!isUpdate) {
            notes.push(newNote)
        } else{
            notes[updateID] = newNote
        }

        localStorage.setItem('notes', JSON.stringify(notes))
        console.log(newNote)
        isUpdate = false

        popupClose.click()
    }

    titleTag.value = ""
    descTag.value = ""


    showNotes()
})

// DISPLAYING ALL NOTES
let showNotes = () => {
    document.querySelectorAll('.note').forEach(note => {note.remove()})
    notes.forEach((note, index) => {
        let newLi = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${note.desc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings"> 
                                <i class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onClick="editNote(${index}, '${note.title}', '${note.desc}')"><i class="uil uil-pen"></i>Edit</li>
                                    <li onClick="deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`

        addBtn.insertAdjacentHTML('afterEnd', newLi)
    });
}
showNotes()

// Delete note
let deleteNote = (noteID) =>{
    notes.splice(noteID, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
    showNotes()
}

let editNote = (noteID, noteTitle, noteDesc) =>{
    isUpdate = true
    updateID = noteID
    addBtn.click()
    titleTag.focus()
    // let currentNote = notes[noteID]
    console.log(noteTitle, noteDesc)

    popupTitle.innerText = "Update a note"
    addNote.innerText = "Update note"

    titleTag.value = noteTitle
    descTag.value = noteDesc


}
