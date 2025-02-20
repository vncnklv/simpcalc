export function calculateResult(values, operations) {
    return eval(generateOneLineExpression(values, operations).replaceAll('%', ' * 0.01'));
}

export function generateOneLineExpression(values, operations) {
    return values.map((num, i) => num + (operations[i] || "")).join("");
}