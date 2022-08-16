export const pageDigits = pages => {

    const times = pages
    const allNumbers = []

    for (let index = 0; index < times; index++) {
        allNumbers.push(pages--)
    }

    return allNumbers.reverse().join('').length
}




const exampleNumber = 15;
const result = pageDigits(exampleNumber);
console.log(result);

