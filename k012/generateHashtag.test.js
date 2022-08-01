import { generateHashtag } from './generateHashtag';

describe("GenerateHashtag", () => {
    xit("should return the sentence without spaces", () => {
        //AAA
        //Arrange
        const sentence = 'do we have a hashtag';
        const expected = 'dowehaveahashtag'

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    });
    xit('should return the first letter in uppercase without spaces', () => {
        //Arrange
        const sentence = 'hey big bill';
        const expected = 'HeyBigBill';

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

    it('should start with a #', () => {
        //Arrange
        const sentence = 'ding dang dung';
        const expected = '#DingDangDung';

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

    it('should return false - I', () => {
        //Arrange
        const sentence = '';
        const expected = false;

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

    it('should return false - II', () => {
        //Arrange
        const sentence = ' '.repeat(141);
        const expected = false;

        //Act
        const sut = generateHashtag(sentence);

        //Assert
        expect(sut).toBe(expected);
    })

});


