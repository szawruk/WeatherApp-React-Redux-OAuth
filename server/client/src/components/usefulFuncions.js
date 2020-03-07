export const FtoC = (temp) => {
    return roundNumber((parseInt(temp - 32) * 0.55));
}

export const roundNumber = (number) => {
    return Math.round(number);
}

export const changePolishWord = (word) => {

    word = word.replace(/ę/ig, 'e');
    word = word.replace(/ż/ig, 'z');
    word = word.replace(/ó/ig, 'o');
    word = word.replace(/ł/ig, 'l');
    word = word.replace(/ć/ig, 'c');
    word = word.replace(/ś/ig, 's');
    word = word.replace(/ź/ig, 'z');
    word = word.replace(/ń/ig, 'n');
    word = word.replace(/ą/ig, 'a');

    return word;
}