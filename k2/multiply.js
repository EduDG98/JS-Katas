/**
multiply(3)==15 // 3 * 5¹
multiply(10)==250 // 10 * 5²
multiply(200)==25000 // 200 * 5³
multiply(0)==0 // 0 * 5¹
multiply(-3)==-15 // -3 * 5¹
 */
const numberDigits = (number) => {
    if (number < 0) {
        const digits = number.toString().length;
        return digits - 1;
    }
    const digits = number.toString().length;
    return digits;
};

const multiply = number => {
    const raisedNum = numberDigits(number);
    return number * (5 ** raisedNum);
};

const result = multiply(-3);
console.log(result);
