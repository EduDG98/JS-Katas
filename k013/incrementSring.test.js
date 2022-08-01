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
    });


    it('should increment string number by 1 - III', () => {
        //Arrange
        const sentence = 'foobar000';
        const expected = 'foobar001';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment string number by 1 - IV', () => {
        //Arrange
        const sentence = 'foo';
        const expected = 'foo1';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment string number by 1 - V', () => {
        //Arrange
        const sentence = 'foobar001';
        const expected = 'foobar002';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment string number by 1 - VI', () => {
        //Arrange
        const sentence = 'foobar99';
        const expected = 'foobar100';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });


    it('should increment string number by 1 - VII', () => {
        //Arrange
        const sentence = 'foobar099';
        const expected = 'foobar100';

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

    it('should increment string number by 1 - VIII', () => {
        //Arrange
        const sentence = "";
        const expected = "1";

        //Act
        const sut = incrementString(sentence);

        //Assert
        expect(sut).toBe(expected);
    });

})

