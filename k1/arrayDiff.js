const arrayDiff = (originalArray, arrayElementsToRemove) => {
    const filterByElement = (element) => {
        if (arrayElementsToRemove.includes(element)) {
            return false;
        }
        return true;
    };
    return originalArray.filter(filterByElement);
};



const result = arrayDiff([1, 2], [1])
console.log(result); 