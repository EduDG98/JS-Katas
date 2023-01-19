const twoSum = (numbers, target) => {
    const obj = {};

    //Crear un obj. Cada valor de numbers es una key del obj.
    numbers.forEach(item => {
        obj[item] = [];
    });
    //Introducir los demas números de numbers salvo el que coincida con la key de obj
    numbers.forEach(item => {
        obj[item] =
    })
    //

}


const targetExaple = 3;
const numsExample = [1, 2, 3];
const result = twoSum(numsExample, targetExaple);
console.log(result)