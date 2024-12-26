import { handleNumber, handleOperator, handleSpecial } from './js/handlers.js'
import './style.css'

const buttons = document.querySelector('.buttons')

let toggle = document.querySelector('.toggle')
let root = document.documentElement

buttons.addEventListener('click', (event) => {
    const button = event.target

    if (!button.classList.contains('button')) return // Проверяем, что клик был по кнопке

    const value = button.textContent

    if (button.classList.contains('secondary-accent')) {
        handleSpecial(value)
    } else if (button.classList.contains('accent')) {
        handleOperator(value)
    } else {
        handleNumber(value)
    }
})

toggle.addEventListener('click', () => {
    const isLightTheme = root.getAttribute('data-theme') === 'light'
    root.setAttribute('data-theme', isLightTheme ? 'dark' : 'light')

    toggle.textContent = isLightTheme
        ? 'Switch to Light Theme'
        : 'Switch to Dark Theme'
})
