export const generateHashtag = string => {
    if (string == '' || string.length >= 140) {
        return false;
    } else {
        const wordsArray = string.split(' ');
        const uppercCasedWords = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const joinedString = uppercCasedWords.join('');
        return '#' + joinedString;
    }
}

const result = generateHashtag('  hola     a todos');
console.log(result);