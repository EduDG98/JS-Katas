// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var shiftLetters = function (string) {
    const letterArray = string.split("");
    const codeArray = letterArray.map((letter) => {
        return String.fromCharCode(letter.charCodeAt() + 1);
    }).join("");
    return codeArray;
}


const result = shiftLetters("hola");
console.log(result);
