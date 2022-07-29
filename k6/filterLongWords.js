const toSplitWords = string => string.split(" ");
const toSplitLetters = (word) => word.split("");

function filterLongWords(sentence, n) {
    let wordArray = toSplitWords(sentence);
    //console.log(wordArray);
    const nSyllableArray = [];
    wordArray.map(word => {
        let lettersArray = toSplitLetters(word);
        //console.log(lettersArray);
        if (lettersArray.length > n) {
            nSyllableArray.push(word);
            //console.log(nSyllableArray);
            return nSyllableArray;

        }
        //console.log(nSyllableArray);
        return 0;
    });
    return nSyllableArray;
}

const filter = (sentence, n) => sentence.split(" ").filter(word => word.length > n);

const result = filter("The quick brown fox jumps over the lazy dog", 4)
console.log(result);