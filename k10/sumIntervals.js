// const person = { name: 'Juanito', hair: true, age: 26 };
// console.log(person.age.toString(16));

const handleHexadecimal = num => num.toString(16);
const handleSingleNumber = (num) => String(num).padStart(2, 0);
const rgb = (r, g, b) => {
    if (r > 255) {
        r = 255
    } if (g > 255) {
        g = 255
    } if (b > 255) {
        b = 255
    }
    if (r < 0) {
        r = 0
    } if (g < 0) {
        g = 0
    } if (b < 0) {
        b = 0
    }
    const redHex = handleHexadecimal(r);
    const greeHex = handleHexadecimal(g);
    const blueHex = handleHexadecimal(b);
    const redNumAddCero = handleSingleNumber(redHex);
    const greenNumAddCero = handleSingleNumber(greeHex);
    const blueNumAddCero = handleSingleNumber(blueHex);
    const result = redNumAddCero + greenNumAddCero + blueNumAddCero;
    return result.toUpperCase()
}

// const rgb = (r, g, b) => {
//     if (r > 255) {
//         r = 255
//     } else if (g > 255) {
//         g = 255
//     } else if (b > 255) {
//         b = 255
//     }
//     const redHex = r.toString(16);
//     const greeHex = g.toString(16);
//     const blueHex = b.toString(16);
//     const redNumAddCero = redHex.padStart(2, 0);
//     const greenNumAddCero = greeHex.padStart(2, 0);
//     const blueNumAddCero = blueHex.padStart(2, 0);

//     return redNumAddCero + greenNumAddCero + blueNumAddCero;
// }

console.log(rgb(217, 273, 263))
console.log(handleHexadecimal(255))
console.log(handleSingleNumber(1))
