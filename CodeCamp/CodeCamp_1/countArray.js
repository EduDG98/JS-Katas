function countDown(n) {
    if (n < 1) {
        return [];
    }
    const countArray = countDown(n - 1);
    countArray.unshift(n);
    return countArray;
}

console.log(countDown(5));

