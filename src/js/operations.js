export function calculate(num1, num2, operation) {
    const calculations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        x: (a, b) => a * b,
        '÷': (a, b) => (b === 0 ? null : a / b),
    }

    const result = calculations[operation]?.(num1, num2)

    if (result === null) {
        return 'Error' // Фиксируем ошибку деления на ноль
    }
    return parseFloat(result.toFixed(10)).toString()
}
