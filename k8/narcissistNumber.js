/**
 A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
 For example, take 153 (3 digits), which is narcisstic:     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 */

const narcissistic = value => {
    const digitsArray = value.toString().split('');
    const powerOfNum = digitsArray.length;
    const realDigits = digitsArray.map(numItem => Number(numItem));
    const powerOfArray = realDigits.map(num => Math.pow(num, powerOfNum));
    const result = powerOfArray.reduce((prevNum, num) => prevNum + num, 0);
    if (result != value) {
        return false;
    }
    return true;
}

console.log(narcissistic(153))

