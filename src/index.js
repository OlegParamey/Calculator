import { handleNumber, handleOperator, handleSpecial } from './js/handlers.js'
import './style.css'

const buttons = document.querySelectorAll('.button')

let root = document.querySelector(':root')
let toggle = document.querySelector('.toggle')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (button.classList.contains('secondary-accent')) handleSpecial(value)
        else if (button.classList.contains('accent')) handleOperator(value)
        else handleNumber(value)
    })
})

toggle.addEventListener('click', () => {
    root.classList.toggle('light')
    if (toggle.textContent === 'Switch to Light Theme')
        toggle.textContent = 'Switch to Dark Theme'
    else toggle.textContent = 'Switch to Light Theme'
})
