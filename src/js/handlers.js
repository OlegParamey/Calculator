import { state } from '../state/calculator.js';
import { updateDisplay } from './display.js';
import { calculate } from './operations.js';
import { formatNumber } from './utils.js';

export function handleNumber(value) {
    if (state.hasError) return; // Блокировка ввода при ошибке
    if (state.currentInput.length >= 15) return;

    // Обработка точки
    if (value === '.') {
        if (!state.currentInput) state.currentInput = '0';
        if (state.currentInput.includes('.')) return;
        state.currentInput += '.';
    } else {
        // Обрабатка чисел
        if (state.currentInput === '0' && value === '0') return;
        if (state.currentInput === '0') state.currentInput = value;
        else state.currentInput += value;
    }

    updateDisplay(`${state.previousInput} ${state.operation} ${state.currentInput}`);
}

function handleError(result) {
    if (result === 'Error') {
        state.hasError = true;
        state.currentInput = '';
        state.previousInput = '';
        state.operation = '';
        updateDisplay('Error', state.hasError);
        return true;
    }
    return false;
}

function handleEqual() {
    if (state.previousInput !== '' && state.currentInput !== '' && state.operation) {
        state.currentInput = calculate(parseFloat(state.previousInput), parseFloat(state.currentInput), state.operation);

        if (handleError(state.currentInput)) return;

        state.previousInput = '';
        state.operation = '';
    }
}

function handleOtherOperator(value) {
    if (state.currentInput !== '' && state.previousInput !== '' && state.operation) {
        state.previousInput = calculate(parseFloat(state.previousInput), parseFloat(state.currentInput), state.operation);

        if (handleError(state.previousInput)) return;
    } else if (state.currentInput !== '') {
        state.previousInput = state.currentInput;
    }

    state.operation = value;
    state.currentInput = '';
}

export function handleOperator(value) {
    if (state.hasError) return;
    if (!state.currentInput && !state.previousInput) return;

    if (value === '=') {
        handleEqual();
    } else {
        handleOtherOperator(value);
    }

    updateDisplay(
        state.hasError ? 'Error' : state.operation === '' ? state.currentInput || '0' : `${state.previousInput} ${state.operation} ${state.currentInput}`,
        state.hasError
    );
}

function handleClear() {
    state.currentInput = '0';
    state.previousInput = '';
    state.operation = '';
    state.hasError = false;
    updateDisplay('0');
}

function handleInvertSign() {
    if (!state.hasError && state.currentInput) {
        state.currentInput = (parseFloat(state.currentInput) * -1).toString();

        updateDisplay(`${state.previousInput} ${state.operation} ${state.currentInput}`, state.hasError);
    }
}

function handlePercentage() {
    if (!state.hasError && state.currentInput) {
        state.currentInput = formatNumber(state.currentInput);
        state.currentInput = (parseFloat(state.currentInput) / 100).toString();

        updateDisplay(`${state.previousInput} ${state.operation} ${state.currentInput}`, state.hasError);
    }
}

export function handleSpecial(value) {
    switch (value) {
        case 'AC':
            handleClear();
            break;

        case '+/-':
            handleInvertSign();
            break;

        case '%':
            handlePercentage();
            break;
    }
}
