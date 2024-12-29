const display = document.querySelector('.display');

let acButton = document.getElementById('ac');

export function updateDisplay(value = '0', hasError = false) {
    display.textContent = value;

    if (hasError) {
        acButton.classList.add('indicator');
    } else {
        acButton.classList.remove('indicator');
    }
}
