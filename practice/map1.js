// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"


const capitalize = string => {
    const splitedArray = string.split(" ");
    const upperCaseArray = splitedArray.map(word => word.toUpperCase());
    const joinedString = upperCaseArray.join(" ");
    return joinedString;
}

const capitalize2 = string => string.split(" ").map(word => word.toUpperCase()).join(" ");


const result = "buenas tardes maricona";
console.log(capitalize2(result));
