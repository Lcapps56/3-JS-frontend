const slider = document.querySelector(".slider input"),
img = document.querySelector('.images .img-2'),
dragLine = document.querySelector('.slider .drag-line')

slider.oninput = () => {
    let sliderVal = slider.value
    img.style.width = sliderVal+"%"
    dragLine.style.left = sliderVal+"%"
}