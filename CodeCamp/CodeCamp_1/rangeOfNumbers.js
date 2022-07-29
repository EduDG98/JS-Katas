function rangeOfNumbers(startNum, endNum) {
    let arrayNum = [];
    if (startNum == endNum) {
        arrayNum.push(startNum);
        return arrayNum;
    }
    arrayNum = rangeOfNumbers(startNum, endNum - 1);
    arrayNum.push(endNum);
    return arrayNum;
};


const result = rangeOfNumbers(-5, 9);
console.log(result);
