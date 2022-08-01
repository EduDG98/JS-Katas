import { incrementString } from './incrementSring';

describe("IncrementString", () => {
    it('should increment string number by 1 - I', () => {
        //Arrange
        const sentence = 'potato1';
        const expected = 'potato2'

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });
    it('should increment string number by 1 - II', () => {
        //Arrange
        const sentence = 'octopus9';
        const expected = 'octopus10';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment number when it start with a 0 - I', () => {
        //Arrange
        const sentence = 'domino089';
        const expected = 'domino090';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment number when it start with a 0 - II', () => {
        //Arrange
        const sentence = 'domino001';
        const expected = 'domino002';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment a number when the string is empty', () => {
        //Arrange
        const sentence = '';
        const expected = '1';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    })
})