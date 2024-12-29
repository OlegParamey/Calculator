export function calculate(num1, num2, operation) {
    if (operation === '÷' && num2 === 0) {
        return 'Error'; // Сразу проверяем деление на ноль
    }

    const calculations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        x: (a, b) => a * b,
        '÷': (a, b) => (b === 0 ? null : a / b),
    };

    const result = calculations[operation]?.(num1, num2);

    return parseFloat(result.toFixed(10)).toString();
}
