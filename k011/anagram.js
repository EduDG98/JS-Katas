export const anagrams = (word, listOfWords) => {
  const splitedMainWord = word.split('').sort().join();
  const joinedWords = [];
  listOfWords.map((item, index) => {
    if (item.split('').sort().join() == splitedMainWord) {
      joinedWords.push(listOfWords[index])
    }
  });
  return joinedWords;
};

