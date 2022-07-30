import { anagrams } from './anagram';

// const anagramsModule = require('./anagram');
// const { anagrams } = anagramsModule;

describe("Anagrams", () => {
    it("should return a list of all anagrams - I", () => {
        // AAA
        // Arrange - configuras el test
        const word = 'abba';
        const listOfWords = ['aabb', 'abcd', 'bbaa', 'dada'];
        const expected = ['aabb', 'bbaa'];

        // Act - hace las acciones necesarias
        const sut = anagrams(word, listOfWords); // Subject under test

        // Assert - comprueba que el resultado de las acciones es lo debido
        expect(sut).toEqual(expected);
    });
    it("should return a list of all anagrams - II", () => {
        // AAA
        // Arrange - configuras el test
        const word = 'racer';
        const listOfWords = ['crazer', 'carer', 'racar', 'caers', 'racer'];
        const expected = ['carer', 'racer'];

        // Act - hace las acciones necesarias
        const sut = anagrams(word, listOfWords); // Subject under test

        // Assert - comprueba que el resultado de las acciones es lo debido
        expect(sut).toEqual(expected);
    });

    it("should return an empty array for no anagrams", () => {
        // AAA
        // Arrange - configuras el test
        const word = 'laser';
        const listOfWords = ['lazing', 'lazy', 'lacer'];
        const expected = [];

        // Act - hace las acciones necesarias
        const sut = anagrams(word, listOfWords); // Subject under test


        // Assert - comprueba que el resultado de las acciones es lo debido
        expect(sut).toEqual(expected);
    });
});