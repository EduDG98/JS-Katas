// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
const capitalize = string => string.split(" ").map(word => word.toUpperCase()).join(" ");

const swapCase = (string) => {
    let splitedArray = string.split(" ");
    let evenCapitalize = splitedArray.map((word, index) => {
        if (index % 2 === 0) {
            return capitalize(word);
        } else {
            return word;
        }
    });
    return evenCapitalize.join(" ");
}

const swapCase2 = string => string.split(" ").map((word, index) => (index % 2 === 0) ? capitalize(word) : word).join(" ");

const result = "hey que pasa";
console.log(swapCase2(result));