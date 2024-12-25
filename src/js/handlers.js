import { state } from '../state/calculator.js'
import { updateDisplay } from './display.js'
import { calculate } from './operations.js'
import { formatNumber } from './utils.js'

export function handleNumber(value) {
    if (state.hasError) return // Блокировка ввода при ошибке

    // Обработка запятой
    if (value === ',') {
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

export function handleOperator(value) {
    if (state.hasError) return // Блокируем операции при ошибке
    if (!state.currentInput && !state.previousInput) return // Блокируем операции при начальном состоянии дисплея

    if (value === '=') {
        if (state.previousInput && state.currentInput && state.operation) {
            state.currentInput = formatNumber(state.currentInput)
            state.currentInput = calculate(
                parseFloat(state.previousInput),
                parseFloat(state.currentInput),
                state.operation
            )

            if (state.currentInput === 'Error') {
                // Проверяем на ошибку после вычисления
                state.hasError = true
                updateDisplay('Error', state.hasError)
                return
            }

            state.previousInput = ''
            state.operation = ''
        }
    } else {
        if (state.currentInput && state.previousInput && state.operation) {
            state.currentInput = formatNumber(state.currentInput)
            state.previousInput = calculate(
                parseFloat(state.previousInput),
                parseFloat(state.currentInput),
                state.operation
            )

            if (state.previousInput === 'Error') {
                // Проверяем на ошибку после вычисления
                state.hasError = true
                updateDisplay('Error', state.hasError)
                return
            }
        } else if (state.currentInput) {
            state.previousInput = formatNumber(state.currentInput)
        }
        state.operation = value
        state.currentInput = ''
    }

    updateDisplay(
        state.operation === ''
            ? state.currentInput
            : `${state.previousInput} ${state.operation} ${state.currentInput}`,
        state.hasError
    )
}

export function handleSpecial(value) {
    switch (value) {
        case 'AC': // Сбрасываем флаг ошибки и очищаем все значения
            state.currentInput = ''
            state.previousInput = ''
            state.operation = ''
            state.hasError = false
            updateDisplay('0')
            break

        case '+/-':
            if (!state.hasError && state.currentInput) {
                state.currentInput = formatNumber(state.currentInput)
                state.currentInput = (-parseFloat(
                    state.currentInput
                )).toString()
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
