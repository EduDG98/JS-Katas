
const countOfNumber = arr => {
    const object = arr.reduce((numberObject, item) => {
        if (!numberObject[item]) {
            numberObject[item] = 1;
        } else {
            numberObject[item] = numberObject[item] + 1;
        }
        return numberObject
    }, {});
    return object
}

const minSetSize = arrayToReduce => {
    if (arrayToReduce.length % 2 != 0) {
        return 'Array length is odd';
    }

    const Numbers = countOfNumber(arrayToReduce);
    const keys = Object.keys(Numbers); console.log(keys);
    const values = Object.values(Numbers); console.log(values)

    const clutterArray = values.map((item, index) => item + '-' + keys[index]); console.log(clutterArray)
    const orderedNumbers = clutterArray.sort().reverse(); console.log(orderedNumbers)


    const numbersToRemoveWithDash = [];
    orderedNumbers.map(item => {
        if (numbersToRemoveWithDash.length !== orderedNumbers.length / 2) {
            numbersToRemoveWithDash.push(item)
        }
    })
    const numbersToRemove = numbersToRemoveWithDash.map(item => item.slice(2)); console.log(numbersToRemove)

    for (let index = 0; index <)

        /**
          for( var i = 0; i < arr.length; i++){ 
            
                if ( arr[i] === 5) { 
            
                    arr.splice(i, 1); 
                }
            
            }
         */

        return result
}


console.log(minSetSize(['A', 'A', 'B', 'C', 'C', 'D', 'D', 'D']))


