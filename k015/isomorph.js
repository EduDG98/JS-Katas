export const isomorph = (stringOne, stringTwo) => {
    if (stringOne == '' || stringTwo == '') return false;
    const arrayOne = [...stringOne];
    const arrayTwo = [...stringTwo];

    const positionsObjectOne = getIsomorphPosition(arrayOne);
    const positionsObjectTwo = getIsomorphPosition(arrayTwo);

    if (positionsObjectOne.every((item, index) => item === positionsObjectTwo[index])) {
        return true;
    }
    return false;
}


export const getIsomorphPosition = (arr) => {
    const positions = arr.reduce((accumulator, currentItem, index, currentArray) => {
        if (currentArray[index] !== currentArray[index + 1]) {
            accumulator.push(index);
        }
        return accumulator
    }, [])
    return positions;
}



// const word1 = ['a', 'b', 'b', 'c', 'c', 'c', 'b'];
// const word2 = ['a', 'b', 'b', 'd', 'd', 'd', 'a'];
const word3 = [];
const word4 = ['a', 'b', 'b', 'd', 'd', 'd', 'a'];
const word5 = [];

const word6 = 'isomorph';
const word7 = 'peaptyu';

const result = getIsomorphPosition(word3);
console.log(result);
const result1 = getIsomorphPosition(word4);
console.log(result1);


const result2 = isomorph(word6, word7);
console.log(result2);
