const display = document.querySelector('.display')

export function updateDisplay(value = '0', hasError = false) {
    display.textContent = value

    let button = document.querySelector('.button')
    if (hasError && button.textContent == 'AC') {
        button.classList.add('indicator')
    } else {
        button.classList.remove('indicator')
    }
}
