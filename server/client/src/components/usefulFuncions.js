export const FtoC = (temp) => {
    return roundNumber((parseInt(temp - 32) * 0.55));
}

export const roundNumber = (number) => {
    return Math.round(number);
}