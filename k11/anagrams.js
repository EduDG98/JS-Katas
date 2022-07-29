const sortLetters = (word) => word.split('').sort();

const anagrams = (word, words) => {
    const selectedWordsPositions = [];
    const mainWord = sortLetters(word);
    const comparedArray = words.map(element => sortLetters(element))
    console.log(comparedArray)
    if (mainWord === comparedArray.map((index) => index = selectedWordsPositions)) {
        return selectedWordsPositions
    }

}

anagrams('hola', ['ciche', 'laoh'])

