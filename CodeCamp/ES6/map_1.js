
const arrA = [1, 2, 3, 4];
const arrB = arrA.map(num1 => num1 * 2);
const arrC = arrA.map(function (element) {
    return element * 2;
});

console.log(arrA);
console.log(arrB);
console.log(arrC);





// Copiar arrays
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


