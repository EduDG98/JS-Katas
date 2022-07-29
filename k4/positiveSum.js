/**
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
 */




function positiveSum(arr) {
    const sumNum = arr.reduce((prev, current) => {
        if (prev < 0 || current < 0) {
            current = 0;
        }
        return prev + current;
    }, 0);
    return sumNum;
}

const arr1 = [-1, 2];
console.log(positiveSum(arr1));
