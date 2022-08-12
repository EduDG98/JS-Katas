const meeting = string => {
    const finalArray = [];
    const listOfNames = string.toUpperCase().split(';');
    const list = listOfNames.reduce((accumulator, item) => {
        accumulator[item.split(':')[0]] = item.slice(item.indexOf(':') + 1);
        return accumulator;
    }, {});
    const firstNameList = Object.keys(list).sort(); console.log(firstNameList);
    const lastNameList = Object.values(list).sort(); console.log(lastNameList);
    lastNameList.map((item, index, array) => {
        for (let i = 0; i < Object.values(list).length; i++) {
            console.log(Object.values(list)[i])
            if (Object.values(list)[i] === array[index]) {
                console.log(item);
            }

        }
    })
    return list
}

const exampleString = 'manolo:lopez;ana:lopez;juan:diaz;mar:diaz'
const result = meeting(exampleString);
console.log(result);

