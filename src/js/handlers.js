import { state } from '../state/calculator.js'
import { updateDisplay } from './display.js'
import { calculate } from './operations.js'
import { formatNumber } from './utils.js'

export function handleNumber(value) {
    if (state.hasError) return // Блокировка ввода при ошибке
    if (state.currentInput.length >= 12) return

    // Обработка точки
    if (value === '.') {
        if (!state.currentInput) state.currentInput = '0'
        if (state.currentInput.includes('.')) return
        state.currentInput += '.'
    } else {
        // Обрабатка чисел
        if (state.currentInput === '0' && value === '0') return
        if (state.currentInput === '0') state.currentInput = value
        else state.currentInput += value
    }

    updateDisplay(
        `${state.previousInput} ${state.operation} ${state.currentInput}`
    )
}

function handleError(result) {
    if (result === 'Error') {
        state.hasError = true
        updateDisplay('Error', state.hasError)
        return true
    }
    return false
}

export function handleOperator(value) {
    if (state.hasError) return // Блокируем операции при ошибке
    if (!state.currentInput && !state.previousInput) return // Блокируем операции при начальном состоянии дисплея

    if (value === '=') {
        if (
            state.previousInput !== '' &&
            state.currentInput !== '' &&
            state.operation
        ) {
            state.currentInput = calculate(
                parseFloat(state.previousInput),
                parseFloat(state.currentInput),
                state.operation
            )

            if (handleError(state.currentInput)) return

            state.previousInput = ''
            state.operation = ''
        }
    } else {
        if (
            state.currentInput !== '' &&
            state.previousInput !== '' &&
            state.operation
        ) {
            state.previousInput = calculate(
                parseFloat(state.previousInput),
                parseFloat(state.currentInput),
                state.operation
            )

            if (handleError(state.previousInput)) return
        } else if (state.currentInput !== '') {
            state.previousInput = state.currentInput
        }

        state.operation = value
        state.currentInput = ''
    }

    updateDisplay(
        state.operation === ''
            ? state.currentInput || '0'
            : `${state.previousInput} ${state.operation} ${state.currentInput}`,
        state.hasError
    )
}

export function handleSpecial(value) {
    switch (value) {
        case 'AC': // Сбрасываем флаг ошибки и возвращаемся к начальному состоянию
            state.currentInput = '0'
            state.previousInput = ''
            state.operation = ''
            state.hasError = false
            updateDisplay('0')
            break

        case '+/-': // Инвертируем знак текущего числа
            if (!state.hasError && state.currentInput) {
                state.currentInput = (
                    parseFloat(state.currentInput) * -1
                ).toString()

                updateDisplay(
                    `${state.previousInput} ${state.operation} ${state.currentInput}`,
                    state.hasError
                )
            }
            break

        case '%':
            if (!state.hasError && state.currentInput) {
                state.currentInput = formatNumber(state.currentInput)
                state.currentInput = (
                    parseFloat(state.currentInput) / 100
                ).toString()
                updateDisplay(
                    `${state.previousInput} ${state.operation} ${state.currentInput}`,
                    state.hasError
                )
            }
            break
    }
}
