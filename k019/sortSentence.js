export const sortSentence = s => {

    const wordAndNumber = s.split(' ')

    const numbers = wordAndNumber.map(item => (item.slice(-1)))
    const words = wordAndNumber.map(item => (item.slice(0, -1)))

    const numberAndWord = numbers.map((item, index) => (item + words[index]))


    const orderSentence = numberAndWord.sort()
    const sentenceWithoutNumber = orderSentence.map(item => item.slice(1))
    return sentenceWithoutNumber.join(' ')
}



const sentence = 'lorena3 me1 llamo2';
const result = sortSentence(sentence);
console.log(result);


