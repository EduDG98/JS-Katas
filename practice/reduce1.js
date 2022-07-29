// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}

const countLetters = string => string.split("").reduce((acc, item) => {
    if (!acc[item]) {
        acc[item] = 1;
    } else {
        acc[item] = acc[item] + 1;
    }
    return acc;
}, {});


const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
const bowl = fruitBasket.reduce((tally, fruit) => {
    if (!tally[fruit]) {
        tally[fruit] = 1;
    } else {
        tally[fruit] = tally[fruit] + 1;
    }
    return tally;
}, {})


console.log(countLetters("abcab"));
