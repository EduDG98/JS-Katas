/**
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
const textArray = ["hola", "que", "tal"];
const text = "hola-que-tal"

const toSplit = (str) => {
    const noLineString = str.split('-');
    return noLineString;
};

const toUpperCase = (array) => {

    const arraySplited = toSplit(array);

    const arrayUperCase = arraySplited.map(function () {


        // quitamos guiones o guines bajos
        // reemplazamos priemra misnuscula por mayuscula
        // return


    });
}

function toCamelCase(strToReplace) {

    const characterToRemove = strToReplace.includes('_') ? '_' : '-';

    const listOfWords = strToReplace.split(characterToRemove);

    const listOfParsedWords = listOfWords.map((word, index) => {
        if (index === 0) {
            return word;
        }
        const firstLetter = word.charAt(0).toUpperCase();
        const wordWithoutFirstLetter = word.slice(1)
        //console.log(firstLetter, wordWithoutFirstLetter)

        return firstLetter + wordWithoutFirstLetter;
    });

    return listOfParsedWords.join('')
}

const result = toCamelCase("the_stealth_Warrior")

console.log(result);


/** 

const result = toSplit(text);
const result3 = textArray[1].charAt(0);
const result4 = toLoop(20);

console.log('1 -> ' + result);
console.log('2 -> ' + result3);
console.log('3 -> ' + result4);
*/


/** TERNARY OPERATOR
 *  const characterToRemove = strToReplace.include('_') ? '_' : '-';
  
  let characterToRemove;
  if (strToReplace.include('_')) {
    characterToRemove = '_';
  } else {
    characterToRemove = '-';
  }
 * 
 */