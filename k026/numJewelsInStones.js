const numJewelsInStones = (jewels, stones) => {
    //Crear un array con jewels
    const jewelsArray = jewels.split('');

    //Crear un array de stones
    const stonesArray = stones.split('');

    //Recorrer el array de stones para el primer elemento de jewels
    let cont = 0;
    for (let i = 0; i <= jewelsArray.length; i++) {
        for (let j = 0; j <= stonesArray.length; j++) {

            //Recorrer el array de stones para el siguiente elemento de jewels
            if (jewelsArray[i] === stonesArray[j]) {
                cont = cont + 1;
            }
        }
    }
    return cont - 1;


}

const numJewelsInStones2 = (jewels, stones) => {
    const jewelsArray = jewels.split('');
    const stonesArray = stones.split('');
    const result = jewelsArray.map(jewelsItem => {
        return stonesArray.filter(stonesItem => {
            return jewelsItem === stonesItem;
        }).length;
    });
    return result.reduce((accumulator, current) => accumulator + current, 0);
}

const result = numJewelsInStones2('abB', 'bcdbBbB');
console.log(result)