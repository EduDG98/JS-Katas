export const isomorph = (stringOne, stringTwo) => {
    if (stringOne == '' || stringTwo == '') return false;
    const arrayOne = [...stringOne];
    const arrayTwo = [...stringTwo];

    //Create an array with all positions of char changing
    const positionsObjectOne = getIsomorphPosition(arrayOne);
    const positionsObjectTwo = getIsomorphPosition(arrayTwo);
    //Create an object with the all the chars as keys and the amout of they repeat as values
    const amountOfItemsInObjectOne = countAmountOfCharacters(arrayOne);
    const amountOfItemsInObjectTwo = countAmountOfCharacters(arrayTwo);
    //Take only the values of the object above in an array, that are the values of the amount of each char repeat
    const valuesOfAmountOfItemsInObjectOne = Object.values(amountOfItemsInObjectOne);
    const valuesOfAmountOfItemsInObjectTwo = Object.values(amountOfItemsInObjectTwo);

    //If the array of positions are identical (make it twice to prevent error)
    if (checkArrayAreIdentical(positionsObjectOne, positionsObjectTwo)) {
        if (checkArrayAreIdentical(positionsObjectTwo, positionsObjectOne)) {
            //If the values of the amount of each char repeat are identical in both objects
            if (checkArrayAreIdentical(valuesOfAmountOfItemsInObjectOne, valuesOfAmountOfItemsInObjectTwo)) {
                return true;
            }
        }
    }
    return false;
}

//Create an array with all positions of char changing
const getIsomorphPosition = (arr) => {
    const positions = arr.reduce((accumulator, currentItem, index, currentArray) => {
        if (currentArray[index] !== currentArray[index + 1]) {
            accumulator.push(index);
        }
        return accumulator
    }, [])
    return positions;
}

//Create an object with the all the chars as keys and the amout of they repeat as values
const countAmountOfCharacters = arr => {
    const objectOfRepeatedTimes = arr.reduce((accumulator, currentItem) => {
        if (!accumulator[currentItem]) {
            accumulator[currentItem] = 1;
        } else {
            accumulator[currentItem]++;
        }
        return accumulator;
    }, {});
    return objectOfRepeatedTimes;
}

//Compare if two arrays are identical
const checkArrayAreIdentical = (arrayToTestOne, arrayToTestTwo) => arrayToTestOne.every((item, index) => item === arrayToTestTwo[index])




const string1 = 'papa';
const string2 = 'mama';
const array1 = [...string1];
const array2 = [...string2];

const changedPosition1 = getIsomorphPosition(array1); console.log(changedPosition1)
const changedPosition2 = getIsomorphPosition(array2); console.log(changedPosition2)
const amount1 = countAmountOfCharacters(array1); console.log(amount1);
const amount2 = countAmountOfCharacters(array2); console.log(amount2);
const arrayAmount1 = Object.values(amount1); console.log(arrayAmount1);
const arrayAmount2 = Object.values(amount2); console.log(arrayAmount2);
const result = isomorph(string1, string2); console.log(result);
