const POSSIBLE_SOLUTIONS_LIST = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
export const WINS_ONE = 1;
export const WINS_TWO = 2;
export const DRAW = 0;

const flat = (arrayToFlat) => arrayToFlat.reduce((acc, val) => [...acc, ...val], []);

function assignPossibleSolutionsByIndex(flatArray) {
    return winningIndex => flatArray[winningIndex];
}

const everySlotIsOne = item => item === 1;
const everySlotIsTwo = item => item === 2;


export const isSolved = board => {
    const flatArray = flat(board);
    const posibleSolutionWithValues = POSSIBLE_SOLUTIONS_LIST.map(posiblesSolution => posiblesSolution.map(assignPossibleSolutionsByIndex(flatArray)));

    const winOne = posibleSolutionWithValues.some(combination => combination.every(everySlotIsOne));
    if (winOne) {
        return WINS_ONE;
    }

    const winTwo = posibleSolutionWithValues.some(combination => combination.every(everySlotIsTwo));
    if (winTwo) {
        return WINS_TWO;
    }

    const gameIsNotFinished = flatArray.includes(0)
    if (gameIsNotFinished) {
        return -1;
    }


    return DRAW;


}

const example = [[2, 1, 2], [2, 1, 1], [1, 2, 1]]
const resultExample = isSolved(example);
console.log(resultExample);


