const evenOrOdd = (number) => {
    const remainder = number % 2;
    if (remainder == 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(evenOrOdd())

