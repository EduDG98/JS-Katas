/*
export const incrementString = string => {
    if (/\d/.test(string)) {
        const stringNum = string.match(/\d+/g);
        const stringWord = string.match(/[^\d+]/g).join('');
        const num = parseInt(stringNum) + 1;
        const diff = stringNum.toString().length - num.toString().length;

        if (num.toString().length < stringNum.toString().length) {
            const literalNum = stringWord + '0'.repeat(diff);
            return literalNum + num;
        }
        return stringWord + num;
    } else {
        return string + 1;
    }
}
*/

export const incrementString = string => {
    const allDigitsValuesMoreThanOnce = /\d/;
    if (allDigitsValuesMoreThanOnce.test(string)) {
        const stringNum = string.match(/\d+/g);

        const allNonDigitsValuesMoreThanOnce = /[^\d+]/g;
        const stringWord = string.match(allNonDigitsValuesMoreThanOnce) || [];      //.match return an array
        const stringWordJoined = stringWord.join('');

        const num = parseInt(stringNum) + 1;
        const diff = stringNum.toString().length - num.toString().length;

        if (num.toString().length < stringNum.toString().length) {
            const literalNum = stringWordJoined + '0'.repeat(diff);
            return literalNum + num;
        }
        return stringWordJoined + num;
    } else {
        return string + 1;
    }
}



const result = incrementString('');
console.log(result);
