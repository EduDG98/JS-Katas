const finalValueAfterOperations = operations => {
    //Limpiar la informacion entrante
    const inputArray = operations.map(item => {
        //Quedarnos solo con la informacion util
        return item.slice(1, -1);
    })
    //Crear un contador
    let cont = 0;
    //Variar contador segun el array
    inputArray.map(item => {
        if (item === '-') {
            cont = cont - 1;
        } else if (item === '+') {
            cont = cont + 1;
        } else {
            console.log('Error')
        }
    })
    return cont;
}

const operation = ["X++", "++X", "--X", "X--"];
const result = finalValueAfterOperations(operation);
console.log(result)