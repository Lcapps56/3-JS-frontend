const wrapper = document.querySelector('.wrapper')
const header = wrapper.querySelector('header')




let onDrag = ({movementX, movementY}) => {
    let getStyle = window.getComputedStyle(wrapper)
    let top = parseInt(getStyle.top)
    let left = parseInt(getStyle.left)

    wrapper.style.left = `${left + movementX}px`
    wrapper.style.top = `${top + movementY}px`
}


header.addEventListener('mousedown', ()=>{
    header.classList.add('active')
    header.addEventListener('mousemove', onDrag)
})
document.addEventListener('mouseup', ()=>{
    header.removeEventListener('mousemove', onDrag)
})










// icon.addEventListener('mousedown', drag())
// icon.addEventListener('mouseup', () =>{console.log('icon unclickd')})

// let drag = () =>{
//     getPos()
//     div.style.left = mousePosX
//     div.style.top = mousePosY
// }
// let getPos = () =>{
//     let mousePosX = currentMousePos . X coordinate
//     let mousePosY = currentMousePos . Y coordinate

//     return mousePosX
//     return mousePosY
// }