//Not solved
const nextBigger = (num) => {

    //Convert integer to a string -> ''+num
    const stringOfNum = num.toString();
    //Convert string into an array of number 
    const intArray = [...stringOfNum].reduce((acc, currentValue) => acc.concat(parseInt(currentValue)), []);

    const sortArray = [3, 1];
    // array.splice(-2, 2, ...sortArray);
    return intArray;

}

const result = nextBigger(123);
console.log(result);
