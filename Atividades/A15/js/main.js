//Get all keys
const keys = document.querySelectorAll('.key')

//Play notes
function playNotes(event) {
    // KeyCode
    let audioKeyCode = getKeyCode(event)

    // Typed or pressed key
    const key = document.querySelector(`.key[data-key = "${audioKeyCode}"]`)

    // If key events
    const cantFoundAnyKey = !key

    if (cantFoundAnyKey) {
        return
    }

    // Playing audio
    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode

    const isKeyboard = event.type === 'keydown'

    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key = "${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function registerEvents() {
    // Click with mouse
    keys.forEach(function(key) {
        key.addEventListener('click', playNotes)
        key.addEventListener('transitionend', removePlayingClass)
    })

    //Keyboard type
    window.addEventListener('keydown', playNotes)
}

window.addEventListener('load', registerEvents)