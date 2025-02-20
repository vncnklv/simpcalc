export function calculateResult(values, operations) {
    return eval(generateOneLineExpression(values, operations));
}

export function generateOneLineExpression(values, operations) {
    return values.map((num, i) => num + (operations[i] || "")).join("");
}