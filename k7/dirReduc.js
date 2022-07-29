/**
function dirReduc(arr) {
    const arrayDir = [];
    let northOrSouth = null;
    let eastOrWest = null;
    arr.map(dir => {
        console.log(dir);

        if (/north/i.test(dir)) {
            northOrSouth++;
        } else if (/south/i.test(dir)) {
            northOrSouth--;
        } else if (/east/i.test(dir)) {
            eastOrWest--;
        } else if (/west/i.test(dir)) {
            eastOrWest++;
        }

    });
    if (northOrSouth > 0) {
        arrayDir.push("NORTH");
    } else if (northOrSouth < 0) {
        arrayDir.push("SOUTH");
    }

    if (eastOrWest > 0) {
        arrayDir.push("WEST");
    } else if (eastOrWest < 0) {
        arrayDir.push("EAST");
    }
    return arrayDir;
} 
 */

function dirReduc(arr) {
    let joinedArray = arr.join("");
    const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;
    while (pattern.test(joinedArray)) {
        console.log(joinedArray);
        joinedArray = joinedArray.replace(pattern, '');
        console.log(joinedArray);

    }
    return joinedArray.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}



const frase = "perro feo"
const directions = ["NORTH", "SOUTH", "SOUTH", "SOUTH"];
console.log(frase.replace(each("o"), "a"));


