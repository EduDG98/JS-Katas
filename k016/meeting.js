const meeting = string => {
    const listOfNames = string.toUpperCase().split(';');
    const firstNameList = listOfNames.map(item => item.slice(0, item.indexOf(':')));
    const lastNameList = listOfNames.map(item => item.slice(item.indexOf(':') + 1));
    const lastNameFirstNameList = lastNameList.map((item, index) => item + '-' + firstNameList[index])
    const sortedList = lastNameFirstNameList.sort();
    const styledList = sortedList.map((item, index) => {
        return '(' + item.replace('-', ', ') + ')'
    })
    return styledList.join('');
}

const exampleString = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
const result = meeting(exampleString);
console.log(result);

