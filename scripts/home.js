var btn = document.querySelector(".button")
var modal = document.querySelector(".modal")
var x = document.querySelector('.modal-content span')

btn.onclick = toggleModal
x.onclick = toggleModal

function toggleModal() {
    modal.classList.toggle('active')
}

function closeModal() {
    modal.classList.remove('active')
}

document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ('key' in evt) {
        isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
    } else {
        isEscape = (evt.keyCode === 27)
    }
    if (isEscape) {
        closeModal()
    }
}