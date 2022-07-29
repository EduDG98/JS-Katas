//Sumar todos los numeros de un array, definiendo un rest parameter.
const sum = (...args) => {
    return args.reduce((previousNum, currentNum) => previousNum + currentNum, 0);
}


const result = sum(1, 2, 4, 5);
console.log(result);
