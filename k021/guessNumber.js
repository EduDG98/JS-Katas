const guessNumber = (num) => {
    const guess = () => {
        const limitNumber = 2147483647;
        const pickedNumber = Math.floor(Math.random() * limitNumber) + 1;
        return pickedNumber;
    };

    const numberToGuess = guess(num);

    if (guessNumber > num) {
        return -1;
    }

    if (guessNumber < num) {
        return 1;
    }

    if (guessNumber == num) {
        return 0;
    }

    return 'Error resultado no adivinado';

};


const result = guessNumber(1279895531)
console.log(result)